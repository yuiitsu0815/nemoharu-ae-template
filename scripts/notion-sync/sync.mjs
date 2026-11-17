// README.md / DOCUMENT.md の同期範囲を Notion ページへ反映する。
//
// 仕組み
//   - Markdown 側: <!-- notion-sync:start --> 〜 <!-- notion-sync:end --> の間だけを送る
//     （マーカーが無いファイルは全体）。
//   - Notion 側: 「自動更新されます」を含むコールアウトを目印にし、それより下を全部消して書き直す。
//     目印より上（画像・ダウンロード欄など）は手動管理のまま残る。
//   - 相対リンク（README.md や #見出し）は Notion では使えないので文字だけにする。
//
// 使い方
//   NOTION_TOKEN=secret_xxx node sync.mjs            … 反映
//   node sync.mjs --dry-run                          … 変換だけしてブロック数を表示（トークン不要）
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Client } from "@notionhq/client";
import { markdownToBlocks } from "@tryfabric/martian";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..", "..");
const targets = JSON.parse(readFileSync(resolve(here, "targets.json"), "utf8"));
const MARKER_TEXT = "自動更新されます";
const dryRun = process.argv.includes("--dry-run");

function extractSyncRange(md) {
  // 行単独で書かれた目印だけを見る（説明文中の `<!-- notion-sync:start -->` は無視）
  const m = md.match(/^<!-- notion-sync:start -->[ \t]*\n([\s\S]*?)^<!-- notion-sync:end -->[ \t]*$/m);
  if (!m) {
    if (/^<!-- notion-sync:start -->/m.test(md)) throw new Error("notion-sync:end が見つかりません");
    return md;
  }
  return m[1].trim() + "\n";
}

function stripRelativeLinks(md) {
  // [text](README.md) / [text](#anchor) / [text](../x) → text。http(s)/mailto はそのまま
  return md.replace(/\[([^\]]+)\]\((?!https?:|mailto:)[^)]*\)/g, "$1");
}

function footer() {
  const sha = (process.env.GITHUB_SHA || "local").slice(0, 7);
  const date = new Date().toISOString().slice(0, 10);
  return `\n---\n\n最終同期: ${date}（GitHub commit ${sha}）\n`;
}

function toBlocks(file) {
  const md = readFileSync(resolve(repoRoot, file), "utf8").replace(/\r\n/g, "\n");
  const body = stripRelativeLinks(extractSyncRange(md)) + footer();
  return markdownToBlocks(body, { notionLimits: { truncate: true } });
}

function plainText(block) {
  const rich = block[block.type]?.rich_text || [];
  return rich.map((r) => r.plain_text || "").join("");
}

async function listChildren(notion, blockId) {
  const out = [];
  let cursor;
  do {
    const res = await notion.blocks.children.list({ block_id: blockId, start_cursor: cursor, page_size: 100 });
    out.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return out;
}

async function syncPage(notion, target, blocks) {
  const children = await listChildren(notion, target.pageId);
  const markerIndex = children.findIndex((b) => b.type === "callout" && plainText(b).includes(MARKER_TEXT));
  if (markerIndex < 0) {
    throw new Error(`${target.title}: 目印のコールアウト（「${MARKER_TEXT}」を含む）が見つかりません`);
  }
  const stale = children.slice(markerIndex + 1);
  for (const b of stale) await notion.blocks.delete({ block_id: b.id });
  for (let i = 0; i < blocks.length; i += 90) {
    await notion.blocks.children.append({ block_id: target.pageId, children: blocks.slice(i, i + 90) });
  }
  console.log(`  ${target.title}: ${stale.length} ブロック削除 → ${blocks.length} ブロック追加`);
}

const token = process.env.NOTION_TOKEN;
if (!dryRun && !token) {
  console.log("NOTION_TOKEN が未設定のため Notion 同期をスキップします");
  process.exit(0);
}
const notion = dryRun ? null : new Client({ auth: token });

let failed = false;
for (const target of targets) {
  const blocks = toBlocks(target.file);
  if (dryRun) {
    const types = {};
    for (const b of blocks) types[b.type] = (types[b.type] || 0) + 1;
    console.log(`${target.file} → ${target.title}: ${blocks.length} blocks`, JSON.stringify(types));
    continue;
  }
  try {
    await syncPage(notion, target, blocks);
  } catch (e) {
    failed = true;
    console.error(`  ${target.title}: 失敗 — ${e.message}`);
  }
}
process.exit(failed ? 1 : 0);

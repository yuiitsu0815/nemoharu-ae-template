# CHANGELOG

テンプレート（構造・AEP）の変更履歴。新しいものを上に追記する。

書式: `## [YYYY-MM-DD] 種別` → 変更点を箇条書き
種別の目安: `構造変更` / `AEP更新` / `ドキュメント` / `修正`

---

## [2026-08-18] 構造変更 / AEP更新
- `05_RENDERS` に `Unreal_Engine` を追加（UE中間レンダーの置き場。STRUCTURE.md / README 同期）
- `template/NC_AE_Template_26.aep` を最新版に差し替え（AE 2026 保存・上記構造反映済み）
- GitHub Release による配布を開始（タグ + AEP添付）

## [2026-08-10] AEP更新
- テンプレート本体を配置: `template/NC_AE_Template_25.aep`（AE 2025 用）/ `template/NC_AE_Template_26.aep`（AE 2026 用・最新）
- README.md / template/README.md をバージョン別2ファイル構成に合わせて更新

## [2026-08-09] セットアップ拡張
- Claude Code 管理用に `CLAUDE.md`（運用ルール）と `PROMPTS.md`（プロンプト集）を追加
- Discord更新通知 `.github/workflows/discord-notify.yml` を追加（Secret: `DISCORD_WEBHOOK`）
- `SETUP.md` に Discord 連携手順を追記

## [2026-08-09] 初期化
- Notion「Nemoharu AE Template File」からドキュメントを移植（README.md / STRUCTURE.md）
- Git + Git LFS でテンプレートを管理開始（`*.aep` は LFS）
- ※ `template/NC_AE_Template.aep` は未配置。実ファイルを配置してコミット予定。

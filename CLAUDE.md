# CLAUDE.md — このリポジトリでのClaude Codeの動き方

このリポジトリは **After Effects 共通テンプレート「NC_AE_Template」の管理用**。
Nemoharu（映像クリエイター）が、AEプロジェクトのフォルダ/bin構造とテンプレAEPをバージョン管理している。

## 最重要ルール

- **`STRUCTURE.md` がフォルダ/bin階層の「正本」**。構造の話は必ずここを基準にする。
- 構造を変更したら、**必ず次の3点をセットで更新**してからコミットする：
  1. `STRUCTURE.md`（正本を編集）
  2. `README.md`（該当箇所の説明・表を同期）
  3. `CHANGELOG.md`（先頭に `## [YYYY-MM-DD] 種別` で1行追記。日付は実際の当日を使う）
- **AE テンプレートの文書はこのリポジトリで管理する**（Notion の「Nemoharu AE Template File」ページは 2026-11-17 に廃止）。
  - 制作ドキュメント / ファイル管理ガイド（案件フォルダ・命名規則）は **Notion の「Document」ページが正本**（2026-11-19 にリポジトリの DOCUMENT.md から Notion へ戻した）。リポジトリには置かない。
  - 公開向けの説明は Notion「Nemoharu Creative Tools」→ ツール一覧の NC_AE_Template 行のページ（設定方法・フォルダ構成の要約・Drive リンク）。構造を変えたらそこの「フォルダ構成」表も直す。
- `template/NC_AE_Template.aep` は**バイナリ**。中身はAEで手動編集する。Claudeは「ファイルの差し替え・add・commit」まで行い、AEPの中身自体は改変しない。
- `*.aep` は Git LFS 管理（`.gitattributes`）。AEPを扱う前に `git lfs install` 済みか確認する。

## コミット規約

- メッセージは日本語でOK。先頭に種別を付ける：
  - `構造変更:` / `AEP更新:` / `ドキュメント:` / `修正:`
- 例: `構造変更: 01_COMPOSITIONに04_Cameraを追加`
- 1コミット=1論理変更。構造変更とAEP差し替えは分けてよい。
- **`Co-Authored-By` トレーラーは付けない**（コミット表示を Nemoharu のみにするため）。

## 命名規則（STRUCTURE.md準拠）

- カット: `CUT_###`（3桁ゼロ埋め、`1 CUT = 1コンポ`）
- 最終コンポ: `〇〇_RENDER` / `〇〇_PREVIEW`
- 先頭番号 `00_`〜`99_` でパネル内の並び順を固定
- Solidフォルダは `99_SOLIDS`（AEの新規プロジェクト平面フォルダーに設定）

## やってよいこと / 慎重にやること

- ✅ テキスト（STRUCTURE.md / README.md / CHANGELOG.md / SETUP.md）の編集・コミット・push
- ✅ `.github/workflows/` の編集（Discord通知など）
- ⚠️ `git push --force` や履歴改変はしない（LFS運用が壊れる）
- ⚠️ 実案件の重い動画素材はこのリポジトリに入れない（LFS無料枠を守るため）

## Discord通知

- pushすると `.github/workflows/discord-notify.yml` がDiscordに更新ログを投稿する。
- 送信先はリポジトリのSecret **`DISCORD_WEBHOOK`**（GitHub → Settings → Secrets and variables → Actions）。
- Webhook URLをコードやファイルに直書きしない。必ずSecretを使う。

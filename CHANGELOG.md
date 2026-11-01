# CHANGELOG

テンプレート（構造・AEP）の変更履歴。新しいものを上に追記する。

書式: `## [YYYY-MM-DD] 種別` → 変更点を箇条書き
種別の目安: `構造変更` / `AEP更新` / `ドキュメント` / `修正`

---

## [2026-11-02] 構造変更 / AEP更新
- ビン名変更: `01_COMPOSITION/02_Elements` → `01_COMPOSITION/02_Sub`（サブコンポ／プリコンプ置き場として名称を整理）
- 25/26 両方の AEP に反映（`old` サブビン等ほかの階層は変更なし）

## [2026-08-18] ドキュメント（利用規約）
- 利用規約 TERMS.md を新設（権利帰属 / 利用許諾範囲 / 禁止事項 / 無保証・責任制限 / 準拠法=日本法）
- 「Nemoharu Creative 配布物 利用規約」に改定: テンプレートに加え、今後公開するスクリプト・
  プラグイン等も対象とする共通規約に拡張（個別条件の優先 / 有償提供物 / ソフトウェア解析禁止 /
  賠償上限を追加）。Notion 公開ページ版も同内容に更新
- README の DOWNLOAD 節に利用規約への導線を追加

## [2026-08-18] AEP更新 / 修正
- ビン名タイポ修正: `01_COPOSITION` → `01_COMPOSITION`（25/26両方、AE側で修正）
- 25/26 の階層が完全一致していることを確認（STRUCTURE.md の既知の相違の注記を削除）

## [2026-08-18] ドキュメント
- README を Notion 原文どおりの全文構成に刷新（省略なし・「原典」行を削除・DOWNLOAD を GitHub Releases に変更）
- STRUCTURE.md を 2026 AEP の実ビン構造に完全同期（old フォルダ・Unreal_Engine を明記、実在ビンと例の区別を明確化）
- 既知の相違として AEP 内の `01_COPOSITION` タイポを記録（次回AEP更新で修正予定）

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

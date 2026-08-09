# PROMPTS — Claude Code に渡すプロンプト集

このフォルダを Claude Code で開いて、下のプロンプトをコピペして使う。

---

## A. 初回セットアップ（リポジトリ作成 + GitHub + Discord通知）

> ※事前に PC で `gh auth login`（yuiitsu0815@gmail.com のGitHubアカウントで認証）と `git lfs install` を済ませておくこと。

```
このフォルダを yuiitsu0815@gmail.com のGitHubアカウントで管理したい。次を順にやって：

1. まだなら git 初期化済みか確認。未pushなら gh CLI で "nemoharu-ae-template" という
   プライベートリポジトリを作成し、origin に設定して main を push する。
2. `.github/workflows/discord-notify.yml` があることを確認し、無ければ作る（pushでDiscordに更新ログを送る内容）。
3. Discord通知に必要な設定手順（Webhook作成 → GitHub Secret `DISCORD_WEBHOOK` 登録）を、
   私が手でやる分を箇条書きで教えて。Secret登録は gh secret set が使えるならコマンドも提示して。
4. 最後に、LFSの無料枠を守るため実案件の重い素材は入れない方針を README/CLAUDE.md と矛盾しないか確認して。

CLAUDE.md のルールに従って進めて。
```

---

## B. 構造を変更する（日常運用）

```
AEテンプレートの構造を変更したい：<ここに変更内容を書く。例：01_COMPOSITION に "04_Camera" フォルダを追加。中に Cam_Main / Cam_Sub を作る>

CLAUDE.md のルール通り、STRUCTURE.md（正本）→ README.md → CHANGELOG.md の順で更新して、
`構造変更:` プレフィックスのコミットにして push まで。日付は今日の実日付で。
```

---

## C. AEP本体を差し替える

```
新しい NC_AE_Template.aep を template/ に置いた（または置き換えた）。
LFSで正しく管理されているか確認して、`AEP更新:` プレフィックスでコミットして push して。
CHANGELOG.md にも「AEP更新」で1行追記して。
```

---

## D. ドキュメントだけ直す

```
README.md / STRUCTURE.md の記述で <直したい点> を修正して、`ドキュメント:` プレフィックスで
コミット・push。CHANGELOG は軽微な修正なら省略していい。
```

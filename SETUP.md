# SETUP — GitHub へ上げる / 日々の更新

## 0. 前提（初回のみ）

```bash
git lfs install   # PCで一度だけ実行しておく
```

## 1. GitHub にプライベートリポジトリを作って push

### 方法A: gh CLI がある場合（一番速い）

```bash
cd nemoharu-ae-template
gh repo create nemoharu-ae-template --private --source=. --remote=origin --push
```

### 方法B: Web で作る場合

1. GitHub で空のプライベートリポジトリ `nemoharu-ae-template` を作成（README等は追加しない）。
2. ローカルで:

   ```bash
   cd nemoharu-ae-template
   git remote add origin git@github.com:<あなたのユーザー名>/nemoharu-ae-template.git
   git push -u origin main
   ```

   （HTTPS派なら remote を `https://github.com/<ユーザー名>/nemoharu-ae-template.git` に）

## 2. AEP 本体を追加

AE バージョン別に3ファイル（`NC_AE_Template_25.aep` = AE 2025 用 / `NC_AE_Template_26.aep` = AE 2026 用 / `NC_AE_Template_27.aep` = AE 2027 用）。

```bash
cp /path/to/NC_AE_Template_2X.aep template/
git add template/
git commit -m "AEP更新: テンプレート本体を追加"
git push
```

## 3. 日々の更新フロー

構造を変えたとき:

```bash
# 1) STRUCTURE.md を編集（正本）
# 2) AEP を更新して上書き保存
# 3) CHANGELOG.md に1行追記
git add -A
git commit -m "構造変更: <何を変えたか>"
git push
```

## 4. Claude Code で更新させる場合

このフォルダを Claude Code で開き、例えばこう指示する:

> STRUCTURE.md に `01_COMPOSITION/04_Camera` を追加して、README とペアで更新、CHANGELOG に記録してコミットして

テキスト（STRUCTURE.md / README.md / CHANGELOG.md）は Claude Code が直接編集・コミットできます。
AEP バイナリ本体の中身は AE で手動更新してください（Claude はファイルの差し替えコミットまで）。

---

## 5. Discord に更新ログを流す

push するたびに `.github/workflows/discord-notify.yml` が Discord に更新内容を投稿します。設定は初回のみ。

### 手順

1. **Discord 側**: 通知したいチャンネル → 「連携サービス」→「ウェブフックを作成」→ **ウェブフックURLをコピー**。
2. **GitHub 側**: リポジトリ → Settings → Secrets and variables → Actions → **New repository secret**
   - Name: `DISCORD_WEBHOOK`
   - Secret: コピーしたウェブフックURL

   `gh` CLI なら1行:

   ```bash
   gh secret set DISCORD_WEBHOOK --body "https://discord.com/api/webhooks/xxxx/yyyy"
   ```

3. 何か変更して push → Discord に「🎬 AEテンプレ更新」が届けば成功。

> Webhook URL は Secret に入れるだけ。ファイルやコミットには絶対に書かないこと。

### もっと手軽に済ませたい場合（Actionを使わない代替）

Discord は GitHub 連携を内蔵しています。Actionを使わず、コミット履歴だけ流したいなら:

1. 上と同じく Discord チャンネルのウェブフックURLを取得。
2. **URLの末尾に `/github` を付ける**（例: `.../webhooks/xxx/yyy/github`）。
3. GitHub → リポジトリ Settings → Webhooks → Add webhook に、その `/github` 付きURLを Payload URL として登録（Content type: `application/json`、イベントは Just the push event）。

こちらは整形が素っ気ない代わりにゼロコード。好みで選んでください（`discord-notify.yml` の方が見やすいログになります）。

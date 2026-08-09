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

```bash
cp /path/to/NC_AE_Template.aep template/NC_AE_Template.aep
git add template/NC_AE_Template.aep
git commit -m "AEP: テンプレート本体を追加"
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

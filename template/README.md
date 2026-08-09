# template/

ここに AE テンプレート本体を置きます。AE のバージョンごとにファイルを分けています（新しい AE で保存した AEP は古い AE で開けないため）。

```
template/
├── NC_AE_Template_25.aep   ← After Effects 2025 用
└── NC_AE_Template_26.aep   ← After Effects 2026 用（最新）
```

使用中の AE バージョンに合った方を「新規プロジェクト読み込みテンプレート」に設定してください。

## AEP を更新する手順

1. 手元の最新版 AEP をこのフォルダに上書きコピー。
2. `*.aep` は `.gitattributes` により **Git LFS** で管理されます（事前に `git lfs install` 済みであること）。
3. コミット:

   ```bash
   git add template/
   git commit -m "AEP更新: <何を変えたか>"
   git push
   ```

## 更新するとき

- AEP を上書き保存 → `git add` → `git commit` → `git push`。
- 構造を変えた場合は `../STRUCTURE.md` と `../CHANGELOG.md` も更新すること。

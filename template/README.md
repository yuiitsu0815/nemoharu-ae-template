# template/

ここに AE テンプレート本体を置きます。

```
template/
└── NC_AE_Template.aep
```

## AEP を配置する手順

1. Notion の DOWNLOAD、または手元の最新版から `NC_AE_Template.aep` をこのフォルダにコピー。
2. `*.aep` は `.gitattributes` により **Git LFS** で管理されます（事前に `git lfs install` 済みであること）。
3. コミット:

   ```bash
   git add template/NC_AE_Template.aep
   git commit -m "AEP: テンプレート本体を追加"
   git push
   ```

## 更新するとき

- AEP を上書き保存 → `git add` → `git commit` → `git push`。
- 構造を変えた場合は `../STRUCTURE.md` と `../CHANGELOG.md` も更新すること。

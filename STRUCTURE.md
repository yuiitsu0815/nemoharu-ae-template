# STRUCTURE — フォルダ / bin 階層の正本

このファイルが AE テンプレートの**フォルダ構造の正本（source of truth）**です。
構造を変えるときは、まずここを編集してから AEP に反映してください。
ツリーは**テンプレAEPに実在するビン**、`# 例:` は実制作で中に作る内容の例（任意）です。

```
NC_AE_Template
├── 00_FINAL                # 例: 〇〇_RENDER / 〇〇_PREVIEW
│
├── 01_COMPOSITION
│   ├── 01_Main             # 1 CUT = 1 コンポ。例: CUT_001〜CUT_004
│   │   └── old             # 使わなくなったカットの退避先
│   ├── 02_Elements         # 再利用エレメント。例: Particles / Glitch / Background / Noise / Overlay / LightSweep
│   │   └── old
│   └── 03_Lyric            # 歌詞モーション。例: Lyric_A / Lyric_B / Lyric_Chorus
│       └── old
│
├── 02_AUDIO                # 例: Music / SE / Voice / Guide
│
├── 03_IMAGE                # 例: Illust / Logo / Vector / Raster（制作ソフトごとに整理）
│
├── 04_FOOTAGE              # 例: 実写素材 / ストック動画 / 背景動画
│
├── 05_RENDERS              # 中間レンダーのみ（最終動画は置かない）
│   ├── After_Effects
│   ├── After_Effects_Proxies
│   ├── Blender
│   ├── Cinema4d
│   └── Unreal_Engine
│
└── 99_SOLIDS               # AEのSolid（新規プロジェクト平面フォルダーに設定）
```

> ⚠️ 既知の相違: 現行AEPのビン名は `01_COPOSITION`（Mが抜けたタイポ）になっている。
> ドキュメントは正しい `01_COMPOSITION` を正とし、次回AEP更新時にビン名を修正すること。

## 命名規則メモ

- カット: `CUT_###`（3桁ゼロ埋め）
- 最終コンポ: `〇〇_RENDER` / `〇〇_PREVIEW`
- 歌詞: `Lyric_〇〇`
- プレフィックス番号（`00_`〜`99_`）でパネル内の並び順を固定する

## 変更時のチェックリスト

- [ ] STRUCTURE.md を更新した
- [ ] AEP（`template/NC_AE_Template_25.aep` / `_26.aep` の両方）に反映した
- [ ] 「新規プロジェクト平面フォルダー = 99_SOLIDS」を確認した
- [ ] CHANGELOG.md に記録した

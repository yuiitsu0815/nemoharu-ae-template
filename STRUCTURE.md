# STRUCTURE — フォルダ / bin 階層の正本

このファイルが AE テンプレートの**フォルダ構造の正本（source of truth）**です。
構造を変えるときは、まずここを編集してから AEP に反映してください。
（`[]` 内は「例・任意」の中身。実制作で増減するものはここに書き足す）

```
NC_AE_Template
├── 00_FINAL
│   ├── 〇〇_RENDER          # 最終書き出し用
│   └── 〇〇_PREVIEW         # プレビュー用
│
├── 01_COMPOSITION
│   ├── 01_Main             # 1 CUT = 1 コンポジション
│   │   ├── CUT_001
│   │   ├── CUT_002
│   │   ├── CUT_003
│   │   └── CUT_004
│   ├── 02_Elements         # 再利用エレメント（Mainから呼び出す）
│   │   ├── Particles
│   │   ├── Glitch
│   │   ├── Background
│   │   ├── Noise
│   │   ├── Overlay
│   │   └── LightSweep
│   └── 03_Lyric            # 歌詞モーション
│       ├── Lyric_A
│       ├── Lyric_B
│       └── Lyric_Chorus
│
├── 02_AUDIO
│   ├── Music
│   ├── SE
│   ├── Voice
│   └── Guide
│
├── 03_IMAGE
│   ├── Illust
│   ├── Logo
│   ├── Vector
│   └── Raster
│
├── 04_FOOTAGE
│   ├── 実写素材
│   ├── ストック動画
│   └── 背景動画
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

## 命名規則メモ

- カット: `CUT_###`（3桁ゼロ埋め）
- 最終コンポ: `〇〇_RENDER` / `〇〇_PREVIEW`
- 歌詞: `Lyric_〇〇`
- プレフィックス番号（`00_`〜`99_`）でパネル内の並び順を固定する

## 変更時のチェックリスト

- [ ] STRUCTURE.md を更新した
- [ ] AEP（`template/NC_AE_Template.aep`）に反映した
- [ ] 「新規プロジェクト平面フォルダー = 99_SOLIDS」を確認した
- [ ] CHANGELOG.md に記録した

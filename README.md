# Nemoharu AE Template File

After Effects プロジェクトを整理し、**素材・コンポジション・レンダー・最終出力を明確に分離する**ための共通テンプレート。

- 想定用途: MV制作 / PV制作 / CG合成 / UE + AEパイプライン
- 狙い: プロジェクトの可読性向上 / チーム制作の効率化 / 修正対応の高速化

> フォルダ/bin 階層の「正本」は **[STRUCTURE.md](STRUCTURE.md)** です。
> 構造を変えたいときは、まず STRUCTURE.md を編集 → AEP に反映 → CHANGELOG に記録、の順で運用します。
> Claude Code / 手動どちらでも STRUCTURE.md を直せば差分が読みやすく残ります。

---

## セットアップ

### ① プロジェクトテンプレートの設定

```
編集 → 環境設定 → 新規プロジェクト
```

**「新規プロジェクト読み込みテンプレート」を有効**にし、`template/NC_AE_Template.aep` を選択する。

### ② 新規プロジェクト平面（Solid）フォルダーの設定

新規プロジェクト平面フォルダーを **`99_SOLIDS`** に設定する。

---

## フォルダ構成（概要）

| フォルダ | 役割 |
|---|---|
| `00_FINAL` | 最終書き出し・プレビュー用コンポ |
| `01_COMPOSITION` | 作業コンポジション（制作の中心） |
| `02_AUDIO` | 音素材 |
| `03_IMAGE` | 静止画素材 |
| `04_FOOTAGE` | 動画素材 |
| `05_RENDERS` | 中間レンダーデータ（最終動画は置かない） |
| `99_SOLIDS` | AE の Solid 素材 |

詳細な階層と命名は [STRUCTURE.md](STRUCTURE.md) を参照。

---

## 各フォルダの説明

### 00_FINAL
最終書き出し用のコンポジションを配置。動画を構成する**すべてのカットをまとめたコンポジション**を置く。

- 用途: 最終書き出し用コンポ / プレビュー用コンポ
- 例: `〇〇_RENDER`, `〇〇_PREVIEW`

### 01_COMPOSITION
作業コンポジションを格納。制作の中心。

- `01_Main` … メインのカットコンポジション
- `02_Elements` … 再利用エレメント
- `03_Lyric` … 歌詞モーション

#### 01_Main
メインのカットコンポを配置。基本ルールは **`1 CUT = 1コンポジション`**。

- 例: `CUT_001`, `CUT_002`, `CUT_003`, `CUT_004`
- カット単位に分けることで、修正対応 / シーン差し替え / チーム分業が容易になる。

#### 02_Elements
再利用するエレメントコンポジションを格納。Main コンポから呼び出して使用する。

- 例: `Particles`, `Glitch`, `Background`, `Noise`, `Overlay`, `LightSweep`

#### 03_Lyric
歌詞モーション用コンポジション。MV は歌詞管理が複雑になりやすいため独立フォルダで管理。

- 例: `Lyric_A`, `Lyric_B`, `Lyric_Chorus`

### 02_AUDIO
音素材を格納。

- 例: `Music`, `SE`, `Voice`, `Guide`

### 03_IMAGE
静止画像素材。制作ソフトごとに整理する。

- 例: `Illust`, `Logo`, `Vector`, `Raster`

### 04_FOOTAGE
動画素材。

- 例: `実写素材`, `ストック動画`, `背景動画`

### 05_RENDERS
中間レンダーデータ（3D ソフトや AE からの書き出し素材）を格納。**最終動画は置かない。**

- 区分: `After_Effects`, `After_Effects_Proxies`, `Blender`, `Cinema4d`
- 例: EXR sequence / TIFF sequence / proxy 動画 / 中間書き出し

### 99_SOLIDS
AE の Solid 素材を格納。プロジェクト内に自動生成される Solid をここにまとめて管理する。

---

## 更新の運用ルール

1. 構造・命名を変えるときは **STRUCTURE.md を先に編集**（ここが正本）。
2. AEP テンプレート本体（`template/NC_AE_Template.aep`）を実際に更新。
3. **CHANGELOG.md** に日付と変更内容を1行追記。
4. コミットしてpush。

---

原典: Notion「Nemoharu AE Template File」（Nemoharu Creative Doc）

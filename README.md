# Nemoharu AE Template File

## 概要

本テンプレートは、After Effects プロジェクトを整理し、
**素材・コンポジション・レンダー・最終出力を明確に分離する**ことを目的としています。

特に以下の制作を想定しています。

- MV制作
- PV制作
- CG合成
- UE + AEパイプライン

構造を統一することで

- プロジェクトの可読性向上
- チーム制作の効率化
- 修正対応の高速化

を狙っています。

> フォルダ/bin 階層の「正本」は **[STRUCTURE.md](STRUCTURE.md)** です。
> 構造を変えたいときは、まず STRUCTURE.md を編集 → AEP に反映 → CHANGELOG に記録、の順で運用します。

---

## 関連ドキュメント

AE テンプレートの文書はこのリポジトリで管理しています。変更履歴は [CHANGELOG.md](CHANGELOG.md) と git の履歴で追えます。案件フォルダ全体のルール（制作ドキュメント / ファイル管理ガイド）は、作者の Notion で管理しています（非公開）。

| ファイル | 内容 |
| --- | --- |
| [README.md](README.md)（このファイル） | AE テンプレートの使い方と、プロジェクトパネル内のビン構成の説明 |
| [STRUCTURE.md](STRUCTURE.md) | ビン構成の正本 |

役割の違い:

- **制作ドキュメント（Notion）** は、PC 上の案件フォルダ全体のルールです。例: `NC26003_SoraeSora_MV/01_projects/ae/`
- **README.md / STRUCTURE.md** は、その中に置く AE プロジェクトのプロジェクトパネル内のビン構成です。例: `00_FINAL` 〜 `99_SOLIDS`

---

## DOWNLOAD

使っている AE のバージョンに合うファイルをダウンロードしてください（GitHub Releases の最新版）。

- After Effects 2027 → [NC_AE_Template_27.aep](https://github.com/yuiitsu0815/nemoharu-ae-template/releases/latest/download/NC_AE_Template_27.aep)
- After Effects 2026 → [NC_AE_Template_26.aep](https://github.com/yuiitsu0815/nemoharu-ae-template/releases/latest/download/NC_AE_Template_26.aep)
- After Effects 2025 → [NC_AE_Template_25.aep](https://github.com/yuiitsu0815/nemoharu-ae-template/releases/latest/download/NC_AE_Template_25.aep)

過去の版は [GitHub Releases](https://github.com/yuiitsu0815/nemoharu-ae-template/releases) から。

> ダウンロード・利用の前に **[Nemoharu Creative 配布物 利用規約](https://nemoharu-creative.com/terms)**（[TERMS.md](TERMS.md)）を確認してください。
> （テンプレート・スクリプト・プラグインなど Nemoharu Creative の配布物に共通の規約です）
> 個人・商用利用OK / 成果物の権利は利用者に帰属 / 配布物自体の再配布・販売は禁止。

---

## ① プロジェクトテンプレートの設定方法

```
編集
↓
環境設定
↓
新規プロジェクト
```

**新規プロジェクト読み込みテンプレート**を**有効**にし、DLした **NC_AE_Template_27.aep**（AE 2026 の場合は `_26`、AE 2025 の場合は `_25`）を選択する。

## ② 新しいプロジェクト平面フォルダー

**99_SOLIDS** と設定

---

## 各フォルダの説明

## 00_FINAL

最終書き出し用のコンポジションを配置するフォルダ。
ここには **動画を構成するすべてのカットをまとめたコンポジション**を置く。

主な用途

- 最終書き出し用コンポ
- プレビュー用コンポ

例

```plain text
〇〇_RENDER
〇〇_PREVIEW
```

---

## 01_COMPOSITION

After Effectsの作業コンポジションを格納するフォルダ。
制作の中心になる場所。

```plain text
01_Main
02_Sub
03_Lyric
```

---

### 01_Main

メインのカットコンポジションを配置する。

基本ルール

```plain text
1 CUT = 1コンポジション
```

例

```plain text
CUT_001
CUT_002
CUT_003
CUT_004
```

カット単位に分けることで

- 修正対応
- シーン差し替え
- チーム分業

が容易になる。

---

### 02_Sub

Mainコンポから呼び出すサブコンポジション（プリコンプ・再利用エレメント）を格納する。

例

```plain text
Particles
Glitch
Background
Noise
Overlay
LightSweep
```

Mainコンポから呼び出して使用する。

---

### 03_Lyric

歌詞モーション用コンポジション。
MV制作では歌詞管理が複雑になりやすいため
独立したフォルダとして管理する。

例

```plain text
Lyric_A
Lyric_B
Lyric_Chorus
```

---

## 02_AUDIO

音素材を格納するフォルダ。

例

```plain text
Music
SE
Voice
Guide
```

---

## 03_IMAGE

静止画像素材。

例

```plain text
Illust
Logo
Vector
Raster
```

制作ソフトごとに整理する。

---

## 04_FOOTAGE

動画素材。

例

```plain text
実写素材
ストック動画
背景動画
```

---

## 05_RENDERS

中間レンダーデータを格納するフォルダ。
3DソフトやAEからの書き出し素材。

```plain text
After_Effects
After_Effects_Proxies
Blender
Cinema4d
Unreal_Engine
```

例

```plain text
EXR sequence
TIFF sequence
proxy動画
中間書き出し
```

ここには **最終動画を置かない。**

---

## 99_SOLIDS

After EffectsのSolid素材を格納するフォルダ。
プロジェクト内に自動生成されるSolidを
このフォルダにまとめて管理する。

---

## 更新の運用ルール

1. 構造・命名を変えるときは **STRUCTURE.md を先に編集**（ここが正本）。
2. AEP テンプレート本体（`template/NC_AE_Template_25.aep` / `NC_AE_Template_26.aep` / `NC_AE_Template_27.aep`）を実際に更新。
3. **CHANGELOG.md** に日付と変更内容を1行追記。
4. コミットしてpush。リリースするときはタグを切って GitHub Release に AEP を添付。

> **注意**: このリポジトリに入れるのは**テンプレートと構造ドキュメントのみ**。
> 実案件の重い動画・画像素材は入れない（Git LFS の無料枠を守るため。詳細は [CLAUDE.md](CLAUDE.md) の運用ルール参照）。

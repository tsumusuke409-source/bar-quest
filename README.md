# BAR QUEST – Spirits of the Night

バー「ムーンライト」を舞台にした**見習いバーテンダー育成ゲーム**。  
ピクセルアート×レトロRPGスタイルで本格的なバーテンダー知識を学べるWebゲームです。

## 概要

- **6チャプター / 29ステージ** の段階的カリキュラム
- **3つの練習モード**: クイズ・カクテル実践・接客シミュレーション
- **図鑑**: 解放したカクテルとキャラクターを閲覧
- 全ステージクリアで**修了証明書**を取得
- セーブデータをlocalStorageに自動保存

## 技術スタック

| 役割 | 技術 |
|------|------|
| フレームワーク | React 19 + TypeScript |
| ビルド | Vite 8 |
| 状態管理 | Zustand + persist middleware |
| グラフィック | SVGピクセルアート (外部画像ゼロ) |
| BGM / SFX | Web Audio API (手書き8bitメロディ) |
| フォント | Press Start 2P / DotGothic16 (Google Fonts) |

## セットアップ

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 本番ビルド
npm run preview  # ビルド確認
```

## ディレクトリ構造

```
src/
├── App.tsx                    # 画面ルーター
├── types/index.ts             # 全TypeScript型定義
├── store/gameStore.ts         # Zustandストア (セーブデータ)
├── hooks/
│   ├── useAudio.ts            # Web Audio API エンジン
│   └── useSaveData.ts         # セーブ操作
├── data/
│   ├── stages.ts              # 6チャプター・29ステージ定義
│   ├── dialogues.ts           # 全講義ダイアログ
│   ├── cocktails.ts           # 16種カクテルデータ
│   ├── quizzes.ts             # 70問クイズ
│   └── characters.ts          # キャラクター・接客シナリオ
├── components/
│   ├── pixel/                 # SVGピクセルアートコンポーネント
│   ├── ui/                    # 汎用UIコンポーネント
│   └── screens/               # 各画面
└── index.css                  # グローバルスタイル
```

## コンテンツの追加方法

### クイズを追加する (`src/data/quizzes.ts`)

```ts
{
  id: 'unique_id',
  category: 'basics', // basics|tools|glasses|spirits|techniques|cocktails|service|mixed
  question: '問題文',
  options: ['A', 'B', 'C', 'D'],
  correct: 0,          // 0-indexed
  explanation: '解説文',
  chapterRef: 1,
}
```

### カクテルを追加する (`src/data/cocktails.ts`)

```ts
{
  id: 'cocktail_id',
  name: 'カクテル名', nameEn: 'English Name',
  ingredients: [{ item: '材料', amount: '量' }],
  technique: 'shake', // build|stir|shake|blend
  glass: 'cocktail', garnish: 'ガーニッシュ',
  difficulty: 2, unlockedByChapter: 4,
  description: '説明', history: '歴史',
  abv: 15, taste: '味', color: '#ff6600',
  steps: [{ action: '手順', item: 'item_key' }],
}
```

## Vercelデプロイ

```bash
vercel --prod
# ビルドコマンド: npm run build / 出力: dist
```

## SEO / Google Search Console

### 配信ファイル

| ファイル | URL | 説明 |
|------|-----|------|
| `public/robots.txt` | `/robots.txt` | 全クローラー許可・サイトマップ指定 |
| `public/sitemap.xml` | `/sitemap.xml` | トップページのみ（SPA のため URL は1つ） |
| `public/og-image.png` | `/og-image.png` | OGP画像 1200×630px |

> **SPA の注意点**：このゲームはすべての画面が `https://minarai-barquest.com/` 単一 URL で動作する SPA です。  
> ステージマップ・クイズ・図鑑などは Zustand の状態遷移で切り替わるため、サイトマップに複数 URL は不要です。

### ローカルでの確認

```bash
npm run build && npm run preview
# → http://localhost:4173/sitemap.xml
# → http://localhost:4173/robots.txt
# → http://localhost:4173/og-image.png
```

### OGP の確認

デプロイ後に以下のサービスで確認できます：

- **opengraph.xyz**: https://www.opengraph.xyz/  
  URL 欄に `https://minarai-barquest.com` を入力
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator

### Google Search Console でのサイトマップ送信

1. [Google Search Console](https://search.google.com/search-console) を開く
2. 左メニュー「インデックス作成」→「サイトマップ」を選択
3. 以下の URL を入力して「送信」：
   ```
   https://minarai-barquest.com/sitemap.xml
   ```
4. ステータスが「成功しました」になれば完了

### sitemap.xml の更新方法

コンテンツを大きく更新したときは `public/sitemap.xml` の `<lastmod>` を編集してください：

```xml
<lastmod>YYYY-MM-DD</lastmod>  ← 今日の日付に変更
```

## 注意事項

このゲームは教育目的で作成されています。  
**お酒は20歳になってから。飲酒運転は絶対にしないでください。**

# Portfolio Site

就職活動用のポートフォリオサイトです。

## 技術スタック

- Next.js (App Router) / TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build
```

## デプロイ

Cloudflare Pagesへのデプロイは、GitHub Actions経由で自動化されています。

### 必要な環境変数

GitHubリポジトリのSecretsに以下を設定してください：

- `CLOUDFLARE_API_TOKEN`: Cloudflare APIトークン
- `CLOUDFLARE_ACCOUNT_ID`: CloudflareアカウントID

## プロジェクト構成

```
src/
├── app/              # Next.js App Router
│   ├── activities/   # 取り組み一覧ページ
│   ├── blog/         # ブログ一覧ページ
│   ├── globals.css   # グローバルスタイル
│   ├── layout.tsx    # ルートレイアウト
│   └── page.tsx      # トップページ
├── components/       # 再利用可能なコンポーネント
│   └── StarBackground.tsx
└── lib/              # ユーティリティ・データ
    └── data.ts       # プロフィール、Works、Blog等のデータ
```

## カスタマイズ

`src/lib/data.ts` を編集することで、プロフィール情報やコンテンツを変更できます。


# 🪨 LoGravel

`LoGravel` 是一個使用 Next.js 打造的個人技術部落格。此專案旨在記錄與分享前端、後端、演算法及軟體工程相關的知識，希望能幫助到正在學習路上的開發者們。

## ✨ 技術架構 (Technology Stack)

- **框架 (Framework)**: Next.js (App Router)
- **語言 (Language)**: TypeScript
- **內容 (Content)**: MDX
- **樣式 (Styling)**: Tailwind CSS 搭配 shadcn/ui 元件庫及 next-themes
- **程式碼品質 (Code Quality)**: ESLint、Prettier
- **Git Hooks**: Husky、lint-staged

## 🚀 安裝與執行方式 (Installation and Execution)

請依照以下步驟在本機端運行此專案：

1.  **Clone 專案至本地**

    ```bash
    git clone https://github.com/sksak75312/LoGravel.git
    cd LoGravel
    ```

2.  **安裝依賴**
    本專案使用 `pnpm` 作為套件管理器。

    ```bash
    pnpm install
    ```

3.  **啟動開發環境**

    ```bash
    pnpm dev
    ```

    開啟瀏覽器並前往 `http://localhost:3000`。

4.  **其他常用指令**
    - `pnpm build`: 建立生產環境版本
    - `pnpm start`: 啟動生產環境伺服器
    - `pnpm lint`: 執行 ESLint 檢查
    - `pnpm format`: 使用 Prettier 格式化所有檔案

## 📂 專案結構 (Project Structure)

專案主要遵循 Next.js App Router 的結構，核心檔案位於 `src` 資料夾中。

```
/
├── content/              # MDX 文章內容
├── public/               # 靜態資源 (圖片, etc.)
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (home)/       # 首頁路由群組
│   │   ├── programs/     # 文章列表與單一文章頁面
│   │   ├── layout.tsx    # 根佈局
│   │   ├── sitemap.ts    # Sitemap 生成
│   │   └── robots.txt    # robots.txt
│   ├── components/       # 共用元件
│   │   └── ui/           # Shadcn UI 元件
│   ├── hooks/            # 自定義 Hooks
│   ├── lib/              # 包含第三方套件的共用樣式
│   ├── styles/           # 全域樣式
│   └── types/            # TypeScript 型別定義
├── .eslintrc.json        # ESLint 設定檔
├── next.config.ts        # Next.js 設定檔
├── package.json          # 專案依賴與腳本
├── pnpm-lock.yaml        # pnpm 鎖定檔
└── tsconfig.json         # TypeScript 設定檔
```

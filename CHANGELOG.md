# CHANGELOG

## 0.1.5 ( 2025-06-14 )

### feat

- 新增文章側邊 TOC 結構，使用 remark-parse 取得 Mdast 結構，搭配 mdast-util-toc 取得 mdast 目錄結構
- 修改 Meta Title 顯示方式，由 LoGravel | %s 改成 %s | LoGravel

### style

- 調整 ProgramBlogPage 的文章顯示樣式，Heading、Text 移除，新增 Code 區塊 Background Color
- Header 的 Position 樣式調整，將文檔層級調高

### chore

- 新增 rehype-lighheight、lighheight.js 套件增加 HTML Code 區塊樣式

## 0.1.4 ( 2025-06-05 )

### feat

- 定義 Post Interface
- 新增單一文章頁面功能

### refactor

- 重構 getPostData Utils 為單一函式
- 文章列表使用共用元件

### fix

- 修正 NEXT 路徑錯誤

### style

- 調整 Header 背景顏色位置

### chore

- 新增 next-mdx-remote-client 套件
- 新增 Ts paths @content/\* 路徑

### test

- 增加 content 測試 MDX 文件

## 0.1.3 ( 2025-06-02 )

### feat

- 取得 MDX Frontmatter 功能

### chore

- 新增 @tailwwindcss/typography 套件
- 新增 gray-matter 套件

### style

- 調整 Header、Footer 元件樣式
- 調整 RootLayout CSS Container 位置

### refactor

- 重構文章列表，拆元件

## 0.1.2 ( 2025-05-29 )

### style

- 新增首頁電腦版
- 新增 GlobalHeader 電腦版
- 新增 GlobalFooter 元件
- GlobalHeader 樣式調整

### chore

- 新增 prettier-plugin-tailwindcss 套件
- CSS utility container 調整

## 0.1.1 ( 2025-05-24 )

### style

- 設定網站文字樣式

### chore

- 調整 package.json 設定
- 更換 Favicon 檔案
- 新增 MDX 相關套件
- 新增 Shadcn/UI 套件

### docs

- 設定 Meta Title 、 Description

## 0.1.0 ( 2025-05-19 )

### chore

- Logravel 專案環境初始化

# CHANGELOG

## 0.1.8 ( 2025-07-14 )

### fix

- 修正 ProgramBlogLayout 的 Metadata，將單一文章的連結設定為自己，不是指向首頁

### refactor

- 重構 PostCard component props 的參數名稱，讓元件可使用展開方式傳值進來

### feat

- 新增 ScrollIndicator 元件，用來顯示網頁滾動進度條
- 新增 GlobalHeader 元件手機版
- 新增 useWindowScroll Hook，提供網頁監聽滾動
- 新增 next-themes 套件，目前預設 dark 版，light 版顏色尚未新增
- 修正 ProgramsPage 資料傳入 PostCard 方法

### style

- 調整 GlobalHeader 樣式
- 調整 GlobalFooter 樣式
- 調整 home page 最新文章區塊樣式
- 調整 Shadcn Ui 的 Button 元件樣式
- 新增 Shadcn Ui 的 Badge 元件
- 首頁主視覺調整
- 重新調整 PostCard component 樣式
- 修正 container 類別 padding 符合 ListLayout，避免網頁 X 軸出現
- 文章 TOC 元件平板以下設備隱藏

## 0.1.7 ( 2025-07-04 )

### feat

- 新增 robots.txt 和 sitemap.ts 檔案，提高 SEO 搜尋
- 新增 LD-JSON
- Home Layout 拆至 Group Route
- 新增 LdJson 元件
- 設定首頁 Metadata，使用 Next Metadata 物件方式
- 設定單一文章 Metadata，使用 Next generateMetadata function

### fix

- 修改 BlogLayout.tsx 傳入 params 參數為 Promise 泛型

### style

- 執行一次 prettier format 讓所有檔案符合相同程式碼風格

## 0.1.6 ( 2025-06-30 )

### feat

- 新增 Shadcn UI 的 Accordion 元件，並修改部分樣式
- 調整 BlogLayout 排版和 BlogPage 顯示文章標題、最後修改時間時間和 Image 圖片顯示
- 新增 Google Core Web Vitals 文章

### fix

- 修正 PostCard 元件路徑寫錯，增加 /
- 根目錄 layout.tsx 的 description 修改一個字

### style

- Header 新增 Hover 效果、Padding Y軸縮小，Nav 列表改動態渲染方式

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

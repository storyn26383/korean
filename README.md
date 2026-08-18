# 韓文文法筆記

以 Astro、Markdown 同 GitHub Pages 建立嘅韓文文法 blog。

目前只完成網站架構；文章內容、分類同標籤方式會另外討論。

## 本機開發

```sh
npm install
npm run dev
```

## 建置

```sh
npm run build
```

## 內容位置

文章日後會放入 `src/content/posts/`。目前 content schema 只保留所有 blog 都需要嘅基本欄位，未加入分類、標籤或者文法程度。

## 部署

合併到 `master` 後，GitHub Actions 會自動建置並發佈到 GitHub Pages。Repository 嘅 Pages source 需要設為 **GitHub Actions**。

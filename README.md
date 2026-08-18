# SSY 韓文文法筆記

以 Astro、Markdown 同 GitHub Pages 建立嘅韓文文法 blog。

網站收錄韓文文法、例句同相關單字筆記。

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

文章放喺 `src/content/posts/`，使用 Markdown 或 MDX 編寫。每篇文章嘅 frontmatter 包含：

```yaml
title: "文章標題"
description: "文章簡介"
publishedAt: 2026-08-18
tags:
  - 初級文法
draft: false
```

`tags` 最少要有一個項目，用嚟標示文章類型或者主題；目前已使用嘅 tag 係 `初級文法`。文章內容以文法解說、五個例句同「今日單字」組成。

外站 HTTP／HTTPS 連結會自動喺新分頁開啟；站內連結會留喺原本分頁。

## 部署

合併到 `master` 後，GitHub Actions 會自動建置並發佈到 GitHub Pages。Repository 嘅 Pages source 需要設為 **GitHub Actions**，自訂網域係 `korean.percussion.life`。

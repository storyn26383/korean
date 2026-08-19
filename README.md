# SSY 韓文筆記

以 Astro、Markdown 同 GitHub Pages 建立嘅韓文學習筆記 blog。

網站收錄韓文文法、例句同相關生字筆記。

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

文章放喺 `src/content/posts/`，使用 Markdown 或 MDX 編寫。檔名使用 `YYYY-MM-DD-slug.md` 格式，例如 `2026-08-19-giro-hada.md`。

每篇文章嘅 frontmatter 包含：

```yaml
title: "文章標題"
description: "文章簡介"
publishedAt: 2026-08-18
tags:
  - 初級文法
draft: false
```

文章網址會直接使用檔名，所以亦會包含發佈日期。`tags` 最少要有一個項目，用嚟標示文章類型或者主題；目前已使用嘅 tag 係 `初級文法`。文章內容以文法解說、五個例句同「今日生字」組成。

文法文章嘅動詞變化教學統一放喺「文法接法」，先寫「冇 받침」，再寫「有 받침」。如果個文法有不規則變化，先另外加入「不規則變化」；唔限於 `ㄹ`，要按嗰個文法實際適用嘅變化整理。每段使用「動詞／語幹／變化」三欄表格，唔會再用 code block 重複表格已經列出嘅變化。

韓文同中文相接時，兩種文字之間使用一個半形空格；中文標點前面唔加空格。

外站 HTTP／HTTPS 連結會自動喺新分頁開啟；站內連結會留喺原本分頁。

## 顯示模式

網站預設跟隨系統嘅淺色／深色模式。Header 嘅切換按鈕可以手動轉換模式，選擇會儲存喺瀏覽器。

## 部署

合併到 `master` 後，GitHub Actions 會自動建置並發佈到 GitHub Pages。Repository 嘅 Pages source 需要設為 **GitHub Actions**，自訂網域係 `korean.percussion.life`。

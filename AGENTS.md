# AGENTS.md

## Project

- This is an Astro static blog for Korean learning notes.
- The site title is `SSY 韓文筆記`.
- The canonical site URL is `https://korean.percussion.life`.
- GitHub Pages uses the custom domain above, so the site has no repository base path.
- The default branch is `master`. Pull requests must target `master`.

## Development

- Use npm as the package manager.
- Run `npm run build` after changing the site.
- Do not add production dependencies unless they are necessary.
- Preserve both light and dark themes when changing colors or component styles.

## Content

- Blog posts belong in `src/content/posts/`.
- Post filenames use the `YYYY-MM-DD-slug.md` format.
- Public post URLs are derived from the full filename and include the date prefix.
- Posts may cover Korean grammar or other Korean learning topics.
- Every post must include at least one tag. Approved tags are `初級文法` and `初級詞彙`.
- Do not invent new tags, categories, levels, or other content taxonomy without explicit instructions.
- Do not write or modify Korean learning content unless explicitly requested.
- External HTTP and HTTPS links must open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`. Same-origin links must stay in the current tab.

### Grammar post structure

- Include `title`, `description`, `publishedAt`, `tags`, and `draft` in frontmatter.
- After changing an article's scope, confirm that `description` still reflects its main teaching points and remains distinct from other posts.
- Keep the filename date prefix in sync with `publishedAt`.
- Start with a concise explanation of the grammar's meaning and one representative Korean example with a Cantonese translation.
- Use `## 文法接法` for conjugation rules.
- Under `文法接法`, put `### 冇 받침` before `### 有 받침`.
- Add `### 不規則變化` only when the grammar actually has an irregular or exceptional conjugation. Omit the section completely when none applies.
- `不規則變化` is a general section and is not limited to `ㄹ`. Verify and include every irregular pattern that actually applies to the grammar, such as `ㄹ`, `ㅂ`, `ㄷ`, `ㅅ`, `ㅎ`, or `르`; do not add patterns that do not apply.
- Use a `動詞 | 語幹 | 變化` table in each conjugation section. Do not repeat the same conjugations immediately in a code block.
- Use `## 例句` with exactly five numbered examples: three basic examples followed by two variations.
- Use `## 今日生字` for vocabulary. The user supplies the vocabulary; do not invent extra words unless explicitly asked.
- For each supplied word, include its part of speech, Cantonese meaning, common collocations, and the example used in the article.
- Add comparisons with related grammar or extra usages only when they materially clarify the target grammar.
- End with `## 總結` and `## 參考資料`.
- Verify Korean grammar and vocabulary against authoritative Korean-language sources before publishing, and link the sources in `參考資料`.
- Put one half-width space between adjacent Korean and Chinese prose on both boundaries. Do not add a space before Chinese punctuation.

### Vocabulary post structure

- Include `title`, `description`, `publishedAt`, `tags`, and `draft` in frontmatter.
- Keep the filename date prefix in sync with `publishedAt`.
- Use the `初級詞彙` tag when vocabulary, expressions, or collocations are the main teaching point rather than a grammar pattern.
- Start with a concise explanation of the topic and a quick-reference table.
- Organize a themed vocabulary post around its target words. When the focus is verbs, use the verbs as the main section headings and list compatible nouns or collocations under each verb.
- Preserve every word or expression supplied by the user. Do not invent extra words unless explicitly asked.
- Give each expression a Cantonese meaning and include at least one natural example for every target word.
- Call out overlapping or easily confused usages when they materially help the learner choose the correct expression.
- End with `## 總結` and `## 參考資料`.
- Verify Korean vocabulary and collocations against authoritative Korean-language sources before publishing, and link the sources in `參考資料`.
- Put one half-width space between adjacent Korean and Chinese prose on both boundaries. Do not add a space before Chinese punctuation.

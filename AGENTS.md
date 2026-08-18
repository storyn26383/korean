# AGENTS.md

## Project

- This is an Astro static blog for Korean grammar notes.
- The site title is `SSY 韓文文法筆記`.
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
- Each post focuses on Korean grammar and includes grammar explanations, example sentences, and vocabulary.
- Each post uses five example sentences: three basic examples and two variations.
- Use `今日單字` as the vocabulary section heading.
- The user supplies the vocabulary for each post. Do not invent a vocabulary list unless explicitly asked.
- Every post must include at least one tag. `初級文法` is an approved tag.
- Do not invent new tags, categories, levels, or other content taxonomy without explicit instructions.
- Do not write or modify Korean learning content unless explicitly requested.
- External HTTP and HTTPS links must open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`. Same-origin links must stay in the current tab.

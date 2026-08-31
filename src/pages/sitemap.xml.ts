import { getCollection } from 'astro:content';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET(context: { site?: URL }) {
  if (!context.site) {
    throw new Error('The site URL is required to generate sitemap.xml.');
  }

  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const tags = [...new Set(posts.flatMap((post) => post.data.tags))].sort((firstTag, secondTag) =>
    firstTag.localeCompare(secondTag, 'zh-Hant'),
  );

  const urls = [
    new URL('/', context.site),
    new URL('/tags/', context.site),
    ...tags.map((tag) => new URL(`/tags/${encodeURIComponent(tag)}/`, context.site)),
    ...posts.map((post) => new URL(`/posts/${post.id}/`, context.site)),
  ];

  const entries = urls
    .map((url) => `  <url>
    <loc>${escapeXml(url.href)}</loc>
  </url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    },
  );
}

import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

export const GET: APIRoute = async ({ url }): Promise<Response> => {
  const query = url.searchParams.get('query');

  // Handle search if query is not present
  if (query === null) {
    return new Response(JSON.stringify({ error: 'Query param is missing' }), {
      status: 400, // Bad Request
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const allBlogArticles = await getCollection('blog');

  // Filter articles based on query
  const filteredArticles = allBlogArticles.filter((article) => {
    const titleMatch = article.data.title
      .toLowerCase()
      .includes(query!.toLowerCase());
    const bodyMatch = article.body.toLowerCase().includes(query!.toLowerCase());
    const slugMatch = article.slug.toLowerCase().includes(query!.toLowerCase());

    return titleMatch || bodyMatch || slugMatch;
  });

  return new Response(JSON.stringify(filteredArticles), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

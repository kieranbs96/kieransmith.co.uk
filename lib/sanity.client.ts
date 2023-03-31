import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from 'lib/sanity.api';
import { allPostsQuery, postBySlugQuery } from 'lib/queries/blog.queries';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

/* Blog */
export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(allPostsQuery)) || [];
  }
  return [];
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

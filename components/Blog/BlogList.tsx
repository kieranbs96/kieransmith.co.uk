import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  posts: Post[];
}

function BlogList({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      {posts.map((post) => (
        <PostPreview key={post._id} post={post} />
      ))}
    </div>
  );
}

interface PostPreview {
  post: Post;
}

function PostPreview({ post }: PostPreview) {
  return (
    <div className="relative mb-5 max-w-sm rounded-lg bg-white shadow-md">
      <Link href={`/blog/${post.slug}`}>
        {post.mainImage && (
          <Image
            className="rounded-t-lg"
            src={urlForImage(post.mainImage).url()}
            alt={post.author.name}
            width={400}
            height={250}
          />
        )}
      </Link>
      <div className="absolute top-1 right-1 flex flex-col gap-y-2 lg:flex-row lg:gap-x-2">
        {post?.topics &&
          post.topics.map((topic) => (
            <div
              key={topic._id}
              className="rounded-full bg-slate-800 px-3 py-1 text-center text-sm font-semibold text-black"
            >
              <p>{topic.title}</p>
            </div>
          ))}
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post.title}</h5>
          <p className="mb-3 font-normal text-gray-700">
            {new Date(post._createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

export default BlogList;

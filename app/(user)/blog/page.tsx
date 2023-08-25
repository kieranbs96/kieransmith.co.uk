import { getAllPosts } from 'lib/sanity.client';
import BlogList from 'components/Blog/BlogList';
import Banner from 'components/Banner';

export default async function Home() {
  // if (previewData()) {
  //   return (
  //     <PreviewSuspense
  //       fallback={
  //         <div role="status">
  //           <p className="animate-pulse text-center text-lg text-[#f7ab0a]">
  //             Loading preview data...
  //           </p>
  //         </div>
  //       }
  //     >
  //       <PreviewBlogList />
  //     </PreviewSuspense>
  //   );
  // }

  const posts = await getAllPosts();

  return (
    <>
      <Banner title={'Blog'} />
      <BlogList posts={posts} />
    </>
  );
}

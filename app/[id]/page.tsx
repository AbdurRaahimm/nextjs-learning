import { getPostByComment, getPostById } from '@/apis/posts'
import Comments from '@/components/Comments';
import Post from '@/components/Post'
import { notFound, redirect } from 'next/navigation'
import { Suspense } from 'react';

export default async function SinglePost({ params }: { params: { id: number } }) {
  const { id } = await params;

  // Check if id is a valid number; if not, redirect to home page
  if (isNaN(id)) {
    return redirect('/');
  }

  // Fetch the post by ID
  // const post = await getPostById(id);
  // const comments = await getPostByComment(id);

  const [post, comments] = await Promise.all([getPostById(id), getPostByComment(id)])

  // If no post found, redirect to 404 page
  if (!post) {
    return notFound();
  }

  // Render the Post component
  return (
    <div>
      <h1 className="text-2xl text-center font-bold mb-4">Post Details</h1>
      <Suspense fallback={<h2>Loading Posts...</h2>}>
        <Post post={post} />
      </Suspense>
      <Suspense fallback={<h2>Loading Comments...</h2>}>
        <Comments comments={comments} />
      </Suspense>
    </div>
  );
}

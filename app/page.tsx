import { getPost } from "@/apis/posts";
import Post from "@/components/Post";

export const metadata = {
    title: "Home",
    description: "Home page",
}

export default async function Home() {
  const posts = await getPost();
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

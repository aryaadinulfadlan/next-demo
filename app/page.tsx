import PostList from "@/components/post/post-list";
import db from "@/lib/db";

export default async function Home() {
  const posts = await db.post.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div className="max-w-xl mx-auto py-4 px-2">
      <PostList posts={posts} />
    </div>
  );
}

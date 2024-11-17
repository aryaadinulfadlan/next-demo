import PostCard from "@/components/post/post-card";
import PostForm from "@/components/post/post-form";
import prisma from "@/lib/db";

export default async function Home() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div className="max-w-xl mx-auto py-4 px-2">
      <PostForm />
      <hr className="my-10" />
      <p>Posts List:</p>
      <div className="flex flex-col gap-3 mx-auto w-[300px] mt-2">
        {posts.map((el) => (
          <PostCard key={el.id} post={el} />
        ))}
      </div>
    </div>
  );
}

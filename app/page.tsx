import { createPost } from "@/actions/posts";
import prisma from "@/lib/db";

export default async function Home() {
  const posts = await prisma.post.findMany();
  return (
    <div className="p-10">
      <form action={createPost} className="flex flex-col gap-4 w-[300px]">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="p-2 outline-none text-black"
        />
        <input
          type="text"
          name="content"
          placeholder="Content"
          className="p-2 outline-none text-black"
        />
        <button
          type="submit"
          className="bg-purple-400 text-white px-5 py-2 rounded-md"
        >
          Create New Post
        </button>
      </form>
      <h1 className="mt-6">Posts List</h1>
      <hr />
      <div className="flex flex-col gap-2">
        {posts.map((el) => (
          <div key={el.id}>
            <p>
              <span className="font-bold">ID:</span> {el.id}
            </p>
            <p>
              <span className="font-bold">Title:</span> {el.title}
            </p>
            <p>
              <span className="font-bold">Content:</span> {el.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { Post } from "@prisma/client";
import PostCard from "./post-card";
import { useActionState } from "react";
import { createPost } from "@/actions/posts";

interface Props {
  posts: Array<Post>;
}
export default function PostList({ posts }: Props) {
  const [state, formAction, isPending] = useActionState(createPost, null);
  return (
    <>
      <p>Create a new post here:</p>
      <form
        action={formAction}
        className="flex flex-col gap-3 w-[300px] mx-auto mt-2"
      >
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="py-1 px-2 rounded-sm outline-none text-black disabled:cursor-not-allowed"
            disabled={isPending}
          />
          {state?.errors?.title && (
            <p className="text-red-300">{state.errors.title}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <textarea
            rows={4}
            name="content"
            placeholder="Content"
            className="py-1 px-2 rounded-sm outline-none text-black disabled:cursor-not-allowed"
            disabled={isPending}
          />
          {state?.errors?.content && (
            <p className="text-red-300">{state.errors.content}</p>
          )}
        </div>
        <button
          className="bg-slate-600 font-semibold px-3 py-1 rounded-md disabled:opacity-45 disabled:cursor-not-allowed"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Submitting.." : "Create New Post"}
        </button>
      </form>
      <hr className="my-10" />
      <p>Posts List:</p>
      <div className="flex flex-col gap-3 mx-auto w-[300px] mt-2">
        {posts.length ? (
          posts.map((el) => <PostCard key={el.id} post={el} />)
        ) : (
          <p className="text-center font-bold">No Post Available</p>
        )}
      </div>
    </>
  );
}

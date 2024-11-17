"use client";

import { createPost } from "@/actions/posts";
import { useActionState } from "react";

export default function PostForm() {
  const [state, formAction, isPending] = useActionState(createPost, null);

  console.log({ state });
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
            <p className="text-red-500">{state.errors.title}</p>
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
            <p className="text-red-500">{state.errors.content}</p>
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
    </>
  );
}

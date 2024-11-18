"use client";

import { updatePost } from "@/actions/posts";
import { CreatePostSchema } from "@/schemas/post";
import { Post } from "@prisma/client";
import { redirect } from "next/navigation";
import { useState, useTransition } from "react";

interface Props {
  post: Post | null;
}
const defaultErrorValue = {
  title: "",
  content: "",
};
export default function UpdateForm({ post }: Props) {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState(defaultErrorValue);
  const formAction = (formData: FormData) => {
    const validatedFields = CreatePostSchema.safeParse({
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    });
    if (!validatedFields.success) {
      const errorsFields = validatedFields.error.flatten().fieldErrors;
      return setErrors({
        title: errorsFields.title ? errorsFields.title[0] : "",
        content: errorsFields.content ? errorsFields.content[0] : "",
      });
    }
    setErrors(defaultErrorValue);
    startTransition(() => {
      updatePost(post!.id, validatedFields.data)
        .then((response) => alert(response.message))
        .catch((err) => console.log(`Something went wrong ${err}`))
        .finally(() => {
          redirect("/");
        });
    });
  };
  return (
    <>
      <p>Update post here:</p>
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
            defaultValue={post?.title}
          />
          {errors.title && <p className="text-red-300">{errors.title}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <textarea
            rows={4}
            name="content"
            placeholder="Content"
            className="py-1 px-2 rounded-sm outline-none text-black disabled:cursor-not-allowed"
            disabled={isPending}
            defaultValue={post?.content}
          />
          {errors.content && <p className="text-red-300">{errors.content}</p>}
        </div>
        <button
          className="bg-slate-600 font-semibold px-3 py-1 rounded-md disabled:opacity-45 disabled:cursor-not-allowed"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Updating.." : "Update"}
        </button>
      </form>
    </>
  );
}

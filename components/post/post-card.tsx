"use client";

import { deletePost } from "@/actions/posts";
import { Post } from "@prisma/client";
import Link from "next/link";
import React, { useTransition } from "react";

interface PostCardProps {
  post: Post;
}
export default function PostCard({ post }: PostCardProps) {
  const { content, id, title } = post;
  const [isPending, startTransition] = useTransition();
  const handleDelete = () => {
    const confirmed = window.confirm(`Are you sure to delete ${title}?`);
    if (confirmed) {
      startTransition(() => {
        deletePost(id)
          .then((response) => {
            alert(response?.message);
          })
          .catch(() => alert("Something went wrong"));
      });
    }
  };
  return (
    <div className="bg-slate-500 rounded-md max-w-[300px] p-4">
      <p className="font-bold">Title: {title}</p>
      <p className="font-bold">Content: {content}</p>
      <div className="mt-4 flex gap-3">
        <Link href={`/${id}`} className="px-4 py-1 bg-slate-700 rounded-md">
          View
        </Link>
        <button
          onClick={handleDelete}
          className="px-4 py-1 bg-red-500 rounded-md disabled:opacity-45 disabled:cursor-not-allowed"
          disabled={isPending}
        >
          {isPending ? "Deleting.." : "Delete"}
        </button>
      </div>
    </div>
  );
}

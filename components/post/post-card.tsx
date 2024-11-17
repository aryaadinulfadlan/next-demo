"use client";
import { Post } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface PostCardProps {
  post: Post;
}
export default function PostCard({ post }: PostCardProps) {
  const { content, id, title } = post;
  const handleDelete = () => {
    const confirmed = window.confirm(`Are you sure to delete ${title}?`);
    if (confirmed) {
      alert("Deleted");
    }
  };
  return (
    <div className="bg-slate-500 rounded-md max-w-[300px] p-4">
      <p className="font-bold">Title: {title}</p>
      <p className="font-bold">Content: {content}</p>
      <div className="mt-4 flex gap-3">
        <Link href={`/${id}`} className="px-4 py-1 bg-slate-700 rounded-md">
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="px-4 py-1 bg-red-500 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

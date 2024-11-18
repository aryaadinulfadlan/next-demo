import db from "@/lib/db";
import Link from "next/link";
import React from "react";

interface PageProps {
  params: Promise<{ postId: string }>;
  searchParams: Promise<{ [key: string]: string | Array<string> | undefined }>;
}
export default async function PostDetail({ params, searchParams }: PageProps) {
  const pageParams = await params;
  const pageSearchParams = await searchParams;
  const postItem = await db.post.findUnique({
    where: {
      id: pageParams.postId,
    },
  });
  console.log({ postItem });
  return (
    <div className="max-w-xl mx-auto py-10 px-2 w-fit">
      <div className="bg-slate-500 rounded-md w-[300px] p-4">
        <Link href={"/"} className="underline font-bold mb-3 inline-block">
          back
        </Link>
        <p className="font-bold">Title: {postItem?.title}</p>
        <p className="font-bold">Content: {postItem?.content}</p>
      </div>
    </div>
  );
}

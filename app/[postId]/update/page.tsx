import UpdateForm from "@/components/post/update-form";
import db from "@/lib/db";
import Link from "next/link";

interface PageProps {
  params: Promise<{ postId: string }>;
  searchParams: Promise<{ [key: string]: string | Array<string> | undefined }>;
}
export default async function PostUpdate({ params, searchParams }: PageProps) {
  const pageParams = await params;
  const postItem = await db.post.findUnique({
    where: { id: pageParams.postId },
  });
  return (
    <div className="max-w-xl mx-auto py-4 px-2">
      <Link href={"/"} className="underline font-bold inline-block mb-3">
        back
      </Link>
      <UpdateForm post={postItem} />
    </div>
  );
}

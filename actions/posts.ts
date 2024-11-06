"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  // validation here
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  await db.post.create({
    data: {
      title,
      content,
    },
  });
  revalidatePath("/");
}

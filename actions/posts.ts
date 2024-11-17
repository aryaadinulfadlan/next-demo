"use server";

import db from "@/lib/db";
import { CreatePostSchema } from "@/schemas/post";
import { CreatePostFormState, DeletePostFormState } from "@/actions/types";
import { revalidatePath } from "next/cache";

export async function createPost(
  _prevState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const validatedFields = CreatePostSchema.safeParse({
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    const posted = await db.post.create({
      data: {
        title: validatedFields.data.title,
        content: validatedFields.data.content,
      },
    });
    if (!posted) {
      return {
        message: "An error occured on the server",
      };
    }
    return {
      message: "Successfully Post New Item!",
    };
  } catch (error) {
    return {
      message: "An error occured on the server",
    };
  } finally {
    revalidatePath("/");
  }
}

export async function deletePost(id: string): Promise<DeletePostFormState> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    await db.post.delete({
      where: {
        id,
      },
    });
    return {
      message: "Deleted Successfully!",
    };
  } catch (error) {
    return {
      message: "An error occured",
    };
  } finally {
    revalidatePath("/");
  }
}

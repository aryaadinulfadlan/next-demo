import * as zod from "zod";

export const CreatePostSchema = zod.object({
  title: zod
    .string()
    .min(3, { message: "Title is minimum 3 characters!" })
    .max(10, { message: "Title is maximum 10 characters!" }),
  content: zod
    .string()
    .min(5, { message: "Content is minimum 5 characters!" })
    .max(15, { message: "Content is maximum 5 characters!" }),
});

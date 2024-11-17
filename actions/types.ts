export type CreatePostFormState = {
  errors?: {
    title?: Array<string>;
    content?: Array<string>;
  };
  message?: string;
} | null;

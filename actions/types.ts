export type CreatePostFormState = {
  errors?: {
    title?: Array<string>;
    content?: Array<string>;
  };
  message?: string;
} | null;

export type DeletePostFormState = {
  message: string;
} | null;

export interface PostUpdateData {
  title: string;
  content: string;
}

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PostList from "./post-list";

const postListData = [
  {
    title: "first",
    id: "x1",
    content: "content",
    published: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "second",
    id: "x2",
    content: "content",
    published: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
describe("Post List Component", () => {
  it("should renders a title", () => {
    render(<PostList posts={postListData} />);
    const title = screen.getByText("Create a new post here:");
    expect(title).toBeInTheDocument();
  });
});

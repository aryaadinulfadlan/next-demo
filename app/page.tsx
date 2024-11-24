import PostList from "@/components/post/post-list";
import Test from "@/components/test";
import WithLoading from "@/hocs/with-loading";
import db from "@/lib/db";

const TestWithLoading = WithLoading(Test);
export default async function Home() {
  const posts = await db.post.findMany({ orderBy: { createdAt: "desc" } });
  // const externalAPIs = await fetch("http://localhost:4000/api/users");
  // const response = await externalAPIs.json();
  // console.log({ externalAPIsResponse: response });
  return (
    <div className="max-w-xl mx-auto py-4 px-2">
      <PostList posts={posts} />
      <TestWithLoading isLoading={true} />
    </div>
  );
}

"use client";

import { useGetPostsQuery } from "@/services/jsonPlaceholderApi";

export default function Home() {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <div>loadinggg.....</div>;
  }

  if (error) {
    return <div>Erorrrrrrr idiot</div>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2>hi redux</h2>
      <div className="grid grid-cols-1 gap-4">
        {data?.map((post: { id: number; title: string; body: string }) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

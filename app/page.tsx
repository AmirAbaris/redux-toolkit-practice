"use client";

import {
  useCreatePostsMutation,
  useGetPostsQuery,
} from "@/services/jsonPlaceholderApi";
import { useState } from "react";

export default function Home() {
  const [newPost, setNewPost] = useState({ title: "", body: "", id: 69 });

  const { data, error, isLoading } = useGetPostsQuery(undefined);
  const [createPost, { isLoading: isCreating, error: createError }] =
    useCreatePostsMutation(undefined);

  if (isLoading) {
    return <div>loadinggg.....</div>;
  }

  if (isCreating) {
    return <div>Creating...</div>;
  }

  if (error) {
    return <div>Erorrrrrrr idiot</div>;
  }

  if (createError) {
    return <div>not cooool, u got a creation error, bad boy</div>;
  }

  async function handleCreatePost() {
    await createPost(newPost);
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

      <div className="mt-12">
        <h4>CREATEEEE POST</h4>
        <input type="text" placeholder="title" />
        <input
          type="text"
          placeholder="body"
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, body: e.target.value }))
          }
        />
        <button onClick={handleCreatePost}>create the freaking post</button>
      </div>
    </div>
  );
}

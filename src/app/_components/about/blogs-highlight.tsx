import React from "react";
import { blogPosts } from "./blogs-data";
import Text from "@/components/ui/text";
import Link from "next/link";

const BlogsHighlight = () => {
  const displayedPosts = blogPosts.slice(0, 3);

  return (
    <div>
      <Text className="mb-4 text-lg font-light text-black dark:text-white">
        Latest Blogs
      </Text>
      <div className="flex flex-col gap-3 transition-all duration-300">
        {displayedPosts.map((post) => (
          <div
            key={post.id}
            className="cursor-pointer rounded-xl border border-neutral-200 bg-violet-100 p-4 outline-4 outline-transparent transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:outline-neutral-400 dark:border-neutral-900 dark:bg-neutral-700/30 dark:hover:border-neutral-800 dark:hover:outline-neutral-600"
          >
            <Text
              variant="h2"
              className="text-lg text-neutral-700 dark:text-white"
            >
              {post.title}
            </Text>
            <Text className="mt-1">{post.excerpt}</Text>
          </div>
        ))}
      </div>
      {/* <Link
        href="/blogs"
        className="mx-4 w-fit cursor-pointer px-2 py-2 opacity-60 transition-all duration-300 ease-in hover:opacity-100"
      >
        <Text>View All</Text>
      </Link> */}
    </div>
  );
};

export default BlogsHighlight;

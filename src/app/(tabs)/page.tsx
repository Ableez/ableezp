import Text from "@/components/ui/text";
import React from "react";
import Experience from "../_components/about/experience";
import Works from "../_components/about/works";
import NewsLetterSubs from "../_components/about/news-letter-subs";
import BlogsHighlight from "../_components/about/blogs-highlight";

const Home = () => {
  return (
    <div className="grid gap-6">
      <div className="absolute left-1/2 h-[0.8px] w-screen -translate-x-1/2 bg-gradient-to-l from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />

      <div className="mb-4 mt-6">
        <Text className="text-base md:text-lg">
          Hello! I&apos;m Abdullahi, a software developer based in Lagos,
          Nigeria. Passionate about building software that solve.
        </Text>
      </div>

      <Experience />
      <Works />
      <BlogsHighlight />
      <NewsLetterSubs />
    </div>
  );
};

export default Home;

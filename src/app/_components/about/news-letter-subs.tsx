import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Text from "@/components/ui/text";
import React from "react";

const NewsLetterSubs = () => {
  return (
    <div className="relative mt-10">
      <Text className="mb-4 text-lg font-light text-black dark:text-white">
        Get all the latest tech gists
      </Text>

      <form
        action={async (e: FormData) => {
          "use server";
          const mail = e.get("email");
          console.log("MAIL", mail);
        }}
        className="flex place-items-center gap-2 align-middle"
      >
        <Input
          required
          type="email"
          name="email"
          placeholder="your@mail.com"
          className="w-full"
        />
        <Button className="h-12">Subscribe</Button>
      </form>

      <div className="absolute left-1/2 h-[0.8px] w-screen -translate-x-1/2 bg-gradient-to-l from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />
    </div>
  );
};

export default NewsLetterSubs;

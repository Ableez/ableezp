import Image from "next/image";
import Link from "next/link";
import React from "react";
import Text from "./ui/text";
import { type Works } from "@/app/_components/about/works";

const WorkCard = ({ work }: { work: Works }) => {
  return (
    <Link
      key={work.id}
      href={`work_${work.id.toString()}`}
      className="flex w-full cursor-pointer flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-4 transition-all duration-500 hover:animate-bounce hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-600"
    >
      <div className="flex h-10 w-10 place-items-center justify-center">
        <Image
          src={work.image}
          alt={work.name}
          width={32}
          height={32}
          className="dark:invert"
        />
      </div>
      <Text className="mb-4 text-black dark:text-white">{work.name}</Text>
      <Text className="text-sm text-neutral-500 dark:text-neutral-400">
        {work.description}
      </Text>
    </Link>
  );
};

export default WorkCard;

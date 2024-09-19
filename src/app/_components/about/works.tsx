import Text from "@/components/ui/text";
import WorkCard from "@/components/work-card";
import React from "react";

export type Works = {
  id: string;
  name: string;
  description: string;
  image: string;
};

const works: Works[] = [
  {
    id: "asterisk",
    name: "Asterisk",
    description:
      "An app that helps businesses quickly create online stores and design their own branding.",
    image: "https://cdn.worldvectorlogo.com/logos/louis-vuitton-1.svg",
  },
  {
    id: "scribe",
    name: "Ferri Properties",
    description:
      "Scribe is built to help students get the best out of their school life.",
    image: "https://cdn.worldvectorlogo.com/logos/the-north-face-1.svg",
  },
  {
    id: "greatex",
    name: "Great Exchange",
    description:
      "A platform that allows users to buy and sell giftcards and cryptocurrencies.",
    image: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
  },
  {
    id: "project_4",
    name: "Jetwel Health",
    description: "Changing medical care in Africa",
    image: "https://cdn.worldvectorlogo.com/logos/jordan-2.svg",
  },
  {
    id: "project_5",
    name: "Currynth Inc",
    description: "Fintech has never been this easy",
    image: "https://cdn.worldvectorlogo.com/logos/puma-ag.svg",
  },
];

type Props = {
  title?: string;
  data?: Works[];
};

const Works = ({ title, data }: Props) => {
  return (
    <div className="relative mt-10">
      <Text className="mb-4 text-lg font-light text-black dark:text-white">
        {title ?? "I&apos;ve worked with:"}
      </Text>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {(data ?? works).map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>

      <div className="absolute left-1/2 mt-8 h-[0.8px] w-screen -translate-x-1/2 bg-gradient-to-l from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />
    </div>
  );
};

export default Works;

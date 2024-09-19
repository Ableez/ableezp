import Text from "@/components/ui/text";
import { DotFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { FaAsterisk, FaTextWidth } from "react-icons/fa6";

const experiences = [
  {
    title: "Founder & Software Engineer",
    company: { name: "Asterisk", logo: <FaAsterisk />, website: "/" },
    location: "Lagos, NG",
    period: "PRESENT",
    link: "/",
  },
  {
    title: "Graphics Designer",
    company: { name: "Cura Wears", logo: <FaTextWidth />, website: "/" },
    location: "Lagos, NG",
    period: "PRESENT",
    link: "/",
  },
  {
    title: "Senior Developer",
    company: {
      name: "Tareud Corp",
      logo: <FaTextWidth className="rotate-180" />,
      website: "/",
    },
    location: "San Francisco, CA",
    period: "2018 - 2021",
    link: "/",
  },
];

const Experience = () => {
  return (
    <div className="mt-4">
      <Text className="mb-2 text-lg font-light text-black dark:text-white">
        Experience
      </Text>
      <div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="align-start relative ml-3 flex place-items-start justify-start gap-4 border-l py-5 pl-8 transition-all duration-300 ease-in first-of-type:pt-1 last-of-type:pb-1 dark:border-neutral-700"
          >
            <div
              className={`absolute my-3 ${exp.period !== "PRESENT" ? "-left-2 h-1 w-1 bg-neutral-300 p-1.5 dark:bg-neutral-800" : "-left-2 h-2 w-2 bg-neutral-400 p-2 dark:bg-neutral-600"} rounded-full p-2`}
            />
            <div>
              <div className="flex place-items-center gap-6">
                <Text className="text-sm text-black dark:text-white md:text-[15px]">
                  {exp.title}
                </Text>
                <div className="flex h-6 w-fit place-items-center rounded-sm border border-neutral-300 px-2 align-middle dark:border-neutral-700">
                  <Text className="scale-95 text-[12px]">{exp.period}</Text>
                </div>
              </div>
              <div className="flex place-items-center gap-2">
                <Link
                  href={exp.link}
                  className="flex place-items-center gap-1 text-neutral-600 transition-all duration-300 ease-in hover:!text-neutral-900 dark:text-neutral-400 dark:hover:!text-neutral-100"
                >
                  {exp.company.logo} <Text>{exp.company.name}</Text>
                </Link>
                <DotFilledIcon className="text-neutral-400 dark:text-neutral-600" />
                <Text>{exp.location}</Text>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-1/2 mt-8 h-[0.8px] w-screen -translate-x-1/2 bg-gradient-to-l from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />
    </div>
  );
};

export default Experience;

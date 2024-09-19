import React from "react";
import Image from "next/image";
import Text from "@/components/ui/text";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import ToggleTheme from "./theme-toggle";

const MySelf = () => {
  return (
    <div className="w-full">
      <div>
        <Image
          src="/myself_ahmed_abdullahi.webp"
          alt="myself"
          width={50}
          height={50}
          className="rounded-full border dark:border-neutral-700"
        />
        <Text variant="h3" className="mt-2">
          Ahmed Abdullahi
        </Text>
        <Text>Software Engineer & Designer</Text>
      </div>

      <div className="flex w-full place-items-center justify-between py-6 align-middle">
        <div className="flex gap-3">
          <Link
            href="/"
            className="p-1 transition-all duration-200 hover:scale-105"
          >
            <FaXTwitter className="h-6 w-6" />
          </Link>
          <Link
            href="/"
            className="p-1 transition-all duration-200 hover:scale-105"
          >
            <FaGithub className="h-6 w-6" />
          </Link>
          <Link
            href="/"
            className="p-1 transition-all duration-200 hover:scale-105"
          >
            <FaLinkedin className="h-6 w-6" />
          </Link>
          <Link
            href="/"
            className="p-1 transition-all duration-200 hover:scale-105"
          >
            <FaInstagram className="h-6 w-6" />
          </Link>
          <Link
            href="/"
            className="p-1 transition-all duration-200 hover:scale-105"
          >
            <FaYoutube className="h-6 w-6" />
          </Link>
        </div>
        <div className="sticky top-1 z-50">
          <ToggleTheme />
        </div>
      </div>

      <div className="absolute left-1/2 h-[0.8px] w-screen -translate-x-1/2 bg-gradient-to-l from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />
    </div>
  );
};

export default MySelf;

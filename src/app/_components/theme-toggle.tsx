"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        size={"icon"}
        variant={"outline"}
        className="flex aspect-square place-items-center justify-center transition-all duration-300 hover:scale-110"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <div className="relative h-4 w-4">
          <SunIcon className="transition-transformll absolute h-4 w-4 duration-500 ease-out dark:-rotate-[400deg] dark:scale-0 dark:opacity-0" />
          <MoonIcon className="absolute h-4 w-4 -rotate-[400deg] scale-0 opacity-0 transition-transform duration-500 ease-out dark:rotate-0 dark:scale-100 dark:opacity-100" />
        </div>
      </Button>
    </div>
  );
};

export default ToggleTheme;

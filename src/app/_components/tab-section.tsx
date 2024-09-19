"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const TabSection = ({ children }: Props) => {
  const [url, setUrl] = useState("");
  const [active, setActive] = useState("about_tab");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  useEffect(() => {
    if (url.split("/").pop() === "" || !url.split("/").pop()) {
      setActive("about_tab");
    }
    if (url.split("/b").pop() === "blog") {
      setActive("blog_tab");
    }
    if (url.split("/").pop() === "projects") {
      setActive("projects_tab");
    }
    if (url.split("/").pop() === "contact") {
      setActive("contact_tab");
    }
  }, [url]);

  return (
    <div className="mt-2 w-full max-w-screen-md">
      <Tabs value={active} defaultValue={active}>
        <TabsList className="h-12 sticky -top-0.5 m-0 w-full justify-start rounded-none bg-white p-2 dark:bg-black z-50">
          <TabsTrigger
            onClick={() => setActive("about_tab")}
            asChild
            value="about_tab"
          >
            <Link href={"/"}>About</Link>
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setActive("blog_tab")}
            asChild
            value="blog_tab"
          >
            <Link href={"/blog"}>Blog</Link>
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setActive("projects_tab")}
            asChild
            value="projects_tab"
          >
            <Link href={"/projects"}>Projects</Link>
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setActive("contact_tab")}
            asChild
            value="contact_tab"
          >
            <Link href={"/contact"}>Contact</Link>
          </TabsTrigger>
        </TabsList>
        <TabsContent className="animate-tab-enter" value="about_tab">
          {children}
        </TabsContent>
        <TabsContent className="animate-tab-enter" value="blog_tab">
          {children}
        </TabsContent>
        <TabsContent className="animate-tab-enter" value="projects_tab">
          {children}
        </TabsContent>
        <TabsContent className="animate-tab-enter" value="contact_tab">
          {children}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabSection;

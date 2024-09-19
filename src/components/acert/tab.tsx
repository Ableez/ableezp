"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | undefined;
  link?: string;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(
    propTabs[0] ?? { title: "", value: "" },
  );
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  useEffect(() => {
    if (url.split("/").pop() === "" || !url.split("/").pop()) {
      setActive((p) => ({ ...p, value: "about_tab", title: "About" }));
    }
    if (url.split("/b").pop() === "blog") {
      setActive((p) => ({ ...p, value: "blog_tab", title: "Blog" }));
    }
    if (url.split("/").pop() === "projects") {
      setActive((p) => ({ ...p, value: "projects_tab", title: "Projects" }));
    }
    if (url.split("/").pop() === "contact") {
      setActive((p) => ({ ...p, value: "contact_tab", title: "Contact" }));
    }
  }, [url]);

  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1)[0];
    if (selectedTab) {
      newTabs.unshift(selectedTab);
      setTabs(newTabs);
      setActive(selectedTab);
    }
  };

  const router = useRouter();

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "no-visible-scrollbar relative mt-4 flex w-full items-center justify-start overflow-auto [perspective:1000px] sm:overflow-visible",
          containerClassName,
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);

              if (tab.link) {
                router.push(tab.link);
              }
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative divide-neutral-500 rounded-full border border-transparent px-4 py-2 transition-all duration-500 hover:border-neutral-300/60 hover:dark:border-neutral-700/40 hover:dark:bg-gray-800/40",
              tabClassName,
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 rounded-full bg-gray-200 dark:bg-zinc-800",
                  activeTabClassName,
                )}
              />
            )}

            <span className="relative block text-sm text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-4", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0]?.value;
  };
  return (
    <div className="relative h-full w-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.05,
            top: hovering ? idx * -10 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.04 : 0,
          }}
          animate={{
            y: isActive(tab) ? [5, 10, 5] : 0,
          }}
          className={cn("absolute left-0 top-0 h-full w-full", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

import { HydrateClient } from "@/trpc/server";
import React from "react";
import MySelf from "../app/_components/myself";
import TabSection from "../app/_components/tab-section";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <HydrateClient>
      <main className="w-full max-w-screen-md py-8">
        <MySelf />
        <TabSection>{children}</TabSection>
      </main>
    </HydrateClient>
  );
};

export default MainLayout;

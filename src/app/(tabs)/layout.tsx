import { HydrateClient } from "@/trpc/server";
import React from "react";
import MySelf from "../_components/myself";
import TabSection from "../_components/tab-section";
import Image from "next/image";
import Text from "@/components/ui/text";

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
      <footer className="mt-6">
        <div className="flex flex-col place-items-center justify-center gap-4 p-8">
          <Image
            src={"/ableez_flat.svg"}
            alt="Ableez logo"
            width={42}
            height={42}
            className="invert dark:invert-0"
          />
          <Text className="font-bold dark:text-neutral-300">
            © {new Date().getFullYear().toString()} - Ableez
          </Text>
        </div>
      </footer>
    </HydrateClient>
  );
};

export default MainLayout;

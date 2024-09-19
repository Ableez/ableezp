import "@/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import AnimBg from "@/components/anim_bg";

export const serif = localFont({
  src: "./847e69aa28f3ebfa-s.p.ttf",
  weight: "400",
  variable: "--font-serif",
});

export const pixel = localFont({
  src: "./e69e9083cfa88953-s.p.woff",
  weight: "400",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Ahmed Abdullahi",
  description: "Ahmed Abdullahi's personal website",
  icons: [{ rel: "icon", url: "/ableez_favicon.webp" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${pixel.className} ${serif.className}`}>
      <body
        className={`flex flex-col items-center justify-center bg-violet-50 p-4 dark:bg-black md:p-2`}
      >
        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          defaultTheme="dark"
        >
          <TRPCReactProvider>
            <AnimBg />
            {children}
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

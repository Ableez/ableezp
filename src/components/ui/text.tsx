import { serif } from "@/app/layout";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "bold" | "quote" | "code" | "lead";
  className?: string;
};

const Text = ({ children, variant, className }: Props) => {
  if (variant === "h1") {
    return (
      <h1
        className={cn(
          `scroll-m-20 ${serif.className} text-4xl font-extrabold tracking-tight lg:text-5xl`,
          className,
        )}
      >
        {children}
      </h1>
    );
  }

  if (variant === "h2") {
    return (
      <h2
        className={cn(
          `scroll-m-20 ${serif.className} pb-2 text-3xl first:mt-0`,
          className,
        )}
      >
        {children}
      </h2>
    );
  }

  if (variant === "h3") {
    return (
      <h3
        className={cn(
          `scroll-m-20 ${serif.className} text-2xl font-semibold tracking-tight`,
          className,
        )}
      >
        {children}
      </h3>
    );
  }

  if (variant === "h4") {
    return (
      <h4
        className={cn(
          `scroll-m-20 ${serif.className} text-xl font-semibold tracking-tight`,
          className,
        )}
      >
        {children}
      </h4>
    );
  }

  if (variant === "bold") {
    return <h5 className={cn(`text-sm font-bold`, className)}>{children}</h5>;
  }

  if (variant === "quote") {
    return (
      <blockquote className={cn(`mt-6 border-l-2 pl-6 italic`, className)}>
        {children}
      </blockquote>
    );
  }

  if (variant === "code") {
    return (
      <code
        className={cn(
          `bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`,
          className,
        )}
      >
        {children}
      </code>
    );
  }

  if (variant === "lead") {
    return (
      <p
        className={cn(
          `text-muted-foreground font-[Pixelify Sans] text-xl`,
          className,
        )}
      >
        {children}
      </p>
    );
  }

  return (
    <p
      className={cn(
        `text-[14px] text-neutral-600 dark:text-neutral-400`,
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Text;

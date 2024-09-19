"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const AnimBg = () => {
  const { theme, resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    setCurrentTheme(resolvedTheme);
  }, [theme, resolvedTheme]);

  if (!currentTheme) return null;

  return (
    <div
      style={{
        backgroundImage: `url(${currentTheme === "dark" ? "/anim_dark.svg" : "/anim_light.svg"})`,
        backgroundSize: "80%",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "40px",
      }}
      className="fixed left-1/2 top-1/2 -z-50 h-screen w-screen -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default AnimBg;

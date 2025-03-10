"use client";

import React, { useEffect, useState } from "react";

// ** Hooks
import { useTheme } from "next-themes";

// ** UI Components
import { Button } from "@/components/ui/button";

// ** Icons
import { Moon, Sun } from "lucide-react";

// ** Utilities
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Cycle through themes: light → dark → light
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (!mounted) {
    return null; // Avoid rendering until mounted
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={cn("cursor-pointer relative")}
    >
      <Sun
        className={cn("h-[1.2rem] w-[1.2rem]", {
          hidden: theme !== "light",
        })}
      />
      <Moon
        className={cn("absolute h-[1.2rem] w-[1.2rem]", {
          hidden: theme !== "dark",
        })}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
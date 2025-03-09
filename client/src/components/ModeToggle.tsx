"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Cycle through themes: light → dark → light
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        "cursor-pointer relative",
        "focus:ring-2 focus:ring-ring focus:ring-offset-2"
      )}
    >
      <Sun
        className={cn(
          "h-[1.2rem] w-[1.2rem] transition-all",
          theme === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        )}
      />
      <Moon
        className={cn(
          "absolute h-[1.2rem] w-[1.2rem] transition-all",
          theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

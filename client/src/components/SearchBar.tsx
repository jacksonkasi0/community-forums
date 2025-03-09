"use client";

import React from "react";

// ** Icons
import { Search } from "lucide-react";

// ** UI Components
import { Input } from "@/components/ui/input";

// ** Utilities
import { cn } from "@/lib/utils";

// ** Query State Management
import { useQueryState } from "nuqs";
import { parseAsString, createSearchParamsCache } from "nuqs/server";

interface SearchBarProps {
  className?: string;
}

// Server-side search params definition
export const searchParams = {
  q: parseAsString.withDefault(""),
};

export const searchParamsCache = createSearchParamsCache(searchParams);

const SearchBar: React.FC<SearchBarProps> = ({ className = "" }) => {
  // Client-side search state synced with URL using nuqs
  const [searchQuery, setSearchQuery] = useQueryState("q", {
    defaultValue: "",
    shallow: false, // Notify server on updates
  });

  return (
    <section className={cn("relative w-full", className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        value={searchQuery || ""}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className={cn(
          "w-full pl-10 pr-4 bg-background text-foreground border border-input",
          "py-2 sm:py-3 rounded-md focus:ring-2 focus:ring-ring focus:border-primary",
          "text-sm sm:text-base"
        )}
      />
    </section>
  );
};

export default SearchBar;

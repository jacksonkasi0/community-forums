"use client";

import React from "react";
import Link from "next/link";

// ** Utils
import { cn } from "@/lib/utils";

// ** UI Components
import { Badge } from "@/components/ui/badge";


interface TagProps {
  name: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ name, className }) => {
  const tagName = name.startsWith("#") ? name.slice(1) : name;
  
  return (
    <Badge
      variant="outline"
      className={cn("cursor-pointer px-3 py-1 text-xs font-medium", className)}
      asChild
    >
      <Link href={`/tags/${tagName}`}>#{tagName}</Link>
    </Badge>
  );
};

const SidebarTags: React.FC = () => {
  const tags = [
    { name: "webdev" },
    { name: "programming" },
    { name: "javascript" },
    { name: "beginners" },
    { name: "ai" },
    { name: "tutorial" },
    { name: "react" },
    { name: "devops" },
    { name: "python" },
    { name: "opensource" },
    { name: "productivity" },
    { name: "career" },
    { name: "aws" },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-semibold text-sidebar-foreground">
        Popular Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Tag key={index} name={tag.name} />
        ))}
      </div>
    </div>
  );
};

export default SidebarTags;

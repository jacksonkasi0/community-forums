import Link from "next/link";
import { Card } from "@/components/ui/card";

interface DiscussionThread {
  title: string;
  href: string;
  isNew?: boolean;
  commentsCount?: number;
}

const discussionThreads: DiscussionThread[] = [
  {
    title: "Stop Copy-Pasting Your Code to LLMs — I Built a Tool That Does It Automatically",
    href: "/discuss/llm-tool",
    isNew: true,
  },
  {
    title: "What is SEO? A Complete Guide to Search Engine Optimization",
    href: "/discuss/seo-guide",
    isNew: true,
  },
  {
    title: "Whatever you do, do it well.",
    href: "/discuss/do-it-well",
    isNew: true,
  },
  {
    title: "Is Software Development Dying? Or Will Devs Always Be Needed?",
    href: "/discuss/software-development-future",
    isNew: true,
  },
  {
    title: "Advanced Text Matching and Fuzzy Comparison for Data Professionals",
    href: "/discuss/text-matching",
    isNew: true,
  },
  {
    title: "Why did Tailwind + Claude win?",
    href: "/discuss/tailwind-claude",
    commentsCount: 2,
  },
];

export function DiscussionThreads() {
  return (
    <div className="space-y-6">
      <Card className="p-4 bg-card">
        <h2 className="text-xl font-bold mb-2">#discuss</h2>
        <p className="text-muted-foreground text-sm mb-4">
          Discussion threads targeting the whole community
        </p>
        <div className="space-y-4">
          {discussionThreads.map((thread, index) => (
            <Link 
              href={thread.href} 
              key={index}
              className="block hover:bg-accent rounded-lg p-2 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium line-clamp-2">{thread.title}</h3>
                <div className="flex items-center gap-2 shrink-0">
                  {thread.isNew && (
                    <span className="bg-yellow-500 text-yellow-900 text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {thread.commentsCount && (
                    <span className="text-sm text-muted-foreground">
                      {thread.commentsCount} comments
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Card>

      <Card className="p-4 bg-card">
        <h2 className="text-xl font-bold mb-2">#watercooler</h2>
        <p className="text-muted-foreground text-sm">
          Light, and off-topic conversation.
        </p>
      </Card>
    </div>
  );
} 
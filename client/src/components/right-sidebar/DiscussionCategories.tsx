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
    isNew: true
  },
  {
    title: "What is SEO? A Complete Guide to Search Engine Optimization",
    href: "/discuss/seo-guide",
    isNew: true
  },
  {
    title: "Whatever you do, do it well.",
    href: "/discuss/do-it-well",
    isNew: true
  },
  {
    title: "Is Software Development Dying? Or Will Devs Always Be Needed?",
    href: "/discuss/software-development-future",
    isNew: true
  },
  {
    title: "Advanced Text Matching and Fuzzy Comparison for Data Professionals",
    href: "/discuss/text-matching",
    isNew: true
  },
  {
    title: "Why did Tailwind + Claude win?",
    href: "/discuss/tailwind-claude",
    commentsCount: 2
  }
];

export function DiscussionCategories() {
  return (
    <div className="space-y-6">
      <Card className="p-4 bg-sidebar">
        <h2 className="text-xl font-bold mb-2 text-sidebar-foreground">#discuss</h2>
        <p className="text-[15px] text-sidebar-muted mb-4">
          Discussion threads targeting the whole community
        </p>
        <div className="space-y-0 divide-y divide-sidebar-border">
          {discussionThreads.map((thread, index) => (
            <Link 
              href={thread.href}
              key={index}
              className="block py-3 group"
            >
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[15px] leading-tight font-normal text-sidebar-foreground group-hover:text-primary transition-colors">
                    {thread.title}
                  </h3>
                  {thread.isNew && (
                    <span className="shrink-0 bg-[#ffd900] text-black text-[13px] px-2 py-0.5 rounded-full font-medium">
                      New
                    </span>
                  )}
                </div>
                {thread.commentsCount && (
                  <p className="text-[13px] text-sidebar-muted">
                    {thread.commentsCount} comment{thread.commentsCount !== 1 ? 's' : ''}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </Card>

      <Card className="p-4 bg-sidebar">
        <h2 className="text-xl font-bold mb-2 text-sidebar-foreground">#watercooler</h2>
        <p className="text-[15px] text-sidebar-muted">
          Light, and off-topic conversation.
        </p>
      </Card>
    </div>
  );
} 
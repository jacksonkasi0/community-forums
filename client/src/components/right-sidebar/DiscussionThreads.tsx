// ** React & Next
import { type ReactNode } from 'react';
import Link from "next/link";

// ** Components
import { Card } from "@/components/ui/card";

interface DiscussionThread {
  title: string;
  href: string;
  commentsCount: number;
  isNew?: boolean;
  emoji?: string;
}

const discussionThreads: DiscussionThread[] = [
  {
    title: "Why Stop Using TypeScript for Small Projects?",
    href: "/discuss/typescript",
    commentsCount: 10
  },
  {
    title: "Gemma 3 27B vs. QwQ 32B vs. Deepseed R1 comparison ✅",
    href: "/discuss/llm-comparison",
    commentsCount: 14,
    emoji: "🔥"
  },
  {
    title: "JavaScript Basics for a Senior Dev",
    href: "/discuss/js-basics",
    commentsCount: 9
  },
  {
    title: "EchoDay: Capture and reflect on your day",
    href: "/discuss/echo-day",
    commentsCount: 4
  },
  {
    title: "Want to see how AI really works in enterprise automation?",
    href: "/discuss/ai-enterprise",
    commentsCount: 1,
    emoji: "🏢 💡"
  },
  {
    title: "Stop Chasing New JavaScript Frameworks: Build with Fundamentals Instead 🏗️",
    href: "/discuss/js-fundamentals",
    commentsCount: 36
  },
  {
    title: "Unlocking Meteor 3.2: New Profiling Tool to Track Bundler Performance and Size",
    href: "/discuss/meteor",
    commentsCount: 1
  },
  {
    title: "An Inventory Management app",
    href: "/discuss/inventory",
    commentsCount: 3
  }
];

export function DiscussionThreads(): ReactNode {
  return (
    <Card className="p-4 bg-sidebar/10 dark:bg-sidebar">
      <h2 className="text-xl font-bold mb-2 text-sidebar-foreground">Active discussions</h2>
      <div className="space-y-0 divide-y divide-sidebar-border">
        {discussionThreads.map((thread, index) => (
          <Link
            key={index}
            href={thread.href}
            className="block py-3 group"
          >
            <div className="space-y-1">
              <div className="flex items-start gap-1.5">
                {thread.emoji && (
                  <span className="text-base shrink-0 leading-tight">{thread.emoji}</span>
                )}
                <h3 className="text-sm leading-tight font-normal text-sidebar-foreground group-hover:text-primary transition-colors">
                  {thread.title}
                </h3>
              </div>
              <p className="text-xs text-sidebar-muted">
                {thread.commentsCount} comment{thread.commentsCount !== 1 ? 's' : ''}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Flame, CheckCircle, Building2, Lightbulb } from "lucide-react";

interface DiscussionItem {
  title: string;
  commentsCount: number;
  icon?: JSX.Element;
}

const discussions: DiscussionItem[] = [
  {
    title: "Why Stop Using TypeScript for Small Projects?",
    commentsCount: 10,
  },
  {
    title: "Gemma 3 27B vs. QwQ 32B vs. Deepseek R1 comparison",
    commentsCount: 14,
    icon: <CheckCircle className="h-4 w-4 text-green-500" />
  },
  {
    title: "JavaScript Basics for a Senior Dev",
    commentsCount: 9,
  },
  {
    title: "EchoDay: Capture and reflect on your day",
    commentsCount: 4,
  },
  {
    title: "Want to see how AI really works in enterprise automation?",
    commentsCount: 1,
    icon: (
      <div className="flex gap-1">
        <Building2 className="h-4 w-4 text-blue-500" />
        <Lightbulb className="h-4 w-4 text-yellow-500" />
      </div>
    ),
  },
];

export function ActiveDiscussions() {
  return (
    <Card className="p-4 bg-card">
      <h2 className="text-xl font-bold mb-4">Active discussions</h2>
      <div className="space-y-4">
        {discussions.map((discussion, index) => (
          <Link 
            href="#" 
            key={index}
            className="block hover:bg-accent rounded-lg p-2 transition-colors"
          >
            <div className="flex items-start gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {discussion.icon}
                  <h3 className="font-medium line-clamp-2">{discussion.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {discussion.commentsCount} comments
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
} 
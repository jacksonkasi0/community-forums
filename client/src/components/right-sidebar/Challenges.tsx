// ** React & Next
import { type ReactNode } from 'react';
import Image from "next/image";
import Link from "next/link";

// ** Components
import { Card } from "@/components/ui/card";

interface Challenge {
  title: string;
  description: string;
  image: string;
  period: string;
  href: string;
  isNew?: boolean;
  emoji?: string;
}

const challenges: Challenge[] = [
  {
    title: "KendoReact Free Components Challenge",
    description: "Build a React app with at least 10 KendoReact Free components!",
    image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gv3wfqvt7o5f8yt4xexr.png",
    period: "MARCH 12 - 23",
    href: "/challenges/kendoreact",
    isNew: true,
    emoji: "🚀"
  },
  {
    title: "WeCoded Challenge",
    description: "Build a landing page or share your story!",
    image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/whxcx5o3zjljax235mv8.png",
    period: "MARCH 5 - APRIL 6",
    href: "/challenges/wecoded",
    emoji: "💜"
  },
  {
    title: "Future Writing Challenge",
    description: "Write a letter to your friends and family!",
    image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/whxcx5o3zjljax235mv8.png",
    period: "FEB 26 - MAR 30",
    href: "/challenges/future-writing",
  },
];

export function Challenges(): ReactNode {
  return (
    <Card className="p-4 bg-sidebar/10 dark:bg-sidebar">
      <div className="flex items-center gap-2">
        <h2 className="text-sm font-bold text-sidebar-foreground">What's happening this week</h2>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm mb-3 flex items-center gap-2 text-sidebar-foreground">
            Challenges <span className="text-base">🎮</span>
          </h3>

          <div className="space-y-1 divide-y divide-sidebar-border">
            {challenges.map((challenge, index) => (
              <div key={index} className="space-y-2 pt-4 first:pt-0">
                {index === 0 && (
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-base">🚀</span>
                    <span className="text-xs font-medium text-sidebar-foreground">Just Launched</span>
                  </div>
                )}
                <Link 
                  href={challenge.href}
                  className="group block"
                >
                  <div className="space-y-2">
                    <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden bg-sidebar-muted">
                      <Image
                        src={challenge.image}
                        alt={challenge.title}
                        fill
                        className="object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <div>
                      <div className="flex items-start gap-1.5">
                        <h4 className="text-sm leading-tight font-normal text-sidebar-foreground group-hover:text-primary transition-colors">
                          {challenge.title}
                        </h4>
                        {challenge.emoji && (
                          <span className="text-base shrink-0 leading-tight">{challenge.emoji}</span>
                        )}
                      </div>
                      <p className="text-xs text-sidebar-muted mt-1">
                        {challenge.description}
                      </p>
                      <p className="text-xs text-sidebar-muted my-2 font-medium">
                        {challenge.period}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm flex items-center gap-2 text-sidebar-foreground">
            Have a great week <span className="text-base">❤️</span>
          </p>
        </div>
      </div>
    </Card>
  );
}
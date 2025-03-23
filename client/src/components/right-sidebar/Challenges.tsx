import Image from "next/image";
import Link from "next/link";
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
    image: "https://media2.dev.to/dynamic/image/width=880%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fi7uzu7m51rl9yhs2yryr.png",
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

export function Challenges() {
  return (
    <Card className="p-4 bg-card">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">👋</span>
        <h2 className="text-xl font-bold">What's happening this week</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl mb-4 flex items-center gap-2">
            Challenges <span className="text-2xl">🎮</span>
          </h3>

          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="space-y-2">
                {index === 0 && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">🚀</span>
                    <span className="font-semibold">Just Launched</span>
                  </div>
                )}
                <Link 
                  href={challenge.href}
                  className="group block"
                >
                  <div className="space-y-3">
                    <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden bg-black/5">
                      <Image
                        src={challenge.image}
                        alt={challenge.title}
                        fill
                        className="object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <div>
                      <div className="flex items-start gap-2">
                        <h4 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                          {challenge.title}
                        </h4>
                        {challenge.emoji && (
                          <span className="text-xl shrink-0">{challenge.emoji}</span>
                        )}
                      </div>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {challenge.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 font-medium">
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
          <p className="text-xl flex items-center gap-2">
            Have a great week <span className="text-xl">❤️</span>
          </p>
        </div>
      </div>
    </Card>
  );
} 
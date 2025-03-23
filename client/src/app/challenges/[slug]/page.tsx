// ** React/Next.js
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ** UI Components
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// ** Types & Data
import { type Challenge } from "@/app/challenges/data";
import { challenges } from "@/app/challenges/data";

// ** Types
interface PageProps {
  params: {
    slug: string;
  };
}

// ** Server Functions
async function getChallenge(slug: string): Promise<Challenge | null> {
  try {
    const loadChallenge = challenges[slug as keyof typeof challenges];
    if (!loadChallenge) return null;
    return await loadChallenge();
  } catch (error) {
    console.error('Error loading challenge:', error);
    return null;
  }
}

// ** Component
export default async function ChallengePage({ params }: PageProps) {
  const challenge = await getChallenge(params.slug);
  
  if (!challenge) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
      {/* Challenge Header */}
      <div className={`relative w-full aspect-[3/1] rounded-lg overflow-hidden mb-8 bg-gradient-to-br ${challenge.header.backgroundGradient}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <Badge variant="outline" className="mb-4 text-xs uppercase tracking-wider">
            {challenge.header.badge}
          </Badge>
          <h1 className="text-4xl font-bold mb-2">{challenge.header.title}</h1>
          <Badge variant="secondary" className="text-xs">
            {challenge.header.period}
          </Badge>
        </div>
      </div>

      {/* Challenge Content */}
      <div className="space-y-8">
        {/* Main Content */}
        <Card className="p-6 bg-card">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">{challenge.header.badge}</h2>
            <p className="text-muted-foreground mb-4">
              {challenge.description}
            </p>

            {/* Rules Sections */}
            {challenge.ruleSections.map((section, index) => (
              <div key={section.title}>
                <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {index < challenge.ruleSections.length - 1 && <Separator className="my-6" />}
              </div>
            ))}

            <Separator className="my-6" />

            {/* Badges Section */}
            <h3 className="text-xl font-semibold mb-3">Badges & Prizes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-4">
              {challenge.badges.map((badge) => (
                <div key={badge.title} className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
                  <Image
                    src={badge.image}
                    alt={badge.alt}
                    width={80}
                    height={80}
                    className="mb-2"
                  />
                  <span className="text-sm font-medium">{badge.title}</span>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            {/* FAQ Section */}
            <h3 className="text-xl font-semibold mb-3">FAQ</h3>
            <div className="space-y-4">
              {challenge.faq.map((item) => (
                <div key={item.question}>
                  <h4 className="font-medium mb-2">{item.question}</h4>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {challenge.actions.map((button) => (
            <Link
              key={button.label}
              href={button.href}
              className={`flex-1 inline-flex justify-center items-center px-6 py-3 rounded-lg transition-colors
                ${button.variant === 'primary' 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                }`}
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 
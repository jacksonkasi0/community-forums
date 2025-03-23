
// ** React/Next.js
import Image from "next/image";
import Link from "next/link";

// ** UI Components
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// ** Types
interface BadgeConfig {
  title: string;
  image: string;
  alt: string;
}

interface RuleSection {
  title: string;
  items: string[];
}

interface FaqItem {
  question: string;
  answer: string;
}

// ** Constants
const CHALLENGE_BADGES: BadgeConfig[] = [
  {
    title: "Participant",
    image: "https://media2.dev.to/dynamic/image/width=300/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rq0ncf4rlt3069vz8el0.png",
    alt: "Participant Badge"
  },
  {
    title: "Winner",
    image: "https://media2.dev.to/dynamic/image/width=300/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u77labrob12u9gdmzceb.png",
    alt: "Winner Badge"
  }
];

const RULE_SECTIONS: RuleSection[] = [
  {
    title: "Rules of Engagement",
    items: [
      "Build a landing page that showcases your coding journey",
      "Share your story about how you started coding",
      "Include your favorite coding moments of 2023",
      "Add links to your projects and social media"
    ]
  },
  {
    title: "Criteria to Win",
    items: [
      "Creativity in design and storytelling",
      "Code quality and best practices",
      "Responsiveness and accessibility",
      "Community engagement and inspiration"
    ]
  }
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "When does the challenge start?",
    answer: "The challenge runs from March 5th to April 6th, 2023."
  },
  {
    question: "How do I submit my entry?",
    answer: "Create a new post with the #wecoded hashtag and include your project details."
  },
  {
    question: "Can I use any tech stack?",
    answer: "Yes! Use whatever technologies you're comfortable with."
  }
];

const ACTION_BUTTONS = [
  {
    href: "/",
    label: "Submit Your Entry",
    variant: "primary"
  },
  {
    href: "/",
    label: "View All Entries",
    variant: "secondary"
  }
] as const;

// ** Component
export default function WeCodedChallengePage() {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
      {/* Challenge Header */}
      <div className="relative w-full aspect-[3/1] rounded-lg overflow-hidden mb-8 bg-gradient-to-br from-purple-400/30 via-blue-400/30 to-green-400/30">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <Badge variant="outline" className="mb-4 text-xs uppercase tracking-wider">
            2023 CELEBRATION
          </Badge>
          <h1 className="text-4xl font-bold mb-2">we coded</h1>
          <Badge variant="secondary" className="text-xs">
            MARCH 5 - APRIL 6
          </Badge>
        </div>
      </div>

      {/* Challenge Content */}
      <div className="space-y-8">
        {/* Main Content */}
        <Card className="p-6 bg-card">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">2023 WeCoded Challenge</h2>
            <p className="text-muted-foreground mb-4">
              You can build a landing page or share your story! Let's celebrate our coding journey together.
            </p>

            {/* Rules Sections */}
            {RULE_SECTIONS.map((section, index) => (
              <div key={section.title}>
                <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {index < RULE_SECTIONS.length - 1 && <Separator className="my-6" />}
              </div>
            ))}

            <Separator className="my-6" />

            {/* Badges Section */}
            <h3 className="text-xl font-semibold mb-3">Badges & Prizes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-4">
              {CHALLENGE_BADGES.map((badge) => (
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
              {FAQ_ITEMS.map((item) => (
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
          {ACTION_BUTTONS.map((button) => (
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
// ** Types
export interface ChallengeHeader {
  badge: string;
  title: string;
  period: string;
  backgroundGradient: string;
}

export interface ChallengeBadge {
  title: string;
  image: string;
  alt: string;
}

export interface RuleSection {
  title: string;
  items: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ActionButton {
  href: string;
  label: string;
  variant: 'primary' | 'secondary';
}

export interface Challenge {
  slug: string;
  header: ChallengeHeader;
  description: string;
  badges: ChallengeBadge[];
  ruleSections: RuleSection[];
  faq: FaqItem[];
  actions: ActionButton[];
}

// ** Challenge Data
export const wecodedChallenge: Challenge = {
  slug: 'wecoded',
  header: {
    badge: "2023 CELEBRATION",
    title: "we coded",
    period: "MARCH 5 - APRIL 6",
    backgroundGradient: "from-purple-400/30 via-blue-400/30 to-green-400/30"
  },
  description: "You can build a landing page or share your story! Let's celebrate our coding journey together.",
  badges: [
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
  ],
  ruleSections: [
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
  ],
  faq: [
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
  ],
  actions: [
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
  ]
};
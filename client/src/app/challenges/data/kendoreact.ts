// ** Types
import type { Challenge } from './wecoded';

// ** Challenge Data
export const kendoReactChallenge: Challenge = {
  slug: 'kendoreact',
  header: {
    badge: "KENDO REACT",
    title: "Free Components Challenge",
    period: "MARCH 12 - MARCH 23",
    backgroundGradient: "from-blue-500/30 via-indigo-500/30 to-purple-500/30"
  },
  description: "The only React component library you need! Running through March 23, the KendoReact Free Components Challenge is all about showcasing what you can build with KendoReact's powerful free components.",
  badges: [
    {
      title: "Completion Badge",
      image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rq0ncf4rlt3069vz8el0.png",
      alt: "Challenge Completion Badge"
    },
    {
      title: "Winner Badge",
      image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u77labrob12u9gdmzceb.png",
      alt: "Challenge Winner Badge"
    }
  ],
  ruleSections: [
    {
      title: "Challenge Prompt",
      items: [
        "Build a React app of your choice that utilizes at least 10 KendoReact Free components",
        "You are free to build any type of application that showcases these components",
        "Whether it's a dashboard, a productivity app, a personal portfolio, or something completely unique",
        "From data grids to toolbars to form components and more, KendoReact offers a comprehensive suite of UI components"
      ]
    },
    {
      title: "Judging Criteria",
      items: [
        "Use of underlying technology",
        "Usability and User Experience",
        "Accessibility",
        "Creativity"
      ]
    },
    {
      title: "Prize Categories",
      items: [
        "Prompt Winner: $3,000 USD + 6-month DEV++ Subscription + Exclusive Badge + DEV Shop Gift",
        "AIm to Impress: $1,000 USD + 6-month DEV++ + Badge + Shop Gift (for GenAI integration)",
        "Delightfully Designed: $1,000 USD + 6-month DEV++ + Badge + Shop Gift (for UI excellence)",
        "All valid submissions receive a completion badge"
      ]
    },
    {
      title: "Key Dates",
      items: [
        "Contest start: March 12, 2025",
        "Submissions due: March 23, 2025",
        "Winners announced: April 03, 2025"
      ]
    }
  ],
  faq: [
    {
      question: "Can I work on a team?",
      answer: "Yes, you can work on teams of up to four people. Please list their DEV handles in your submission post for badge awards. Only publish one submission per team."
    },
    {
      question: "Can I submit multiple entries?",
      answer: "Yes, you can submit multiple submissions per prompt but you'll need to publish a separate post for each submission."
    },
    {
      question: "Can I use AI?",
      answer: "Use of AI is allowed as long as all other rules are followed. We want to give you a chance to show off your skills in realistic scenarios."
    },
    {
      question: "How will I know if I won?",
      answer: "Winners will be announced in a DEV post on April 03, 2025. The DEV Team will contact winners via email within 10 business days."
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
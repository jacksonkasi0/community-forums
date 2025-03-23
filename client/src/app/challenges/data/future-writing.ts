// ** Types
import type { Challenge } from './wecoded';

// ** Challenge Data
export const futureWritingChallenge: Challenge = {
  slug: 'future-writing',
  header: {
    badge: "FUTURE WRITING",
    title: "Writing Challenge",
    period: "FEBRUARY 26 - MARCH 30",
    backgroundGradient: "from-emerald-500/30 via-teal-500/30 to-cyan-500/30"
  },
  description: "Running through March 30, the Future Writing Challenge provides an opportunity to share your knowledge, perspective, and rumination about the future with your friends, family, and community.",
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
        "Write a letter to friends and family on what to expect with how technology is changing things",
        "You are welcome to be as broad or specific as you wish as long as your topic is within the scope of what technology touches",
        "We encourage you not to focus on software development specifically, but instead leverage your technical expertise to focus on areas that will impact the friends and family you are writing to"
      ]
    },
    {
      title: "Judging Criteria",
      items: [
        "Style and Presentation",
        "Clarity",
        "Originality"
      ]
    },
    {
      title: "Prize Categories",
      items: [
        "Explain Like I'm Five: Awarded to a submission that conveys their message in simple, fun language that even a five-year-old could understand",
        "Ripple Effects: Awarded to a submission that thoughtfully explores how technology is reshaping social norms, relationships, and cultural institutions",
        "All winners receive an exclusive Future badge, bragging rights, and a gift to the Forem shop"
      ]
    },
    {
      title: "Key Dates",
      items: [
        "Contest start: February 26, 2025",
        "Submissions due: March 30, 2025",
        "Winners announced: April 10, 2025"
      ]
    }
  ],
  faq: [
    {
      question: "Can I work on a team?",
      answer: "No, you cannot work on teams for this challenge."
    },
    {
      question: "Can I submit multiple entries?",
      answer: "Yes, you can submit multiple submissions per prompt but you'll need to publish a separate post for each submission."
    },
    {
      question: "Do submissions have to be in English?",
      answer: "Non-english submissions are eligible for a completion badge but not eligible for prizes due to the current limitations of our judges."
    },
    {
      question: "Can I use AI?",
      answer: "Use of AI is allowed as long as all other rules are followed. We want to give you a chance to show off your skills in realistic scenarios."
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
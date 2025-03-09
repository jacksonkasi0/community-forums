import { type Metadata } from "next";

// ** Clerk Authentication
import { ClerkProvider } from "@clerk/nextjs";

// ** Fonts
import { Geist, Geist_Mono } from "next/font/google";

// ** Global Styles
import "@/styles/globals.css";

// ** Components
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forem Creators and Builders 🌱",
  description: "A place where we build Forem together",
  keywords:
    "community forums, discussions, Next.js, Tailwind CSS, Clerk, Hono.js, Cloudflare Workers, developer community, full-stack",
  authors: [{ name: "jacksonkasi" }],
  openGraph: {
    title: "Community Forums - Connect & Collaborate",
    description:
      "Join our vibrant community to discuss ideas, ask questions, and collaborate with developers worldwide.",
    url: "https://forem.dev/", // TODO: Update this URL if needed
    siteName: "Community Forums",
    images: [
      {
        url: "https://forem.dev/remoteimages/uploads/articles/hyjs04hjka95n1lkxb68.png",
        width: 1200,
        height: 630,
        alt: "Community Forums Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jacksonkasi11",
    title: "Community Forums - Connect & Collaborate",
    description:
      "A full-stack web app for discussions, Q&A, and collaboration among developers. Join now!",
    images: [
      "https://forem.dev/remoteimages/uploads/articles/hyjs04hjka95n1lkxb68.png",
    ],
  },
  icons: {
    icon: "/icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <Header />
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

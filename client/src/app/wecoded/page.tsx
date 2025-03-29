import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";

export default function WecodedPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white font-mono antialiased">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-32" 
        style={{
          backgroundImage: "url('https://dev-to-uploads.s3.amazonaws.com/uploads/articles/njtfhgavekf053nkw924.jpg')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.7)"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-6 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Image
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nfcn6junu8xg5e9910ip.png"
              alt="WeCoded Logo"
              width={140}
              height={140}
              className="mx-auto mb-12"
              priority
            />
            <div className="inline-flex items-center bg-black/50 backdrop-blur-sm px-5 py-2 border border-[#CCEA71]/30 rounded-md mb-8">
              <span className="animate-pulse text-[#CCEA71] text-sm font-bold mr-2">●</span>
              <span className="text-white text-sm font-bold tracking-widest">CHALLENGE STATUS: LIVE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-none">
              <span className="text-white">2025 </span>
              <span className="text-[#CCEA71]">WeCoded</span>
              <span className="text-white"> Challenge</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-6 font-medium">
              A Celebration of Gender Equity in Software Development
            </p>
            <p className="text-white/80 mb-12 text-lg">
              Submissions Due: <span className="text-[#CCEA71]">April 06, 2025 23:59 PT</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/signup"
                className="bg-[#CCEA71] text-black px-10 py-4 border border-[#CCEA71] rounded-md font-bold text-xl hover:bg-transparent hover:text-[#CCEA71] transition-colors"
              >
                Sign Up
              </Link>
              <Link
                href="/"
                className="bg-transparent text-white px-10 py-4 border border-white/30 rounded-md font-bold text-xl hover:border-white hover:bg-white/5 transition-colors"
              >
                View Entries
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-24">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-24">
          <p className="text-xl md:text-2xl text-center leading-relaxed text-gray-800 dark:text-white">
            We're excited to announce the launch of our first-ever 
            <span className="text-[#4531EA] dark:text-[#CCEA71] font-bold"> WeCoded Challenge</span>
            —a new way to celebrate diversity, inclusion, and empowerment in the tech industry!
          </p>
        </div>

        {/* Evolution Section */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            The Evolution from <span className="text-[#9D00E5]">SheCoded</span> to <span className="text-[#4531EA] dark:text-[#CCEA71]">WeCoded</span>
          </h2>
          <div className="space-y-8 text-lg">
            <p className="text-gray-700 dark:text-white/90 leading-relaxed">
              Since 2018, DEV has celebrated International Women's Day with SheCoded, a call to action for the community to share powerful stories from women in tech about their journeys, challenges, and triumphs. What began as a platform for women's voices naturally evolved into WeCoded in 2023—an inclusive space that amplifies all underrepresented and marginalized voices in our industry.
            </p>
            <p className="text-gray-700 dark:text-white/90 leading-relaxed">
              This evolution reflects our commitment to creating a community where everyone can see themselves represented, share their experiences, and find inspiration. WeCoded builds on the foundation of SheCoded while expanding our celebration to embrace the rich diversity of perspectives that make our community stronger.
            </p>
          </div>
        </div>

        {/* Challenge Prompts */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 max-w-5xl mx-auto">
          <div>
            <div className="flex items-start gap-6">
              <div className="border-2 border-gray-300 dark:border-white/30 rounded-full p-4 dark:bg-white/40 ">
                <Image
                  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rnta1kb87lchhgwtizso.png"
                  alt="Icon 1"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#4531EA]">Echoes of Experience</h3>
                <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                  Share your personal journey or the stories you've witnessed in the tech industry—highlighting challenges, triumphs, and insights.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start gap-6">
              <div className="border-2 border-gray-300 dark:border-white/30 rounded-full p-4 dark:bg-white/10 bg-black">
                <Image
                  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hlxcz7y5q2si67p6st6e.png"
                  alt="Icon 2"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#9D00E5]">Celebrate in Code</h3>
                <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                  Create a dynamic landing page for dev.to/wecoded — a permanent home for our annual celebration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="max-w-3xl mx-auto text-center mb-24 py-16 px-8 bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/10 rounded-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#4531EA] dark:text-[#CCEA71]">
            All winners will receive:
          </h2>
          <ul className="text-xl md:text-2xl space-y-6 mb-10 text-gray-800 dark:text-white">
            <li className="flex items-center justify-center gap-2">
              <span className="text-[#4531EA] dark:text-[#CCEA71]">⟐</span> 6-month DEV++ Membership
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-[#4531EA] dark:text-[#CCEA71]">⟐</span> Exclusive DEV Badge
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-[#4531EA] dark:text-[#CCEA71]">⟐</span> A gift from the DEV Shop
            </li>
          </ul>
          <p className="text-lg md:text-xl text-[#4531EA] dark:text-[#4531EA]">
            The winning design for our Celebrate in Code prompt will be used as the official WeCoded landing page after the challenge wraps!
          </p>
        </div>

        {/* Badge Showcase */}
        <div className="max-w-3xl mx-auto mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#4531EA] dark:text-[#CCEA71]">
            Earn These Exclusive Badges
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <div className="mb-4 border-2 border-[#4531EA]/30 rounded-full p-2 inline-block">
                <Image 
                  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u77labrob12u9gdmzceb.png"
                  alt="2025 WeCoded Winner Badge"
                  width={180}
                  height={180}
                  className="mx-auto"
                />
              </div>
              <p className="text-xl font-bold text-[#4531EA]">Winner Badge</p>
            </div>
            <div className="text-center">
              <div className="mb-4 border-2 border-[#9D00E5]/30 rounded-full p-2 inline-block">
                <Image 
                  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rq0ncf4rlt3069vz8el0.png"
                  alt="2025 WeCoded Completion Badge"
                  width={180}
                  height={180}
                  className="mx-auto"
                />
              </div>
              <p className="text-xl font-bold text-[#9D00E5]">Completion Badge</p>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="max-w-3xl mx-auto text-center py-12 px-8 border-t border-gray-200 dark:border-white/10">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white">Important Note</h3>
          <p className="text-gray-700 dark:text-white/80 leading-relaxed">
            By participating in this challenge, you agree that if your submission is selected as a winner, DEV may use, modify, and host your code as the official landing page for WeCoded. You retain full ownership of your work, and this agreement does not restrict how you use or share it elsewhere.
          </p>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "2025 WeCoded Challenge | DEV Community",
  description: "A Celebration of Gender Equity in Software Development - Share your story or create the official WeCoded landing page.",
};
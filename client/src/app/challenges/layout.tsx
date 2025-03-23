// ** React/Next.js
import { type ReactNode } from 'react';

// ** Layout
import Layout from '@/layout';

// ** Components
import AsidePrimarySidebar from "@/components/custom-sidebar";
import { ActiveDiscussions, Challenges } from "@/components/right-sidebar";

interface ChallengesLayoutProps {
  children: ReactNode;
}

export default function ChallengesLayout({ children }: ChallengesLayoutProps) {
  return (
    <Layout>
    <div className="grid grid-cols-12 gap-6 w-full">
      {/* Left Sidebar */}
      <div className="hidden md:block md:col-span-4 lg:col-span-3">
        <AsidePrimarySidebar />
      </div>

      {/* Main Content */}
      <main className="col-span-12 md:col-span-8 lg:col-span-6">
        {children}
      </main>

      {/* Right Sidebar */}
      <aside className="hidden lg:block lg:col-span-3 mt-6">
        <div className="space-y-6">
          <ActiveDiscussions />
          <Challenges />
        </div>
      </aside>
    </div>
    </Layout>
  );
} 
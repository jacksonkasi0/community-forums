// ** Custom Components
import AsidePrimarySidebar from "@/components/custom-sidebar";
import { ArticlesSection } from "@/components/forum/ArticlesSection";
import { 
  ActiveDiscussions, 
  Challenges, 
  DiscussionCategories 
} from "@/components/right-sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6 w-full">
      {/* Left Sidebar: hidden below md; 4 columns on md, 3 columns on lg */}
      <div className="hidden md:block md:col-span-4 lg:col-span-3">
        <AsidePrimarySidebar />
      </div>

      {/* Main Content: full width on small screens; 8 columns on md, 6 columns on lg */}
      <main className="col-span-12 md:col-span-8 lg:col-span-6 space-y-6 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Featured Articles
        </h2>
        <div className="mt-4">
          <ArticlesSection />
        </div>
      </main>

      {/* Right Sidebar: hidden on screens smaller than lg; 3 columns on lg */}
      <aside className="hidden lg:block lg:col-span-3 py-6">
        <div className="space-y-6">
          <ActiveDiscussions />
          <Challenges />
          <DiscussionCategories />
        </div>
      </aside>
    </div>
  );
}

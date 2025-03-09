
// ** Custom Components
import AsidePrimarySidebar from "@/components/custom-sidebar";
import FeedSkeleton from "@/components/feed/FeedSkeleton";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6 py-4 w-full">
      {/* Sidebar (Left) - 3 columns */}
      <div className="col-span-12 md:col-span-3">
        <AsidePrimarySidebar />
      </div>

      {/* Main Content - 6 columns */}
      <main className="col-span-12 md:col-span-6 space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Feed</h1>
        <div className="grid gap-6">
          <FeedSkeleton count={50} />
        </div>
      </main>

      {/* Right Sidebar - 3 columns */}
      <aside className="col-span-12 md:col-span-3">
        <h1 className="text-2xl font-bold text-foreground">Right Sidebar</h1>
      </aside>
    </div>
  );
}
import { Card } from "@/components/ui/card";
import { DiscussionThreads } from "@/components/right-sidebar/DiscussionThreads";
import { Challenges } from "@/components/right-sidebar/Challenges";

export function AsideSecondary() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Active Discussions</h2>
        <DiscussionThreads />
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Challenges</h2>
        <Challenges />
      </Card>
    </div>
  );
} 
import React from "react";

// ** UI Components
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface FeedSkeletonProps {
  count?: number;
}

const FeedSkeletonItem: React.FC = () => {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-3 w-[150px]" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[85%]" />
        <div className="flex items-center space-x-4 pt-4">
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-8 w-16" />
        </div>
      </CardContent>
    </Card>
  );
};

const FeedSkeleton: React.FC<FeedSkeletonProps> = ({ count = 50 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <FeedSkeletonItem key={index} />
      ))}
    </>
  );
};

export default FeedSkeleton;

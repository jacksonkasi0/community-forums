import React from "react";

interface TagPageProps {
  params: {
    tags: string;
  };
}

export default function TagPage({ params }: TagPageProps) {
  const { tags } = params; // Get the tag from the params

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Posts tagged with #{tags}</h1>
      {/* Placeholder for tag-specific content */}
      <div className="mt-4">
        {/* Example: Fetch posts based on the tag */}
        <p className="text-gray-600">Showing posts tagged with #{tags}</p>

        {/* Fetch posts and display based on the tag */}
        <div className="mt-4">
          {/* Add your posts component or logic here */}
          <p>Here you would list posts related to the tag #{tags}</p>
        </div>
      </div>
    </div>
  );
}

// Optionally add metadata dynamically based on tag
export async function generateMetadata({ params }: TagPageProps) {
  return {
    title: `Posts tagged with #${params.tags}`,
    description: `Browse all posts tagged with #${params.tags}`,
  };
}

import React from 'react'

interface TagPageProps {
  params: {
    tag: string
  }
}

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Posts tagged with #{tag}
      </h1>
      {/* Add your tag-specific content here */}
      <div className="mt-4">
        {/* You can add a loading state or fetch posts with this tag */}
        <p className="text-gray-600">
          Showing posts tagged with #{tag}
        </p>
      </div>
    </div>
  )
}

// Optionally add metadata
export async function generateMetadata({ params }: TagPageProps) {
  return {
    title: `Posts tagged with #${params.tag}`,
    description: `Browse all posts tagged with #${params.tag}`,
  }
}
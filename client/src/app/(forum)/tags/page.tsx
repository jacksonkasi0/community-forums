import React from 'react';

export default function TagHomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Browse Tags
      </h1>
      <div className="mt-4">

          <p className="text-gray-600">No tags available.</p>

      </div>
    </div>
  );
}

// Optionally add metadata
export async function generateMetadata() {
  return {
    title: 'Browse Tags',
    description: 'Explore all available tags.',
  };
}

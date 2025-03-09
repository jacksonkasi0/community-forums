import { type Metadata } from "next";

interface PageProps {
  params: Promise<{ tags: string }>;
}

export default async function TagPage(props: PageProps) {
  const params = await props.params;
  const { tags } = params;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Posts tagged with #{tags}</h1>
      <div className="mt-4">
        <p className="text-gray-600">Showing posts tagged with #{tags}</p>
        <div className="mt-4">
          <p>Here you would list posts related to the tag #{tags}</p>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  return {
    title: `Posts tagged with #${params.tags}`,
    description: `Browse all posts tagged with #${params.tags}`,
  };
}

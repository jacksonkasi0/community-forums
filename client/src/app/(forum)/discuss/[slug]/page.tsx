import { Metadata } from "next";

// ** UI Components
import { Card } from "@/components/ui/card";

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="p-6">
        <h1 className="text-2xl font-semibold mb-4">
          #{decodeURIComponent(slug)}
        </h1>
        <p className="text-muted-foreground">
          Showing posts tagged with #{decodeURIComponent(slug)}
        </p>
      </Card>
    </div>
  );
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  return {
    title: `#${params.slug}`,
    description: `Posts tagged with #${params.slug}`,
  };
}

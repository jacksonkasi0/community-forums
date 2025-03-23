// ** React/Next
import { type Metadata } from "next";
import { notFound } from "next/navigation";

// ** Components
import { Card } from "@/components/ui/card";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function DiscussPage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  if (!slug) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="p-6">
        <h1 className="text-2xl font-semibold mb-4">
          Posts tagged with #{decodeURIComponent(slug)}
        </h1>
        <div className="text-muted-foreground">
          <p>Showing posts tagged with #{decodeURIComponent(slug)}</p>
          <div className="mt-6">
            <p>Here you would list posts related to the tag #{decodeURIComponent(slug)}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  return {
    title: `Posts tagged with #${decodeURIComponent(slug)}`,
    description: `Browse all posts tagged with #${decodeURIComponent(slug)}`,
  };
}

// ** React
import Image from "next/image";
import Link from "next/link";

// ** Third-party Libraries
import { formatDistanceToNow } from "date-fns";

// ** API
import type { DevToArticle } from "@/api/dev/devto";

// ** Components
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  article: DevToArticle;
  isFirstCard?: boolean;
}

// Function to extract direct S3 URL from CDN URL
function getDirectImageUrl(cdnUrl: string): string {
  try {
    const url = new URL(cdnUrl);
    const encodedUrl = url.searchParams.get('url');
    if (encodedUrl) {
      return decodeURIComponent(encodedUrl);
    }
    return cdnUrl;
  } catch {
    return cdnUrl;
  }
}

export function ArticleCard({ article, isFirstCard = false }: ArticleCardProps) {
  const socialImageUrl = getDirectImageUrl(article.social_image);
  const profileImageUrl = getDirectImageUrl(article.user.profile_image_90);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={article.url} target="_blank" rel="noopener noreferrer">
        {isFirstCard && (
          <div className="relative h-48 w-full">
            <Image
              src={socialImageUrl}
              alt={article.title}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={75}
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
          <p className={`text-sm text-muted-foreground mb-3 ${isFirstCard ? 'line-clamp-2' : 'line-clamp-3'}`}>
            {article.description}
          </p>
          <div className="flex items-center gap-2 mb-3">
            <Image
              src={profileImageUrl}
              alt={article.user.name}
              width={24}
              height={24}
              className="rounded-full"
              loading="lazy"
              sizes="24px"
              quality={75}
            />
            <span className="text-sm">{article.user.name}</span>
            <span className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(article.published_at), { addSuffix: true })}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tag_list.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  );
} 
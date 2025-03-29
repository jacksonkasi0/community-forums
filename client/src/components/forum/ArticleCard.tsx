// ** React
import Image from "next/image";
import Link from "next/link";

// ** Third-party Libraries
import { formatDistanceToNow } from "date-fns";
import { MessageSquare, Bookmark } from "lucide-react";

// ** API
import type { DevToArticle } from "@/api/dev/devto";

// ** Components
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

// Function to generate random read time between 1-10 minutes
function getRandomReadTime(): number {
  return Math.floor(Math.random() * 10) + 1;
}

export function ArticleCard({ article, isFirstCard = false }: ArticleCardProps) {
  const socialImageUrl = getDirectImageUrl(article.social_image!);
  const profileImageUrl = getDirectImageUrl(article.user.profile_image_90!);
  const readTime = getRandomReadTime();

  const handleCommentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Handle comment click
    console.log('Comment clicked');
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Handle save click
    console.log('Save clicked');
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Link href={article.url} target="_blank" rel="noopener noreferrer" className="block">
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
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={profileImageUrl}
                alt={article.user.name}
                width={32}
                height={32}
                className="rounded-full"
                loading="lazy"
                sizes="32px"
                quality={75}
              />
              <div className="flex flex-col">
                <span className="font-medium">{article.user.name}</span>
                <span className="text-sm text-muted-foreground">
                  {formatDistanceToNow(new Date(article.published_at!), { addSuffix: true })}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {article.tag_list.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>

            {!isFirstCard && (
              <p className="text-base text-muted-foreground mb-4 line-clamp-3">
                {article.description}
              </p>
            )}

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="gap-1 cursor-pointer hover:bg-accent"
                  onClick={handleCommentClick}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>{article.comments_count} Comments</span>
                </Button>
                <div className="flex items-center gap-1">
                  {article.public_reactions_count} Reactions
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">{readTime} min read</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 cursor-pointer hover:bg-accent"
                  onClick={handleSaveClick}
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Card>
  );
} 
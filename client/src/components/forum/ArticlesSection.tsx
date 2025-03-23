'use client'

// ** React
import { useEffect, useState } from "react";

// ** Third-party Libraries
import { useQueryState } from "nuqs";

// ** API
import { DevToArticle, fetchDevToArticles } from "@/api/dev/devto";

// ** Components
import { ArticleCard } from "@/components/forum/ArticleCard";
import FeedSkeleton from "@/components/feed/FeedSkeleton";

// ** Utils
import { searchArticles } from "@/lib/utils/fuzzySearch";

export function ArticlesSection() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<DevToArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Get search query from URL using nuqs
  const [searchQuery] = useQueryState("q", {
    defaultValue: "",
  });

  useEffect(() => {
    async function loadArticles() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchDevToArticles();
        if (data && data.length > 0) {
          setArticles(data);
          setFilteredArticles(data);
        } else {
          setError("No articles found");
        }
      } catch (error) {
        setError("Failed to load articles");
      } finally {
        setIsLoading(false);
      }
    }

    loadArticles();
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      const filtered = searchArticles(articles, searchQuery || "");
      setFilteredArticles(filtered);
    }
  }, [searchQuery, articles]);

  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <FeedSkeleton key={i} />
          ))
        ) : error ? (
          <div className="col-span-full text-center py-8 text-destructive">
            {error}
          </div>
        ) : filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              isFirstCard={index === 0}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-muted-foreground">
            No articles found
          </div>
        )}
      </div>
    </div>
  );
} 
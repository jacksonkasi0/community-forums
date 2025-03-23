// ** Third Party lib
// @ts-ignore
import Fuse from "fuse.js";

// ** API
import { DevToArticle } from "@/api/dev/devto";

export function createFuzzySearch(articles: DevToArticle[]) {
  return new Fuse(articles, {
    keys: ["title", "description", "tag_list"],
    threshold: 0.3,
    includeScore: true,
  });
}

export function searchArticles(
  articles: DevToArticle[],
  searchQuery: string
): DevToArticle[] {
  if (!searchQuery.trim()) return articles;
  
  const fuse = createFuzzySearch(articles);
  const results = fuse.search(searchQuery);
  return results.map((result: any) => result.item);
} 
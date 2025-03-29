import { z } from "zod";

// Define the schema for Dev.to article data
export const DevToArticleSchema = z.object({
  type_of: z.string(),
  id: z.number(),
  title: z.string(),
  description: z.string().nullable(),
  readable_publish_date: z.string().nullable(),
  slug: z.string(),
  path: z.string(),
  url: z.string(),
  comments_count: z.number(),
  public_reactions_count: z.number(),
  collection_id: z.number().nullable(),
  published_timestamp: z.string().nullable(),
  language: z.string().nullable(),
  subforem_id: z.number().nullable(),
  positive_reactions_count: z.number(),
  cover_image: z.string().nullable(),
  social_image: z.string().nullable(),
  canonical_url: z.string().nullable(),
  created_at: z.string(),
  edited_at: z.string().nullable(),
  crossposted_at: z.null(),
  published_at: z.string().nullable(),
  last_comment_at: z.string().nullable(),
  reading_time_minutes: z.number(),
  tag_list: z.array(z.string()),
  tags: z.string(),
  user: z.object({
    name: z.string(),
    username: z.string(),
    twitter_username: z.string().nullable(),
    github_username: z.string().nullable(),
    user_id: z.number(),
    website_url: z.string().nullable(),
    profile_image: z.string().nullable(),
    profile_image_90: z.string().nullable(),
  }),
});

export type DevToArticle = z.infer<typeof DevToArticleSchema>;

export async function fetchDevToArticles(tag: string = "wecoded"): Promise<DevToArticle[]> {
  try {
    const response = await fetch(`https://dev.to/api/articles?tag=${tag}`);
    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }
    const data = await response.json();
    return data.map((article: unknown) => DevToArticleSchema.parse(article));
  } catch (error) {
    console.error("Error fetching Dev.to articles:", error);
    return [];
  }
} 
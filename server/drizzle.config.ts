//drizzle.config.ts
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema/index.ts", // Path to your schema file
  out: "./drizzle", // Output directory for generated code
  dialect: "postgresql",
  dbCredentials: {
    // @ts-ignore
    url: process.env.DATABASE_URL,
  },
} satisfies Config;

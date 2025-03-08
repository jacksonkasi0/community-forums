import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

interface Env {
  DATABASE_URL: string;
}

export function createDb(env: Env) {
  const sql = neon(env.DATABASE_URL);
  const db = drizzle(sql, {
    schema,
  });
  return db;
}

export type DbInstance = ReturnType<typeof createDb>;

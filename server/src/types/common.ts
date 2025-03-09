export interface Bindings {
  NODE_ENV?: string;
  DATABASE_URL: string;
  CLERK_SECRET_KEY: string;
  CLERK_PUBLISHABLE_KEY: string;
  SIGNING_SECRET: string;
  ALLOWED_ORIGINS: string;
  [key: string]: string | undefined;
}

export interface User {
  userId: string;
}

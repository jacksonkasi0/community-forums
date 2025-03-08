export interface Bindings {
  NODE_ENV?: string;
  DATABASE_URL: string;
  CLERK_SECRET_KEY: string;
  CLERK_PUBLISHABLE_KEY: string;
  [key: string]: string | undefined;
}

export interface User {
  userId: string;
}

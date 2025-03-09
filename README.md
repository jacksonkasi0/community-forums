# Forums

A serverless community forum application split into two repositories:
- **Client**: A Next.js frontend with Clerk authentication, `shadcn/ui`, and `nuqs` for query state management.
- **Server**: A Hono-based Cloudflare Worker backend with Neon database integration.

- **Frontend**: [https://forums-x.vercel.app/](https://forums-x.vercel.app/)
- **Backend**: [https://community-forums-server.contentguru.workers.dev/](https://community-forums-server.contentguru.workers.dev/)
- **Repositories**:
  - Client: [https://github.com/jacksonkasi0/community-forums/client](https://github.com/jacksonkasi0/community-forums/client)
  - Server: [https://github.com/jacksonkasi0/community-forums/server](https://github.com/jacksonkasi0/community-forums/server)

---

## Features
- **Authentication**: Clerk with Google SSO and email/password login.
- **Frontend**: Next.js 15, React 19, `shadcn/ui`, Tailwind CSS v4, Lucide React icons, and `nuqs` for URL query state management.
- **Backend**: Hono on Cloudflare Workers with Drizzle ORM and Neon PostgreSQL.
- **Webhooks**: Syncs Clerk user data to the backend database.
- **CORS**: Configurable allowed origins for secure API access.

---

## Project Structure
- **Client**: Next.js application (`community-forums/client`)
- **Server**: Cloudflare Worker (`community-forums/server`)

---

## Prerequisites
- **Node.js**: v20.x or higher
- **pnpm**: Recommended package manager (or use `npm`)
- **Clerk Account**: For authentication setup
- **Cloudflare Account**: For Workers deployment
- **Neon Database**: For serverless PostgreSQL

---

## Setup

### Client (`community-forums/client`)
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jacksonkasi0/community-forums.git
   cd client
   ```

2. **Install Dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file based on `example.env`:
   ```env
   # Clerk URLs (optional)
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

   # Clerk Keys
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=xxxxxxxxxxxxxxxxxx
   CLERK_SECRET_KEY=xxxxxxxxxxxxxxxxxx

   # Backend API URL
   NEXT_PUBLIC_SERVER_URL=http://localhost:8787/api
   ```
   - Update `NEXT_PUBLIC_SERVER_URL` to `https://community-forums-server.contentguru.workers.dev/api` in production.

4. **Run Development Server**:
   ```bash
   pnpm dev
   ```
   - Open [http://localhost:3000](http://localhost:3000).

---

### Server (`community-forums/server`)
1. **Clone the Repository**:
   ```bash
   cd ../server
   ```

2. **Install Dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**:
   Create a `wrangler.toml` file based on `example.wrangler.toml`:
   ```toml
   #:schema node_modules/wrangler/config-schema.json

   name = "community-forums-server"
   main = "src/index.ts"
   compatibility_date = "2025-01-08"
   compatibility_flags = ["nodejs_compat"]

   [placement]
   mode = "smart"

   [observability]
   enabled = true

   [env.production]
   name = "community-forums-server"
   [env.production.vars]
   NODE_ENV = "production"
   NODE_VERSION = "20.0.0"
   CLERK_SECRET_KEY = "xxxxxxxxxxxxxxxxxxx"
   CLERK_PUBLISHABLE_KEY = "xxxxxxxxxxxxxxxxxxx"
   SIGNING_SECRET = "xxxxxxxxxxxxxxxxxxx"
   DATABASE_URL = "xxxxxxxxxxxxxxxxxxx"
   ALLOWED_ORIGIN = "https://forums-x.vercel.app"

   [env.development]
   name = "community-forums-server-dev"
   [env.development.vars]
   NODE_ENV = "development"
   NODE_VERSION = "20.0.0"
   CLERK_SECRET_KEY = "xxxxxxxxxxxxxxxxxxx"
   CLERK_PUBLISHABLE_KEY = "xxxxxxxxxxxxxxxxxxx"
   SIGNING_SECRET = "xxxxxxxxxxxxxxxxxxx"
   DATABASE_URL = "xxxxxxxxxxxxxxxxxxx"
   ALLOWED_ORIGIN = "http://localhost:3000"
   ```
   - Replace `xxxxxxxxxxxxxxxxxxx` with your actual values from Clerk Dashboard and Neon.
   - Adjust `ALLOWED_ORIGIN` as needed (single origin recommended for production).

4. **Run Development Server**:
   ```bash
   pnpm dev
   ```
   - Runs locally at `http://localhost:8787`.

---

## Database Setup
1. **Generate Schema**:
   ```bash
   pnpm db:generate
   ```
   - Creates migration files in `server/src/db`.

2. **Push to Database**:
   ```bash
   pnpm db:push
   ```
   - Applies schema to your Neon database.

---

## Deployment

### Client
1. **Build**:
   ```bash
   pnpm build
   ```

2. **Deploy to Vercel**:
   - Push to GitHub: `git push origin main`.
   - Import into Vercel and set environment variables:
     ```env
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=xxxxxxxxxxxxxxxxxx
     CLERK_SECRET_KEY=xxxxxxxxxxxxxxxxxx
     NEXT_PUBLIC_SERVER_URL=https://community-forums-server.contentguru.workers.dev/api
     ```
   - Live URL: [https://forums-x.vercel.app/](https://forums-x.vercel.app/).

---

### Server
1. **Deploy to Cloudflare**:
   ```bash
   pnpm deploy
   ```
   - Deploys to production environment (`[env.production]`).
   - Live URL: [https://community-forums-server.contentguru.workers.dev/](https://community-forums-server.contentguru.workers.dev/).

---

## Usage
- **Sign Up**: Go to `/sign-up` to register with Google or email/password.
- **Query State**: Use `nuqs` to manage URL query parameters (e.g., filters, search).
- **Webhook Sync**: User creation triggers `/api/webhooks/clerk` to sync data to Neon.
- **API**: Protected routes (e.g., `/api/user/profile`) require Clerk JWT.

---

## Troubleshooting
- **Cookies Not Sent**:
  - Ensure `ALLOWED_ORIGIN` matches your frontend domain.
  - Set `withCredentials: true` in Axios and `credentials: true` in Hono CORS.
- **CORS Errors**: Verify `cors` middleware in `server/src/index.ts`.
- **Database Issues**: Check `DATABASE_URL` and run `db:push`.

---

## Dependencies
### Client
- **Core**: Next.js 15.2.1, React 19, Clerk (`@clerk/nextjs`, `@clerk/elements`)
- **UI**: `shadcn/ui` (Radix UI), Tailwind CSS v4, Lucide React
- **Utils**: Axios, Zustand, Zod, `nuqs` (URL query state)

### Server
- **Core**: Hono 4.7.4, Clerk Backend, Drizzle ORM
- **Database**: Neon Serverless, Drizzle Kit
- **Deployment**: Cloudflare Workers (Wrangler)

---

## Contributing
1. Fork the repository (`client` or `server`).
2. Create a feature branch (`git checkout -b feature/xyz`).
3. Commit changes (`git commit -m "Add xyz"`).
4. Push to the branch (`git push origin feature/xyz`).
5. Open a pull request.

---

## License
This project is private and not licensed for public use.

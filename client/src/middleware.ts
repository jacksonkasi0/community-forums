// middleware.ts

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// protected routes
const isProtectedRoute = createRouteMatcher(['/profile(.*)']);

// The middleware function receives the auth helper and the request.
export default clerkMiddleware(async (auth, req) => {
  // If the request URL matches a protected route, call auth.protect()
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
  // For all other routes (e.g. the root '/'), no protection is applied.
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files unless found in search params.
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

import { Context } from "hono";
import { createMiddleware } from "hono/factory";
import { createClerkClient } from "@clerk/backend";

import { Bindings, User } from "@/types/common";

export const verifyAuthToken = async (
  c: Context<{ Bindings: Bindings }>
): Promise<User> => {
  const clerk = createClerkClient({
    secretKey: c.env.CLERK_SECRET_KEY,
    publishableKey: c.env.CLERK_PUBLISHABLE_KEY, // Optional but recommended
  });

  // Authenticate the request using the full request object
  const requestState = await clerk.authenticateRequest(c.req.raw, {
    authorizedParties: ["http://localhost:3000", "http://localhost:8787"],
    // jwtKey: c.env.CLERK_JWT_KEY, // Uncomment for networkless verification
  });

  // Check if the user is signed in and get userId
  if (!requestState.isSignedIn || !requestState.toAuth()?.userId) {
    throw new Error("Unauthorized: User not signed in or no userId found");
  }

  const userId = requestState.toAuth().userId;

  return { userId };
};

export const authMiddleware = createMiddleware<{ Bindings: Bindings }>(
  async (c, next) => {
    try {
      const user = await verifyAuthToken(c);
      c.set("user", user);
      await next();
    } catch (err) {
      console.error("Clerk authentication failed:", err);
      return c.json({ error: "Invalid or expired token" }, 401);
    }
  }
);

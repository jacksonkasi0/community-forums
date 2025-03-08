import { Hono } from "hono";
import { authMiddleware } from "@/middleware/auth";

import userRoutes from "./user";
import webhookApi from "./webhooks/clerk";

// Main routes Hono instance
export const routes = new Hono();

// Public routes (no authentication required)
routes.route("/webhooks", webhookApi);
routes.get("/test", (c) => c.json({ message: "Hello, world!" }));

// Private routes (require authentication)
// Create a new instance for private routes
const privateRoutes = new Hono();

// Apply authMiddleware to all private routes
privateRoutes.use("*", authMiddleware);

// Mount user routes
privateRoutes.route("/", userRoutes);

// Mount the private routes under the /user prefix
routes.route("/user", privateRoutes);

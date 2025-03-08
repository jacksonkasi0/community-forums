import { Hono } from "hono";
import { authMiddleware } from "@/middleware/auth";

import userRoutes from "./user";
import webhookApi from "./webhooks/clerk";

// Main routes Hono instance
export const routes = new Hono();

// Private routes (require authentication)
const privateRoutes = new Hono();

// Apply authMiddleware to all private routes
privateRoutes.use("*", authMiddleware);

// Mount user routes under /user with authentication
privateRoutes.route("/user", userRoutes);

// Mount private routes under the main routes
routes.route("/", privateRoutes);

// Public routes (no authentication required)
// Mount webhook routes under /webhooks
// routes.route("/webhooks", webhookApi);
routes.get("/test", async (c: any) => {
    return c.json({ message: "Hello, world!" });
});


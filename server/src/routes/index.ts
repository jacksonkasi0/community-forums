import { Hono } from "hono";

// ** Middleware
import { authMiddleware } from "@/middleware/auth";

// ** Routes
import userRoutes from "./user";
import webhookApi from "./webhooks/clerk";

// Main routes Hono instance
export const routes = new Hono();

// Public routes (no authentication required)
routes.route("/webhooks", webhookApi);
routes.get("/test", (c) => c.json({ message: "Hello, world!" }));


// Private routes (require authentication)
// Attach authMiddleware to all routes under "/user"
routes.use("/user/*", authMiddleware);
routes.route("/user", userRoutes);
import { Hono } from "hono";

import userRoutes from "./user";

export const routes = new Hono();

routes.route("/user", userRoutes);

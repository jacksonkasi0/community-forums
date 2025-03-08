import { Hono } from "hono";

// ** Routes
import getUser from "./get-user";

const userRoutes = new Hono();


userRoutes.route("/", getUser);

export default userRoutes;

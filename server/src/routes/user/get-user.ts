import { Hono } from "hono";
import { users } from "@/db/schema/tbl_users";
import { eq } from "drizzle-orm";

const route = new Hono();

// GET /api/profile - Fetch authenticated user's profile
route.get("/profile", async (c) => {
  const user = c.get("user");
  const db = c.get("db");

  // Fetch user profile from the database
  const userProfile = await db
    .select({
      user_id: users.user_id,
      email: users.email,
      name: users.name,
      profile_pic: users.profile_pic,
      created_at: users.created_at,
    })
    .from(users)
    .where(eq(users.user_id, user.userId))
    .limit(1);

  // Check if user exists
  if (!userProfile.length) {
    return c.json({ error: "User not found" }, 404);
  }

  // Return the user profile
  return c.json(userProfile[0]);
});

export default route;

import { Hono } from "hono";
import { Webhook } from "svix";
import { users } from "@/db/schema/tbl_users";
import { Bindings } from "@/types/common";

import { eq } from "drizzle-orm";

const webhookApi = new Hono<{
  Bindings: Bindings;
}>();

// POST /api/webhooks/clerk - Handle Clerk webhook events
webhookApi.post("/clerk", async (c) => {
  const db = c.get("db");
  const SIGNING_SECRET = c.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    console.error("SIGNING_SECRET is not set in environment variables");
    return c.json({ error: "Server configuration error" }, 500);
  }

  // Get headers and body from the request
  const headers = c.req.header();
  const payload = await c.req.json();

  // Svix headers for verification
  const svixId = headers["svix-id"];
  const svixTimestamp = headers["svix-timestamp"];
  const svixSignature = headers["svix-signature"];

  // Validate Svix headers
  if (!svixId || !svixTimestamp || !svixSignature) {
    return c.json({ error: "Missing Svix headers" }, 400);
  }

  // Verify the webhook signature
  const wh = new Webhook(SIGNING_SECRET);
  let event;
  try {
    event = wh.verify(JSON.stringify(payload), {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as { type: string; data: any };
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return c.json({ error: "Invalid webhook signature" }, 400);
  }

  // Common user data preparation function
  const prepareUserData = (data: any) => ({
    user_id: data.id,
    email: data.email_addresses[0]?.email_address || "",
    name:
      data.first_name || data.last_name
        ? `${data.first_name || ""} ${data.last_name || ""}`.trim()
        : "Unnamed User",
    profile_pic: data.image_url || null,
    created_at: new Date(),
  });

  // Handle user.created event
  if (event.type === "user.created") {
    const newUser = prepareUserData(event.data);

    try {
      await db.insert(users).values(newUser).onConflictDoUpdate({
        target: users.user_id,
        set: newUser,
      });

      console.log(`User ${newUser.user_id} synced to database (created)`);
      return c.json({ message: "User created and synced successfully" }, 200);
    } catch (err) {
      console.error("Database error (user.created):", err);
      return c.json({ error: "Failed to sync user to database" }, 500);
    }
  }

  // Handle user.updated event
  if (event.type === "user.updated") {
    const updatedUser = prepareUserData(event.data);

    try {
      await db
        .update(users)
        .set({
          email: updatedUser.email,
          name: updatedUser.name,
          profile_pic: updatedUser.profile_pic,
          updated_at: new Date(),
        })
        .where(eq(users.user_id, updatedUser.user_id));

      console.log(`User ${updatedUser.user_id} updated in database`);
      return c.json({ message: "User updated successfully" }, 200);
    } catch (err) {
      console.error("Database error (user.updated):", err);
      return c.json({ error: "Failed to update user in database" }, 500);
    }
  }

  // Skipped event types
  return c.json({ message: "Webhook received but no action taken" }, 200);
});

export default webhookApi;

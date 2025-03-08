import { Hono } from "hono";
import { Webhook } from "svix";
import { users } from "@/db/schema/tbl_users";
import { Bindings } from "@/types/common";

const webhookApi = new Hono<{ Bindings: Bindings }>();

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

  // Handle user.created event
  if (event.type === "user.created") {
    const { id, email_addresses, first_name, last_name, image_url } =
      event.data;

    // Prepare user data for insertion
    const newUser = {
      user_id: id, // Clerk user ID
      email: email_addresses[0]?.email_address || "",
      name:
        first_name || last_name
          ? `${first_name || ""} ${last_name || ""}`.trim()
          : "Unnamed User",
      profile_pic: image_url || null,
      created_at: new Date(), // Use current timestamp; Clerk's created_at is in milliseconds
    };

    // Insert or update user in the database (upsert)
    try {
      await db.insert(users).values(newUser).onConflictDoUpdate({
        target: users.user_id,
        set: newUser,
      });

      console.log(`User ${id} synced to database`);
      return c.json({ message: "User created and synced successfully" }, 200);
    } catch (err) {
      console.error("Database error:", err);
      return c.json({ error: "Failed to sync user to database" }, 500);
    }
  }

  // skipped event types
  return c.json({ message: "Webhook received but no action taken" }, 200);
});

export default webhookApi;

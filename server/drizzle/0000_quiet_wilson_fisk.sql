CREATE TABLE "tbl_users" (
	"user_id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"profile_pic" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "tbl_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "tbl_comments" (
	"id" text PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT current_timestamp,
	"user_id" text NOT NULL,
	"forum_id" text NOT NULL,
	"parent_id" text,
	"is_deleted" boolean DEFAULT false NOT NULL,
	CONSTRAINT "content_length_check" CHECK (length("tbl_comments"."content") <= 5000)
);
--> statement-breakpoint
CREATE TABLE "tbl_forums" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"tags" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT current_timestamp,
	"user_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "tbl_comments" ADD CONSTRAINT "tbl_comments_user_id_tbl_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."tbl_users"("user_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tbl_comments" ADD CONSTRAINT "tbl_comments_forum_id_tbl_forums_id_fk" FOREIGN KEY ("forum_id") REFERENCES "public"."tbl_forums"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tbl_comments" ADD CONSTRAINT "tbl_comments_parent_id_tbl_comments_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."tbl_comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tbl_forums" ADD CONSTRAINT "tbl_forums_user_id_tbl_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."tbl_users"("user_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_comments_forum_id_parent_id" ON "tbl_comments" USING btree ("forum_id","parent_id");--> statement-breakpoint
CREATE INDEX "idx_comments_is_deleted" ON "tbl_comments" USING btree ("is_deleted");
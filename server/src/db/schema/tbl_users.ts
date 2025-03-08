import { relations } from 'drizzle-orm';
import { text, timestamp } from 'drizzle-orm/pg-core';
import { pgTable } from '@/db/utils';
import { forums } from './tbl_forums';
import { comments } from './tbl_comments';

// Users table
export const users = pgTable('users', {
  user_id: text('user_id').notNull().primaryKey(), // clerk user id
  email: text('email').unique().notNull(),
  name: text('name').notNull(),
  profile_pic: text('profile_pic'),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
});

// Type definitions
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

// Relations (to be referenced by forums and comments)
export const users_relations = relations(users, ({ many }) => ({
  forums: many(forums), // One user can create many forums
  comments: many(comments), // One user can post many comments
}));
import { relations, sql } from 'drizzle-orm';
import { jsonb, text, timestamp } from 'drizzle-orm/pg-core';
import { v4 as uuidv4 } from 'uuid';
import { pgTable } from '@/db/utils';

import { users } from './tbl_users';
import { comments } from './tbl_comments';

// Forums table
export const forums = pgTable('forums', {
  id: text('id')
    .$defaultFn(() => uuidv4())
    .primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  tags: jsonb('tags'), // JSONB for flexible tags
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at')
    .default(sql`current_timestamp`)
    .$onUpdate(() => new Date()),
  user_id: text('user_id')
    .notNull()
    .references(() => users.user_id, {
      onDelete: 'cascade',
    }),
});

// Type definitions
export type Forum = typeof forums.$inferSelect;
export type NewForum = typeof forums.$inferInsert;

// Relations
export const forums_relations = relations(forums, ({ one, many }) => ({
  user: one(users, {
    fields: [forums.user_id],
    references: [users.user_id],
  }),
  comments: many(comments), // One forum can have many comments
}));
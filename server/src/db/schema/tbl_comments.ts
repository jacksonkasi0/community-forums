import { relations, sql } from 'drizzle-orm';
import { text, timestamp, boolean, check, index, PgTableWithColumns } from 'drizzle-orm/pg-core';
import { v4 as uuidv4 } from 'uuid';
import { users } from './tbl_users';
import { forums } from './tbl_forums';
import { pgTable } from '@/db/utils';

// Comments table
export const comments: PgTableWithColumns<any> = pgTable(
  'comments',
  {
    id: text('id')
      .$defaultFn(() => uuidv4())
      .primaryKey(),
    content: text('content').notNull(),
    created_at: timestamp('created_at').defaultNow().notNull(),
    updated_at: timestamp('updated_at')
      .default(sql`current_timestamp`)
      .$onUpdate(() => new Date()),
    user_id: text('user_id')
      .notNull()
      .references(() => users.user_id, {
        onDelete: 'cascade',
      }),
    forum_id: text('forum_id')
      .notNull()
      .references(() => forums.id, {
        onDelete: 'cascade',
      }),
    parent_id: text('parent_id').references(() => comments.id, {
      onDelete: 'set null', // Self-referencing for nesting
    }),
    is_deleted: boolean('is_deleted').default(false).notNull(),
  },
  (table) => [
    // CHECK constraint for content length
    check('content_length_check', sql`length(${table.content}) <= 5000`),
    // Indexes
    index('idx_comments_forum_id_parent_id').on(table.forum_id, table.parent_id),
    index('idx_comments_is_deleted').on(table.is_deleted),
  ]
);

// Type definitions
export type Comment = typeof comments.$inferSelect;
export type NewComment = typeof comments.$inferInsert;

// Relations
export const comments_relations = relations(comments, ({ one, many }) => ({
  user: one(users, {
    fields: [comments.user_id],
    references: [users.user_id],
  }),
  forum: one(forums, {
    fields: [comments.forum_id],
    references: [forums.id],
  }),
  parent: one(comments, {
    fields: [comments.parent_id],
    references: [comments.id],
    relationName: 'parent_comment',
  }),
  replies: many(comments, {
    relationName: 'parent_comment',
  }), // Self-referencing for replies
}));
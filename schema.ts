import { sqliteTable, text, integer, blob } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const healthRecords = sqliteTable("health_records", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id"), // Optional, for anonymous sync
  symptoms: text("symptoms").notNull(),
  diagnosis: blob("diagnosis").notNull(), // Store the result JSON as blob
  severity: text("severity"),
  timestamp: integer("timestamp", { mode: "timestamp" }).defaultNow(),
  synced: integer("synced", { mode: "boolean" }).default(false),
});

export const insertUserSchema = createInsertSchema(users);
export const insertHealthRecordSchema = createInsertSchema(healthRecords);

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type HealthRecord = typeof healthRecords.$inferSelect;
export type InsertHealthRecord = z.infer<typeof insertHealthRecordSchema>;

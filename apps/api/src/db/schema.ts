import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHas: text("password_hash").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

// Initialize SQLite database
const sqlite = new Database("local.db");

// Configure Better Auth
export const auth = betterAuth({
  database: sqlite,
  emailAndPassword: {
    enabled: true,
    autoSignIn: true, // Automatically sign in after signup
  },
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      enabled: !!process.env.GOOGLE_CLIENT_ID, // Only enable if keys are present
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "user",
      },
    },
  },
});

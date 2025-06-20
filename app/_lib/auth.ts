import NextAuth, { User } from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./mongodb/mongodbActions";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./mongodb/mongodbConfig";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: MongoDBAdapter(client),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: User }) {
      try {
        if (!user.email || !user.name) return false;

        // Check if user already exists
        const existingUser = await getUser(user.email);

        if (!existingUser) {
          await createUser({ fullName: user.name, email: user.email });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  pages: {
    signIn: "/login",
  },
});

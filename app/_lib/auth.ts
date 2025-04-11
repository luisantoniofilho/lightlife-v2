import NextAuth, { Session, User } from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUserData } from "./firebaseActions";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth }: { auth: Session | null }) {
      // If user was authenticated, returns true
      return !!auth?.user;
    },
    async signIn({ user }: { user: User }) {
      try {
        if (!user.email || !user.name) return false;

        // Check if user already exists
        const existingUser = await getUserData(user.email);

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
};

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth(authConfig);

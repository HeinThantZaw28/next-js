import NextAuth from "next-auth";
import { connectDB } from "./service/lib/database";
import { Users } from "./service/models/Users";
import { authConfig } from "./auth.config";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const login = async (credentials: any) => {
  try {
    await connectDB();
    const user = await Users.findOne({ username: credentials.username });
    if (!user) throw new Error("Wrong credentials");
    const isPwdCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPwdCorrect) throw new Error("Wrong credentials");
    return user;
  } catch (err) {
    throw new Error("Wrong credentials");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});

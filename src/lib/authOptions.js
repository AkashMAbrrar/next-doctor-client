import loginUser from "@/app/actions/auth/loginUser";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import dbConnect, { collectionNamesObject } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter Your Email Here",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const user = await loginUser(credentials);
        console.log(user);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        console.log({ user, account, profile, email, credentials });
        if (account) {
          const { providerAccountId, provider } = account;
          const { email: user_email, image, name } = user;

          // Connect to the database and get the collection
          const userCollection = await dbConnect(
            collectionNamesObject.userCollection
          );

          const existingUser = await userCollection.findOne({
            providerAccountId,
          });
          if (!existingUser) {
            const payload = {
              providerAccountId,
              provider,
              email: user_email,
              image,
              name,
            };
            await userCollection.insertOne(payload);
          }
        }
        return true;
      } catch (error) {
        console.error("Error during signIn callback:", error);
        return false;
      }
    },
  },
};

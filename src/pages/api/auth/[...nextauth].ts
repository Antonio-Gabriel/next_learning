import NextAuth from "next-auth";
import { fauna } from "../../../services/fauna";
import { query as q } from "faunadb";
import GithubProvider from "next-auth/providers/github";
import { getSession } from "next-auth/react";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: "read:user",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user;

      const session = await getSession();

      console.log(session);

      //await fauna.query(q.Create(q.Collection("users"), { data: { email } }));

      return true;
    },
  },
});

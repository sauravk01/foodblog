//simple auth from google
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
//mongodb file
import clientPromise from "../../../utils/connectDBMongoDB";
// console.log(process.env.AUTH_SECRET);
// console.log(process.env.NEXTAUTH_URL);
// console.log(process.env.GOOGLE_CLIENT_ID);
// console.log(process.env.GOOGLE_CLIENT_SECRET);
// console.log(process.env.MONGODB_URI_CLOUD);
export default NextAuth({
  jwt: { secret: process.env.AUTH_SECRET },
  //mongodb
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: { strategy: "jwt" },
  database: process.env.MONGODB_URI_CLOUD,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        // console.log(account);
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.id = token.sub;
      return session;
    },
  },
});

import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback triggered:", { url, baseUrl });
      if (url.includes("/api/auth/callback/google")) {
        return `${baseUrl}/home`;
      }
      if (url === "/api/auth/signout") {
        return baseUrl;
      }
      return baseUrl;
    },
  },
});

export { handler as GET, handler as POST };

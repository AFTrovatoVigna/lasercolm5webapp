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
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      localStorage.setItem("userSession", token)
      return session;

    },
    async redirect({ url, baseUrl }) {
      if (url.includes("/api/auth/callback/google")) {
        return `${baseUrl}`;
      }
      if (url === "/api/auth/signout") {
        return baseUrl;
      }
      return baseUrl;
    },
  },
  session: {
    strategy: "jwt", // Sesión basada en JWT
  },
});

export { handler as GET, handler as POST };








/*import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";



const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Si la sesión es nueva, asigna el nuevo accessToken
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Añadir el accessToken a la sesión del usuario
      session.accessToken = token.accessToken;
      return session;
    },
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
  session: {
    strategy: 'jwt', // Asegúrate de que la sesión se base en JWT
  },
});

export { handler as GET, handler as POST };
*/


/*const handler = NextAuth({
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


*/
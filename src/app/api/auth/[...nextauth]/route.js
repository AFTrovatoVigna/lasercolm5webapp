import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";



const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // Agregar scopes necesarios
      authorization: {
        params: {
          scope: "profile email", // Agrega otros scopes si es necesario
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Si es una sesión nueva, añade el accessToken y el Google ID (sub)
      if (account) {
        token.accessToken = account.access_token;
        token.userId = profile.sub; // Guarda el Google ID único
      }
      return token;
    },
    async session({ session, token }) {
      // Añadir el accessToken y userId (Google ID) a la sesión
      session.accessToken = token.accessToken;
      session.userId = token.userId; // Pasa el Google ID único a la sesión
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
    strategy: 'jwt',
  },
});

export { handler as GET, handler as POST };


/*const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Si es una sesión nueva, añade el accessToken y el Google ID (sub)
      if (account) {
        token.accessToken = account.access_token;
        token.userId = profile.sub;  // Guarda el Google ID único
      }
      return token;
    },
    async session({ session, token }) {
      // Añadir el accessToken y userId (Google ID) a la sesión
      session.accessToken = token.accessToken;
      session.userId = token.userId;  // Pasa el Google ID único a la sesión
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
    strategy: 'jwt', 
  },
});
export { handler as GET, handler as POST };*/



/*const handler = NextAuth({
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
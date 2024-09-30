import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";



const handler = NextAuth({
providers: [
GoogleProvider({
clientId: process.env.GOOGLE_CLIENT_ID,
 clientSecret: process.env.GOOGLE_CLIENT_SECRET,
 redirectUri: 'http://localhost:4000/api/auth/callback/google',
}),
],async redirect({ url, baseUrl }) {
    return baseUrl; 
}},)
export { handler as GET, handler as POST };
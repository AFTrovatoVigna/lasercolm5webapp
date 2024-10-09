import Navbar from "@/components/Navbar/navbar.jsx";
import "./globals.css";
import React from "react";
import Footer from "@/components/footer/Footer";



import { AuthProvider } from '@/context/AuthContext';

export const metadata = {
  title: "Lasercol",
  description: "Diseños Personalizados con laser",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
       
          <AuthProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
         
            <Footer />
          </AuthProvider>
     
      </body>
    </html>
  );
}

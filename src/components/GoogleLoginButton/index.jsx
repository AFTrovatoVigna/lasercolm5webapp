
















/*CODIGO 2: "use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";
import jwt_decode from "jwt-decode"; // Importa jwt_decode

const GoogleLoginButton = () => {
  const { data: session } = useSession();

  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "http://localhost:4000" });
  };

  useEffect(() => {
    console.log("Session:", session); // Para depurar
    if (session) {
      // Guarda el token en localStorage
      const token = session.accessToken; // Obtiene el token de acceso

      // Decodifica el token JWT
      if (token) {
        try {
          const decoded = jwt_decode(token); // Decodifica el token JWT
          const userId = decoded.id; // Accede al ID del usuario
          console.log("User ID:", userId);

          // Almacena la información en localStorage
          localStorage.setItem("userSession", JSON.stringify({
            name: session.user.name,
            email: session.user.email,
            token: token,
            id: userId, // Usa el ID decodificado
          }));
        } catch (error) {
          console.error("Error decodificando el token:", error);
        }
      }
    } else {
      localStorage.removeItem("userSession");
    }
  }, [session]);

  return (
    <div className="flex justify-center items-center border border-pink-700 rounded-md lg:w-[400px] hover:bg-pink-600 p-2 mt-5 mb-5">
      <button onClick={handleSignIn} className="flex">
        <Image src={"/assets/googleicono.png"} alt="google" width={24} height={24} className="mr-2" />
        <h2>Iniciar sesión con Google</h2>
      </button>
    </div>
  );
};

export default GoogleLoginButton;
*/








"use client";

import Image from "next/image";


const GoogleLoginButton = () => {

  const handleSignIn = async () => {
   // await signIn("google", { callbackUrl: "http://localhost:4000" });
   window.location.href = "http://localhost:3000/auth/api/callback/google/login"
  };

/*useEffect(() => {
  console.log("Session:", session); // Para depurar
  if(session) {
    localStorage.setItem("userSession", JSON.stringify({
      name: session.user.name,
      email: session.user.email,
      token: session.accessToken,
      id: session.user.id, 
    }));
  }else {
    localStorage.removeItem("userSession");
  }
  }, [session]);*/



  return (
    <div className="flex justify-center items-center border border-pink-700 rounded-md lg:w-[400px] hover:bg-pink-600 p-2 mt-5 mb-5">
      <button onClick={handleSignIn} className="flex">
        <Image src={"/assets/googleicono.png"} alt="google" width={24} height={24} className="mr-2" />
        <h2>Iniciar sesión con Google</h2>
      </button>
    </div>
  );
};

export default GoogleLoginButton;
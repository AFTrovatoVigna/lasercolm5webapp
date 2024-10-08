"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

const GoogleLoginButton = () => {
  const {data: session} = useSession()

  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "https://lasercol.vercel.app/" });
  };

useEffect(() => {
  if(session) {
    localStorage.setItem("userSession", JSON.stringify({
      name: session.user.name,
      email: session.user.email,
      token: session.accessToken,
    }));
  }else {
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
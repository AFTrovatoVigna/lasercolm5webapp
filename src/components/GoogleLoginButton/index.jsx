"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const GoogleLoginButton = () => {
  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

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
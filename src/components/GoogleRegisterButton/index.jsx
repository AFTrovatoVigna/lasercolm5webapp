"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const GoogleCustomerRegisterButton = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleGoogleRegister = () => {
    window.location.href =
        "http://localhost:3000/auth/api/google/register/customer";
    };

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");

        if (token) {
          localStorage.setItem("token", token);
          alert("Registro exitoso. Ahora puedes iniciar sesión.");
          router.push("/login");
        } else {
          console.log("No se encontró token en la respuesta JSON");
          setError("No se encontró token en la respuesta JSON");
        }
      } catch (err) {
        console.error("Error al obtener datos de autenticación:", err);
        if (error instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error desconocido");
        }
      }
    };

    if (
      typeof window !== "undefined" &&
      window.location.pathname === "/api/auth/callback/google/register/customer"
    ) {
      handleAuthCallback();
    }
  }, [router]);

  return (
    <div className="flex justify-center items-center ml-28 border border-[#f8263a] rounded-md w-full p-2 mb-5">
      <button onClick={handleGoogleRegister} className="flex">
        <Image
          src={"/assets/googleicono.png"}
          alt="google"
          width={24}
          height={24}
          className="mr-2"
        />
        <h2>Registrarse con Google</h2>
      </button>
    </div>
  );
};
export default GoogleCustomerRegisterButton;

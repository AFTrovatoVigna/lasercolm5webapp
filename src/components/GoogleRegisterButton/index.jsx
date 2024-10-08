"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const GoogleCustomerRegisterButton = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleGoogleRegister = () => {
    // Cambiado localhost a la URL del backend en producción
    window.location.href = "https://back-deploy-5y3a.onrender.com/auth/api/google/register/customer"
  };//https://back-deploy-5y3a.onrender.com

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
          setError("No se encontró token en la respuesta JSON");
        }
      } catch (err) {
        setError("Ocurrió un error desconocido");
      }
    };

    if (typeof window !== "undefined" && window.location.pathname === "/api/auth/callback/google/register/customer") {
      handleAuthCallback();
    }
  }, [router]);

  return (
    <div className="flex justify-center items-center border border-pink-700 rounded-md lg:w-[630px] hover:bg-pink-600 p-2 mb-5">
      <button onClick={handleGoogleRegister} className="flex">
        <Image src={"/assets/googleicono.png"} alt="google" width={24} height={24} className="mr-2" />
        <h2>Registrarse con Google</h2>
      </button>
    </div>
  );
};

export default GoogleCustomerRegisterButton;
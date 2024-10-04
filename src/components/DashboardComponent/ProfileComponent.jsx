"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GetUserById } from '@/helpers/auth.helper';
import Link from 'next/link';

const ProfileComponent = () => {
  const router = useRouter()
  const [userSession, setUserSession] = useState(null)
  const [userData, setUserData] = useState(null) // Para almacenar los datos del usuario obtenidos

  // Cargar la sesión de usuario desde localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userSession = localStorage.getItem("userSession")
      
      if (userSession) {
        const parsedData = JSON.parse(userSession)
        setUserSession(parsedData);
      } else {
        router.push("/login") // Redirige si no encuentra sesión
      }
    }
  }, [router])

  // Obtener los datos del usuario por su ID usando el token
  useEffect(() => {
    const fetchUserData = async () => {
      if (userSession) {
        try {
          const user = await GetUserById(userSession.id, userSession.token);
          setUserData(user); // Almacena los datos del usuario en el estado
        } catch (error) {
          console.error("Error fetching user:", error);
          router.push("/login"); // Si hay un error, redirige al login
        }
      }
    };

    fetchUserData(); // Llama a la función async
  }, [userSession, router]) 



  return (
    <div className="flex flex-col lg:flex-row lg:mt-[30px] lg:h-[550px] bg-[#f3dcdc]">
 
  <div className="w-full lg:w-1/4 p-4 lg:p-6 h-[470px] lg:h-[550px] bg-white shadow-lg rounded-lg">
    <div className="text-center">
      <video
        src="/assets/videohome1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-[150px] lg:w-[200px] mt-20 h-[150px] lg:h-[200px] object-cover mx-auto rounded-full bg-gray-300"
      />
      <h2 className="mt-4 lg:mt-4 text-lg lg:text-xl font-semibold lg:font-bold text-gray-700">
        ¡HOLA {userData?.name}!
      </h2>
    </div>
    <nav className="mt-6 lg:mt-10">
      <ul className="space-y-2 text-sm lg:text-lg">
        <li>
          <a href="#" className="flex items-center text-[#C4AC23] font-semibold hover:underline">
            <span>👤 Perfil</span>
          </a>
        </li>
        <li>
          <Link href="/dashboard/orders" className="flex items-center text-gray-700 hover:underline">
            <span>📦 Mis pedidos</span>
          </Link>
        </li>
       
        <li>
          <a href="#" className="flex items-center text-gray-700 hover:underline">
            <span>❌Cerrar sesión</span>
          </a>
        </li>
       
      </ul>
    </nav>
  </div>

 
  <div className="w-full lg:w-3/4 p-2 lg:p-6 lg:mt-20 rounded-lg lg:h-[510px]">
    <h3 className="text-xl lg:text-2xl text-start lg:ml-5 rounded-xl p-2 mb-4 font-semibold">
      MI PERFIL
    </h3>
    <div className="h-auto lg:h-[315px] p-4 lg:p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-gray-600">Nombre</h4>
          <p className="text-gray-800">{userData?.name}</p>
        </div>
        <div>
          <h4 className="text-gray-600">Teléfono</h4>
          <p className="text-gray-800">{userData?.phone}</p>
        </div>
        <div>
          <h4 className="text-gray-600">Email</h4>
          <p className="text-gray-800">{userData?.email}</p>
        </div>
        <div>
          <h4 className="text-gray-600">DNI</h4>
          <p className="text-gray-800">{userData?.Dni}</p>
        </div>
        <div>
          <h4 className="text-gray-600">Mi dirección de envío</h4>
          <p className="text-gray-800">{userData?.address}</p>
        </div>
        <div>
          <h4 className="text-gray-600">Fecha de nacimiento</h4>
          <p className="text-gray-800">{userData?.birthDate}</p>
        </div>
      </div>
      <div className="text-right">
        <button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-800 transition duration-300 ease-in-out">
          EDITAR
        </button>
      </div>
    </div>
  </div>
</div>

  )  
}

export default ProfileComponent
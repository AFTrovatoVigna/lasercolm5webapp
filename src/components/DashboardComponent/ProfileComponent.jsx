"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from "next-auth/react";

const ProfileComponent = () => {
  const { data: session } = useSession();
  const router = useRouter()

  const [userSession, setUsserSession] = useState()

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession")
      if (userData) {
        setUsserSession(JSON.parse(userData))
      } else {
        router.push("/login")
      }
    }
  }, [router])

  useEffect(() => {
    if (userSession && !userSession.token) {
      router.push("/login")
    }
  }, [userSession, router])


  return (
    <div className="flex lg:mt-[80px] lg:h-[600px] bg-[#f3dcdc] flex-col lg:flex-row">
    <div className="lg:w-1/4 lg:p-6 lg:h-[520px] bg-white shadow-lg w-full p-4 h-[400px] rounded-lg">
      <div className="text-center">
        <video
          src="/assets/videohome1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-[250px] lg:w-[250px] h-[100px] object-cover mx-auto rounded-full bg-gray-300"
        />
        <h2 className="lg:mt-4 lg:text-xl lg:font-bold text-lg font-semibold text-gray-700 mt-4">
          ¡HOLA, { session.user.name}!
        </h2>
      </div>
      <nav className="lg:mt-10 mt-6">
        <ul className="space-y-2 lg:text-lg text-sm">
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
              <span>💳 Tarjetas De Crédito</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 hover:underline">
              <span>💓 Mis Favoritos</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-[#C4AC23] hover:underline">
              <span>❌ Cerrar sesión</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  
    <div className="lg:w-3/4 lg:p-6 lg:mt-10 p-4 mt-2 bg-[#f3dcdc] rounded-lg">
      <h3 className="lg:text-2xl lg:font-bold mb-4 text-xl font-semibold">
        MI PERFIL
      </h3>
      <div className="bg-white h-[407px] p-4 lg:p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="text-gray-600">Nombre</h4>
            <p className="text-gray-800">{userSession?.id}</p>
          </div>
          <div>
            <h4 className="text-gray-600">Teléfono</h4>
            <p className="text-gray-800">{userSession?.id}</p>
          </div>
          <div>
            <h4 className="text-gray-600">Email</h4>
            <p className="text-gray-800">{userSession?.id}</p>
          </div>
          <div>
            <h4 className="text-gray-600">DNI</h4>
            <p className="text-gray-800">No especificado</p>
          </div>
          <div>
            <h4 className="text-gray-600">Mi dirección de envío</h4>
            <p className="text-gray-800">{userSession?.id}</p>
          </div>
          <div>
            <h4 className="text-gray-600">Fecha de nacimiento</h4>
            <p className="text-gray-800">No especificado</p>
          </div>
        </div>
        <div className="text-right">
          <button className="px-4 py-2 bg-[#C4AC23] text-white rounded-md hover:bg-[#A48F1B] transition duration-300 ease-in-out">
            EDITAR
          </button>
        </div>
      </div>
    </div>
  </div>
  )  
}

export default ProfileComponent
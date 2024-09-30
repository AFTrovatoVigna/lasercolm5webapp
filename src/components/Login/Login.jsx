'use client'

import { login } from '@/helpers/auth.helper'
import { validateLogin } from '@/helpers/validateLogin'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Link from 'next/link'

const Login = () => {
  const router = useRouter()
  const initialState = { email: '', password: '' }
  
  const [dataUser, setDataUser] = useState(initialState)
  const [errors, setErrors] = useState(initialState)

  const handleChange = (event) => {
    const { name, value } = event.target
    setDataUser({ ...dataUser, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      // Login the user
      const response = await login(dataUser)
      const { token, id } = response // Get token and user ID
      
      // Store token and user ID in localStorage
      localStorage.setItem("userSession", JSON.stringify({ token, id }))

      // Fetch the cart using the user ID
      const cartResponse = await fetch(`http://localhost:3000/cart/${id}`)
      const cartData = await cartResponse.json()

      // Store the cart ID in localStorage
      localStorage.setItem("cartId", cartData.id)

      // Notify the user and redirect
      Swal.fire("Te logueaste correctamente")
      router.push("/")
    } catch (error) {
      Swal.fire("No pudimos corroborar tus datos. Inténtalo nuevamente")
      console.error(error)
    }
  }

  useEffect(() => {
    const errors = validateLogin(dataUser)
    setErrors(errors)
  }, [dataUser])

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen mt-10 overflow-hidden bg-gradient-to-r from-pink-100 to-pink-200">
      <video
        src="/assets/videologinregister2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full"
      >
        Your browser does not support the video tag.
      </video>

      <form 
        onSubmit={handleSubmit} 
        className="relative lg:w-[500px] w-full max-w-md p-8 bg-pink-200 text-black rounded-lg shadow-lg"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Iniciá sesión</h2>

        <div className='mb-4'>
          <label className='block mb-2 font-semibold' htmlFor="email">Nombre de usuario</label>
          <input 
            className='w-full p-2 text-black bg-white rounded-lg border-inherit focus:outline-none focus:border-pink-900' 
            id='email-address' 
            type="text" 
            value={dataUser.email} 
            name="email" 
            placeholder="Ingresa tu email✅" 
            onChange={handleChange} 
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}
        </div>

        <div className='mb-4'>
          <label className='block mb-2 font-semibold' htmlFor="password">Contraseña</label>
          <input 
            className='w-full p-2 text-black bg-white rounded-lg border-inherit focus:outline-none focus:border-pink-900' 
            type="password" 
            value={dataUser.password} 
            name="password" 
            placeholder="Ingresa tu contraseña😎" 
            onChange={handleChange} 
          />
          {errors.password && <p className="text-red-600">{errors.password}</p>}
        </div>

        <div className=''>
          <button 
            type="submit" 
            disabled={!!errors.email} 
            className='w-full p-2 mt-4 text-white transition-colors bg-pink-500 rounded cursor-pointer hover:bg-pink-600'
          >
            Ingresar
          </button>
        </div>

        <h2 className='mt-3 text-center'>Todavía no te registraste?</h2>
        <Link href={'/register'} className='block p-2 mx-auto hover:text-pink-950 font-bold underline h-[30px]  text-center lg:text-lg  text-bold  text-pink-800 rounded-lg'>
          Registrate acá
        </Link>
      </form>
    </div>
  )
}

export default Login

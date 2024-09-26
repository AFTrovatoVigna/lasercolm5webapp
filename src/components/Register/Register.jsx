'use client'

import React, { useState } from 'react';

import { validateRegister } from '@/helpers/validateRegister';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/helpers/auth.helper';
import Swal from 'sweetalert2';

const RegisterForm = () => {
  const router = useRouter();
  const initialState = {
    name: '',
    email: '',
    password: '',
    address: '',
    phone: ''
  }

  const [dataUser, setDataUser] = useState(initialState)
  const [errors, setErrors] = useState(initialState)

  const handleChange = (event) => {
    const {name, value} = event.target;
    setDataUser({...dataUser, [name]: value})
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(dataUser)
      Swal.fire("Te registraste correctamente") 
      router.push("/login")
    } 

    catch (error) {
        Swal.fire("No pudimos registrarte") 
      throw new Error(error)
      
    }
    };

    useEffect(() => {
      const errors = validateRegister(dataUser)
      setErrors(errors)
     }, [dataUser])

    

     return (
        <div className="relative w-full h-screen p-8"> 
          <video
            src="/assets/videologinregister.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 object-cover w-full h-full"
          >
            Your browser does not support the video tag.
          </video>
      
          <div className="absolute inset-0 flex items-center justify-center">
            <form 
              onSubmit={handleSubmit} 
              className="w-full max-w-md lg:max-w-lg shadow-lg mt-40 mb-20 p-6 bg-gradient-to-r from-pink-200 via-pink-200 to-pink-200 text-black rounded-xl max-h-[90%] overflow-hidden" 
              style={{ maxHeight: '110vh' }} 
            >
              <h2 className="text-xl font-bold mb-4 text-center">Registrate acá</h2>
      
              <div className="mb-2">
                <label htmlFor="name" className="block mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={dataUser.name}
                  onChange={handleChange}
                  className="w-full p-2 h-9 bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
                  required
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
      
              <div className="mb-2">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={dataUser.email}
                  onChange={handleChange}
                  className="w-full p-2 h-9 bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
                  required
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
      
              <div className="mb-2">
                <label htmlFor="password" className="block mb-1">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={dataUser.password}
                  onChange={handleChange}
                  className="w-full p-2 h-9 bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
                  required
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>
      
              <div className="mb-2">
                <label htmlFor="address" className="block mb-1">Dirección</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={dataUser.address}
                  onChange={handleChange}
                  className="w-full p-2 h-9 bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
                  required
                />
                {errors.address && <p className="text-red-500">{errors.address}</p>}
              </div>
      
              <div className="mb-2">
                <label htmlFor="phone" className="block mb-1">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={dataUser.phone}
                  onChange={handleChange}
                  className="w-full p-2 h-9 bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
                  required
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
      
              <button 
                type="submit" 
                disabled={!!errors.email} 
                className="w-full p-2 bg-pink-500 text-black rounded-lg mt-5 font-semibold hover:bg-pink-700 transition-colors"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      );
      
      

};
export default RegisterForm;
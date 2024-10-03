'use client';

import React, { useState, useEffect } from 'react';
import { validateRegister } from '@/helpers/validateRegister';
import { useRouter } from 'next/navigation';
import { register } from '@/helpers/auth.helper';
import { CreateCart } from '@/helpers/cart.helper';
import Swal from 'sweetalert2';
import { signIn, useSession, signOut } from 'next-auth/react';
import GoogleCustomerRegisterButton from '../GoogleRegisterButton';

const RegisterForm = () => {
  const router = useRouter();
  const initialState = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    Dni: '',
    address: '',
    phone: '',
    country: '',
    city: '',
    birthDate: ''
  };

  const [dataUser, setDataUser] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataUser({ ...dataUser, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validaciones antes de enviar los datos
    const validationErrors = validateRegister(dataUser);
    setErrors(validationErrors);

    // Si hay errores, no continuar con el registro
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const newuser = await register(dataUser);
      Swal.fire("Te registraste correctamente");
      const newCart = await CreateCart(newuser.id);
      console.log ("The new cart",newCart);
      console.log ("The new user id", newuser.id);
      router.push("/login");
    } catch (error) {
      Swal.fire("No pudimos registrarte");
      throw new Error(error);
    }
  };

  useEffect(() => {
    const errors = validateRegister(dataUser);
    setErrors(errors);
  }, [dataUser]);

  return (
    <div className="relative w-full h-screen p-8">
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

      <div className="absolute inset-0 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md lg:max-w-lg shadow-xl  mt-40 mb-20 p-6 bg-pink-200 rounded-xl text-black  grid grid-cols-1 gap-4 lg:grid-cols-2"
        >
          <h2 className="text-2xl  mb-4 col-span-2 text-center">Regístrate acá</h2>

          <div className="col-span-2 lg:col-span-1">
            <label htmlFor="name" className="block  mb-1">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ingresa tu nombre" 
              value={dataUser.name}
              onChange={handleChange}
              className="w-full p-2 h-9 shadow-md bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
              required
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div className="col-span-2 lg:col-span-1">
            <label htmlFor="email" className="block  mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu email✉️" 
              value={dataUser.email}
              onChange={handleChange}
              className="w-full p-2 h-9 shadow-md bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="col-span-2 lg:col-span-1">
            <label htmlFor="password" className="block  mb-1">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña🔑" 
              value={dataUser.password}
              onChange={handleChange}
              className="w-full p-2 h-9 shadow-md bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
              required
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>

          <div className="col-span-2 lg:col-span-1">
            <label htmlFor="passwordConfirmation" className="block mb-1">Confirmar Contraseña</label>
            <input
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="Confirma tu contraseña🔑"
              value={dataUser.passwordConfirmation}
              onChange={handleChange}
              className="w-full p-2 h-9 shadow-md bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
              required
            />
            {errors.passwordConfirmation && <p className="text-red-500">{errors.passwordConfirmation}</p>}
          </div>

          <div className="col-span-2 lg:col-span-1">
            <label htmlFor="Dni" className="block mb-1">Ingresa tu DNI</label>
            <input
              type="text"
              id="Dni"
              name="Dni"
              placeholder="Ingresa tu DNI" 
              value={dataUser.Dni}
              onChange={handleChange}
              className="w-full p-2 h-9 shadow-md bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
              required
            />
            {errors.Dni && <p className="text-red-500">{errors.Dni}</p>}
          </div>

          <div className="col-span-2 lg:col-span-1">
            <label htmlFor="address" className="block mb-1">Dirección</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Ingresa tu dirección" 
              value={dataUser.address}
              onChange={handleChange}
              className="w-full p-2 h-9 shadow-md bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
              required
            />
            {errors.address && <p className="text-red-500">{errors.address}</p>}
          </div>

         

          <div className="col-span-2 lg:col-span-1">
            <label htmlFor="phone" className="block mb-1">Telefono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Ingresa tu telefono" 
              value={dataUser.phone}
              onChange={handleChange}
              className="w-full p-2 h-9 shadow-md bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
              required
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>


          <div className="col-span-2 lg:col-span-1">
            <label htmlFor="country" className="block  mb-1">País de residencia</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Ingresa tu país" 
              value={dataUser.country}
              onChange={handleChange}
              className="w-full p-2 h-9 shadow-md bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
              required
            />
            {errors.country && <p className="text-red-500">{errors.country}</p>}
          </div>

          <div className="col-span-2 lg:col-span-1">
            <label htmlFor="city" className="block  mb-1">Ciudad</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Ingresa tu ciudad🏠" 
              value={dataUser.city}
              onChange={handleChange}
              className="w-full p-2 h-9 shadow-md bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
              required
            />
            {errors.city && <p className="text-red-500">{errors.city}</p>}
          </div>

          <div className="col-span-2 lg:col-span-1">
            <label htmlFor="birthDate" className=" block mb-1">Fecha de nacimiento</label>
            <input
              type="date" 
              id="birthDate"
              name="birthDate"
              placeholder="Ingresa tu fecha de nacimiento" 
              value={dataUser.birthDate}
              onChange={handleChange}
              className="w-full p-2 h-9 shadow-md bg-white border text-black rounded-lg focus:outline-none focus:border-pink-900"
              required
            />
            {errors.birthDate && <p className="text-red-500">{errors.birthDate}</p>}
          </div>

          <button
            type="submit"
            className="col-span-2 p-2 h-12 mt-4 text-xl font-bold text-white bg-pink-600 rounded-lg shadow-md hover:bg-pink-500 focus:outline-none"
          >
            Registrarse
          </button>
          

  <GoogleCustomerRegisterButton/>
  


         
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

/* <button
    onClick={() => signIn('google', { callbackUrl: '/' })}
    className="bg-pink-200 p-3 flex items-center"
  >
    <img src="/assets/googleicono.png" alt="Google Icon" className='bg-pink-400 p-1 rounded-[50%] ring-pink-800'/>
    
  </button>*/
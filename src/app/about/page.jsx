import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MapGoogle from '@/components/MapGoogle/MapGoogle'

const About = () => {
  return (
    <div className="bg-[url('/assets/fondologinregister1.png')]  bg-cover bg-center min-h-screen py-10 lg:mt-20">
      <div className="max-w-4xl mx-auto bg-pink-100 shadow-lg rounded-lg p-6">
        <header className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl mt-14 lg:mt-6 lg:text-4xl lg:mb-8 font-bold text-pink-600">
            Bienvenidos a LaserCol
          </h1>
          <p className="text-gray-700 lg:text-xl">
            Un emprendimiento que da lo mejor para que cada detalle quede a la perfección
          </p>
        </header>

      

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 items-center">
  <div className="flex justify-center">
    <Image
      src="/assets/p21.jpg"
      alt="Working on products"
      width={300}
      height={200}
      className="rounded-lg lg:w-[370px] lg:h-[250px] shadow-md"
    />
  </div>
  <div className="text-gray-700 text-lg lg:text-xl px-4">
    <p className="text-justify leading-relaxed">
      Todo comenzó como un proyecto en pareja al ver la necesidad de personas mayores, como mi abuela, que debían salir con algo que las identificara por la inseguridad.
    </p>
  </div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 items-center">
  <div className="text-gray-700 text-lg lg:text-xl px-4">
    <p className="text-justify leading-relaxed lg:mt-10">
      Pero al día de hoy vamos creciendo como algo más, cada vez teniendo más productos a ofrecer con ese toque de personalización que nos hace únicos.
    </p>
  </div>
  <div className="flex justify-center items-center">
    <div className="relative w-full h-48 bg-gray-300 rounded-lg shadow-md">
      <video
        className="absolute inset-0 w-full h-full lg:h-[250px] object-cover rounded-lg"
        src="/assets/videoabout.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  </div>
</section>


        <div className='flex justify-self-center lg:w-[500px] lg:ml-44 '>
          <Link href="/products" className="bg-pink-500 lg:w-[500px] text-center lg:mt-14  text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300">
            Compra nuestros productos acá
          </Link>
          </div>
         <h2 className='text-center text-gray-700 lg:text-3xl mt-14 lg:mb-7'>¿Dónde encontrarnos?</h2>
           
         <div className="flex flex-col lg:flex-row lg:justify-center items-center space-y-6 lg:space-y-0 lg:space-x-10 p-4">
         <MapGoogle />
  
  <div className="text-black text-center lg:text-center space-y-4 px-4 lg:max-w-md">
    <p className="text-lg ">
      📍 Estamos ubicados en 
      <br />
      Calle 19 norte #12-49 
      <br />
      Armenia Quindío, Colombia
    </p>
    <p className="text-lg ">
      📞 Teléfono de contacto 
      <br />
      +573164437212
    </p>
  </div>
</div>

<div/>
</div>

      </div>
 
  )
}

export default About
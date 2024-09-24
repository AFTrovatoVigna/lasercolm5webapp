/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="flex justify-center mt-4 mb-4">
        <img src="/assets/lasercol-logo.png" className='lg:w-[150px] lg:h-[50px]' alt="LaserCol Logo" />
      </div>
      <nav className="px-8 py-4 bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100">
      <div className="flex items-center justify-between">
        <div className="flex space-x-8">
          <Link href="/" className="text-lg text-black hover:text-gray-600">Home</Link>
          <Link href="/products" className="text-lg text-black hover:text-gray-600">Productos</Link>
          <Link href="/about" className="text-lg text-black hover:text-gray-600">Sobre nosotros</Link>
          <Link href="/designs" className="text-lg text-black hover:text-gray-600">Diseños</Link>
        </div>
        <div className="flex items-center px-4 py-2 space-x-2 bg-gray-100 rounded-full">
          
          <input 
            type="text" 
            placeholder="Busca tus productos favoritos" 
            className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-[250px]" 
          />
          
        </div>
        <div className="flex space-x-4">
          <Link href="/dashboarduser">
            <img src="/assets/iconouser.png" className='mb-[2px]' alt="icono carrito" />
          </Link>
          <Link href="/cart">
            <img src="/assets/iconocarrito.png" alt="icono usuario" />
          </Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
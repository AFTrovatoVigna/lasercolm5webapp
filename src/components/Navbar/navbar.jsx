/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="flex justify-center mb-4 mt-4">
        <img src="/assets/lasercol-logo.png" className='lg:w-[150px] lg:h-[50px]' alt="LaserCol Logo" />
      </div>
      <nav className="bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100 py-4 px-8">
      <div className="flex justify-between items-center">
        <div className="flex space-x-8">
          <Link href="/" className="text-black hover:text-gray-600 text-lg">Home</Link>
          <Link href="/products" className="text-black hover:text-gray-600 text-lg">Productos</Link>
          <Link href="/about" className="text-black hover:text-gray-600 text-lg">Sobre nosotros</Link>
          <Link href="/designs" className="text-black hover:text-gray-600 text-lg">Diseños</Link>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
          
          <input 
            type="text" 
            placeholder="Busca tus productos favoritos" 
            className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-[250px]" 
          />
          
        </div>
        <div className="flex space-x-4">
          <Link href="/midashboard">
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
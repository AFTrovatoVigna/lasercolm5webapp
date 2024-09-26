
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
     <nav className="fixed top-0 left-0 w-full px-8 py-4 bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100 shadow-md z-50">

        <div className="flex items-center justify-between">
          
       
          <div className="flex items-center space-x-6">
            <img src="/assets/lasercol-logo.png" className='w-[150px] h-[50px]' alt="LaserCol Logo" />
          </div>

          <div className="flex space-x-10 ml-36">
            <Link href="/" className="text-lg font-medium text-black hover:text-pink-600 transition duration-300">Home</Link>
            <Link href="/products" className="text-lg font-medium text-black hover:text-pink-600 transition duration-300">Productos</Link>
            <Link href="/about" className="text-lg font-medium text-black hover:text-pink-600 transition duration-300">Sobre nosotros</Link>
            <Link href="/designs" className="text-lg font-medium text-black hover:text-pink-600 transition duration-300">Diseños</Link>
          </div>

            <div className="flex items-center space-x-4">
            <div className="flex items-center px-4 py-2 space-x-2 bg-gray-100 rounded-full shadow-sm">
              <input 
                type="text" 
                placeholder="Buscar productos" 
                className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-[200px]" 
              />
            </div>

       
            <div className="flex space-x-4">
              <Link href="/dashboarduser">
                <img src="/assets/iconouser.png" className='w-6 h-6' alt="icono usuario" />
              </Link>
              <Link href="/cart">
                <img src="/assets/iconocarrito.png" className='w-6 h-6' alt="icono carrito" />
              </Link>
            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
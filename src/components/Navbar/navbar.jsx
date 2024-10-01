/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userSession = localStorage.getItem('userSession');
    
    if (userSession) {
      try {
        const sessionData = JSON.parse(userSession);
        const token = sessionData?.token;

        if (token) {
          setIsLoggedIn(true); 
        } else {
          setIsLoggedIn(false); 
        }
      } catch (error) {
        console.error("Error parsing userSession:", error);
        setIsLoggedIn(false); 
      }
    } else {
      setIsLoggedIn(false); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userSession');
    localStorage.removeItem('cartId');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 z-50 w-full px-8 py-4 shadow-md bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <img src="/assets/lasercol-logo.png" className="w-[150px] h-[50px]" alt="LaserCol Logo" />
          </div>

          <div className="flex space-x-10 ml-36">
            <Link href="/" className="text-lg font-medium text-black transition duration-300 hover:text-pink-600">Home</Link>
            <Link href="/products" className="text-lg font-medium text-black transition duration-300 hover:text-pink-600">Productos</Link>
            <Link href="/about" className="text-lg font-medium text-black transition duration-300 hover:text-pink-600">Sobre nosotros</Link>
            <Link href="/designs" className="text-lg font-medium text-black transition duration-300 hover:text-pink-600">Diseños</Link>
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex space-x-4">
                <Link href="/dashboarduser">
                  <img src="/assets/iconouser.png" className="w-6 h-6" alt="icono usuario" />
                </Link>
                <Link href="/cart">
                  <img src="/assets/iconocarrito.png" className="w-6 h-6" alt="icono carrito" />
                </Link>
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="text-lg font-medium text-black transition duration-300 hover:text-pink-600"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link href="/login" className="text-lg font-medium text-black transition duration-300 hover:text-pink-600">
                  Iniciar Sesión
                </Link>
                <Link href="/register" className="text-lg font-medium text-black transition duration-300 hover:text-pink-600">
                  Regístrate
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <div
        className="flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[60px]"
        style={{
          background: 'linear-gradient(to right, #F6C0DF70 40%, #FADEB080 50%)',
        }}
      >
        
        <footer className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-6 bg-gradient-to-r from-pink-100 to-yellow-100 w-full">

  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
    <Link href="https://www.instagram.com/lasercol_sas/">
      <img
        className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px]"
        src="/assets/instagram.png"
        alt="Instagram"
      />
    </Link>
    <Link href="https://wa.me/573164437212">
      <img
        className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px]"
        src="/assets/whatsapp.png"
        alt="WhatsApp"
      />
    </Link>
  </div>

  
  <div className="text-center lg:text-right text-[12px] lg:text-[14px]">
    <p>
      🛩️ Envíos a todo el país. Armenia Quindío, Colombia.
      <br />
      Copyright © 2024, Lasercol. Todos los derechos reservados.
      <br />
    
    </p>
  </div>
</footer>

      </div>
    </footer>
  );
}

export default Footer;


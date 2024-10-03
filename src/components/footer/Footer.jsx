import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <div
        className="flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[70px]"
        style={{
          background: 'linear-gradient(to right, #F6C0DF70 40%, #FADEB080 50%)',
        }}
      >
        
        <div className="flex flex-col items-start justify-start p-2 lg:p-0 w-full lg:w-auto">
          <Link href="https://www.instagram.com/lasercol_sas/">
            <div className="flex items-center space-x-4">
              <img
                className="w-[20px] lg:w-[25px] lg:h-[25px] lg:ml-1"
                src="/assets/instagram.png"
                alt="instagram"
              />
              <img
                className="w-[20px] lg:w-[25px] lg:h-[25px]"
                src="/assets/whatsapp.png"
                alt="whatsapp"
              />
            </div>
          </Link>
         
        </div>

      
        <div className="flex flex-col items-end justify-end p-2 lg:p-0 w-full lg:w-auto">
          <div className="flex text-[12px] justify-center items-center lg:ml-10">
            <p>
              Copyright © 2025, Lasercol. Todos los derechos reservados. Consulte
              nuestras condiciones de uso y el aviso de privacidad.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;


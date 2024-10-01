import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <div
        className="flex justify-between items-center h-[40px] lg:h-[70px]"
        style={{
          background: 'linear-gradient(to right, #F6C0DF70 40%, #FADEB080 50%)',
        }}
      >
        <Link href="https://www.instagram.com/lasercol_sas/">
          <div className="flex items-center space-x-4">
            <img
              className="w-[30px] lg:w-[25px] lg:h-[25px] lg:ml-1"
              src="/assets/instagram.png"
              alt="instagram"
            />
            <img
              className="w-[30px] lg:w-[25px] lg:h-[25px]"
              src="/assets/whatsapp.png"
              alt="whatsapp"
            />
          </div>
        </Link>

        <div className="flex text-[12px] lg:justify-center lg:items-center lg:ml-10">
          <p>
            Copyright © 2025, Lasercol . Todos los derechos reservados. Consulte
            nuestras condiciones de uso y el aviso de privacidad.
          </p>
        </div>

        <div>
          <p className="text-[12px]">Política de privacidad</p>
        </div>

        <div className="hidden lg:flex lg:flex-row lg:items-end lg:mr-2">
          <img
            className="w-[20px] lg:h-[20px] lg:ml-4"
            src="/assets/visa.png"
            alt="visa"
          />
          <img
            className="w-[20px] lg:h-[20px] lg:ml-4"
            src="/assets/mastercard.png"
            alt="mastercard"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer

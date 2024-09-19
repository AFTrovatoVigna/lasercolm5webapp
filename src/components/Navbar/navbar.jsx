/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav>
      <div className="flex justify-center">
        <img  src="/assets/lasercol-logo.png" alt="LaserCol Logo" />
      </div>
      <ul className="flex justify-evenly pt-2 pb-2 bg-[#fce6f2]">
          <li className="font-sans text-[24px] font-normal leading-[30.17px] text-left">
            <Link href="/">Home</Link></li>
          <li className="font-sans text-[24px] font-normal leading-[30.17px] text-left">
            <Link href="/products">Productos</Link></li>
          <li className="font-sans text-[24px] font-normal leading-[30.17px] text-left">
            <Link href="/about">Sobre Nosotros</Link></li>
          <li className="font-sans text-[24px] font-normal leading-[30.17px] text-left">
            <Link href="/desings">Diseños</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
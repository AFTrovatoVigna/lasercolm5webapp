'use client'

import React from 'react';
import Image from 'next/image'; 

const WhatsAppButton = () => {
  const phoneNumber = '573164437212'; 
  const message = 'Hola, quiero hacer una consulta acerca de sus productos:'; 

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 rounded-full p-4 shadow-lg transition-transform duration-200 ease-in-out transform hover:translate-y-[-4px] hover:bg-green-600 hover:shadow-xl" 
      aria-label="Chat en WhatsApp"
    >
     
      <Image
        src="/assets/whatsapp.png" 
        alt="WhatsApp"
        width={40} 
        height={40} 
        className="rounded-full" 
      />
    </a>
  );
};

export default WhatsAppButton;

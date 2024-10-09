'use client'
import React from 'react'

import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';


export default function Disenos() {
  return (
    <div className="bg-gray-50 py-16 lg:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Nuestros Servicios de Grabado Láser</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Ofrecemos una amplia variedad de servicios de grabado láser para diferentes materiales.</p>
          <p className=" text-lg text-gray-600 text-center">Descubre las opciones que mejor se adapten a tus necesidades.</p>
 
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
     
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-pink-600 text-white">
             <img src="/assets/corte.png" className='lg:w-[40px] lg:h-[40px]' alt="" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">Corte Láser</h3>
            <p className="mt-4 text-base text-gray-600">
              Utilizamos tecnología de punta para realizar cortes precisos en diversos materiales como madera, acrílico, y más.
            </p>
          </div>

    
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-pink-600 text-white">
            <img src="/assets/grabado.png" className='lg:w-[40px] lg:h-[40px]' alt="" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">Grabado Láser</h3>
            <p className="mt-4 text-base text-gray-600">
              Personaliza productos como placas, trofeos y artículos promocionales con detalles finos y precisos.
            </p>
          </div>

     
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-pink-600 text-white">
            <img src="/assets/marcado.png" className='lg:w-[40px] lg:h-[40px]' alt="" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">Marcado Láser</h3>
            <p className="mt-4 text-base text-gray-600">
              Ideal para realizar marcas duraderas en materiales metálicos y plásticos de alta calidad.
            </p>
          </div>
        </div>




    
        <div className="mt-16 lg:mt-20 lg:mb-20">
  <h2 className="text-2xl font-bold text-gray-900 text-center ">Materiales Compatibles</h2>
  <p className="mt-4 text-lg text-gray-600 text-center">
    Trabajamos con una amplia variedad de materiales para cumplir con los requisitos específicos de nuestros clientes.
  </p>

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
    <div
      className="bg-white p-6 rounded-lg shadow-lg text-center"
      style={{
        backgroundImage: "url('assets/madera2.png')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 9
      }}
    >
      <h3 className="mt-4 text-xl font-bold text-black">Madera</h3>
      <p className="mt-2 text-base text-black">Corte y grabado en todo tipo de madera.</p>
    </div>
    
    <div
      className="bg-white p-6 rounded-lg shadow-lg text-center"
      style={{
        backgroundImage: "url('/assets/acrilicoo.png')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 9
      }}
    >
      <h3 className="mt-4 text-xl font-bold text-black">Acrílico</h3>
      <p className="mt-2 text-base text-black">Material ideal para cortes precisos y detallados.</p>
    </div>
    
    <div
      className="bg-white p-6 rounded-lg shadow-lg text-center"
      style={{
        backgroundImage: "url('/assets/metall.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 10
      }}
    >
      <h3 className="mt-4 text-xl font-bold text-black">Metal</h3>
      <p className="mt-2 text-base text-black">Marcado y grabado en metales de alta resistencia.</p>
    </div>
    
    <div
      className="bg-white p-6 rounded-lg shadow-lg text-center"
      style={{
        backgroundImage: "url('/assets/cueroo.png')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 9
      }}
    >
      <h3 className="mt-4 text-xl font-bold text-black">Cuero</h3>
      <p className="mt-2 text-base text-black">Grabado detallado en cuero.</p>
    </div>
    
    <div
      className="bg-white p-6 rounded-lg shadow-lg text-center"
      style={{
        backgroundImage: "url('/assets/aceroo.png')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 9
      }}
    >
      <h3 className="mt-4 text-xl font-bold text-black">Acero</h3>
      <p className="mt-2 text-base text-black">Grabado detallado en superficies de acero.</p>
    </div>
  </div>
</div>

        
      </div>



     
        <div className="bg-gray-50 py-16 ">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
        {/* Imagen */}
        <div className="flex justify-center lg:w-1/2 mb-6 lg:mb-0">
          <img
            src=" /assets/madera1.jpeg" 
            alt="Madera"
            className="lg:h-[400px] lg:w-[500px] max-w-md rounded-lg shadow-md"
          />
        </div>

     
        <div className="lg:w-1/2 lg:ml-6">
          <h3 className="text-3xl font-bold text-gray-900">Madera</h3>
          <p className="mt-4 text-lg text-gray-600">
          La madera es un material versátil y natural que se puede cortar y grabar con láser, logrando acabados precisos y personalizados. Es ideal para la creación de productos decorativos, piezas de artesanía y muebles, brindando calidez y estética a cualquier diseño.
          </p>

      
          <div className="mt-8 flex justify-start">
            <div className="flex flex-col items-center">
              <img src=" /assets/corte.png" alt="Corte" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Corte</span>
            </div>
            <div className="flex flex-col items-center">
              <img src=" /assets/grabado.png" alt="Grabado" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Grabado</span>
            </div>
            <div className="flex flex-col items-center">
              <img src=" /assets/marcado.png" alt="Marcado" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Marcado</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 py-16 ">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
 
        <div className="flex justify-center lg:w-1/2 mb-6 lg:mb-0">
          <img
            src=" /assets/acrilico1.jpeg" 
            alt="Acrilico"
            className="lg:h-[400px] lg:w-[500px] max-w-md rounded-lg shadow-md"
          />
        </div>

       
        <div className="lg:w-1/2 lg:ml-6">
          <h3 className="text-3xl font-bold text-gray-900">Acrílico</h3>
          <p className="mt-4 text-lg text-gray-600">
          El acrílico es un material plástico ligero y resistente que se presenta en una variedad de colores y acabados. Su capacidad para ser cortado y grabado con láser permite crear objetos decorativos, señalización y presentaciones creativas, manteniendo una excelente claridad y brillo.
          </p>

    
          <div className="mt-8 flex justify-start">
            <div className="flex flex-col items-center">
              <img src=" /assets/corte.png" alt="Corte" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Corte</span>
            </div>
            <div className="flex flex-col items-center">
              <img src=" /assets/grabado.png" alt="Grabado" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Grabado</span>
            </div>
            <div className="flex flex-col items-center">
              <img src=" /assets/marcado.png" alt="Marcado" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Marcado</span>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div className="bg-gray-50 py-16 ">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
    
        <div className="flex justify-center lg:w-1/2 mb-6 lg:mb-0">
          <img
            src=" /assets/metal1.jpeg"
            alt="Metal"
            className="lg:h-[400px] lg:w-[500px] max-w-md rounded-lg shadow-md"
          />
        </div>

      
        <div className="lg:w-1/2 lg:ml-6">
          <h3 className="text-3xl font-bold text-gray-900">Metal</h3>
          <p className="mt-4 text-lg text-gray-600">
          El metal es un material que combina resistencia y elegancia, perfecto para aplicaciones que requieren durabilidad. El grabado láser en metal permiten la creación de piezas personalizadas, desde trofeos hasta componentes industriales, garantizando precisión en cada detalle.
          </p>

        
          <div className="mt-8 flex justify-start">
            <div className="flex flex-col items-center">
              <img src=" /assets/corte.png" alt="Corte" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Corte</span>
            </div>
            <div className="flex flex-col items-center">
              <img src=" /assets/grabado.png" alt="Grabado" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Grabado</span>
            </div>
            <div className="flex flex-col items-center">
              <img src=" /assets/marcado.png" alt="Marcado" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Marcado</span>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div className="bg-gray-50 py-16 ">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
      
        <div className="flex justify-center lg:w-1/2 mb-6 lg:mb-0">
          <img
            src=" /assets/cuero1.jpg" 
            alt="Cuero"
            className="lg:h-[400px] lg:w-[500px] max-w-md rounded-lg shadow-md"
          />
        </div>

       
        <div className="lg:w-1/2 lg:ml-6">
          <h3 className="text-3xl font-bold text-gray-900">Cuero</h3>
          <p className="mt-4 text-lg text-gray-600">
          El cuero es un material noble que ofrece un aspecto sofisticado y una textura única. Puede ser cortado y grabado con láser para personalizar productos como carteras, cinturones y accesorios, brindando un toque distintivo y artesanal a cada pieza.
          </p>

    
          <div className="mt-8 flex justify-start">
            <div className="flex flex-col items-center">
              <img src=" /assets/corte.png" alt="Corte" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Corte</span>
            </div>
            <div className="flex flex-col items-center">
              <img src=" /assets/grabado.png" alt="Grabado" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Grabado</span>
            </div>
            <div className="flex flex-col items-center">
              <img src=" /assets/marcado.png" alt="Marcado" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Marcado</span>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div className="bg-gray-50 py-5 ">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
        {/* Imagen */}
        <div className="flex justify-center lg:w-1/2 mb-6 lg:mb-0">
          <img
            src=" /assets/acero1.jpg" 
            alt="Acero"
            className="lg:h-[400px] lg:w-[500px] max-w-md rounded-lg shadow-md"
          />
        </div>

       
        <div className="lg:w-1/2 lg:ml-6">
          <h3 className="text-3xl font-bold text-gray-900">Acero</h3>
          <p className="mt-4 text-lg text-gray-600">
            La cartulina convencional puede ser cortada a láser, con mucho detalle y precisión. A diferencia de otros cartones, en este caso disponemos de tecnologías que permiten hacer troquelados muy precisos y rápidos, imposibles de realizar con un plóter de corte mediante cuchillas.
          </p>

      
          <div className="mt-8 flex justify-start">
            <div className="flex flex-col items-center">
              <img src=" /assets/corte.png" alt="Corte" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Corte</span>
            </div>
            <div className="flex flex-col items-center">
              <img src=" /assets/grabado.png" alt="Grabado" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Grabado</span>
            </div>
            <div className="flex flex-col items-center">
              <img src=" /assets/marcado.png" alt="Marcado" className="lg:h-[80px] lg:w-[100px]" />
              <span className="mt-2 text-sm font-medium text-gray-700">Marcado</span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <WhatsAppButton />

    </div>
  

    

   

    
  );
}

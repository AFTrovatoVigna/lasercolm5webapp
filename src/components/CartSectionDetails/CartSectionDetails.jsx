import React from 'react'
import Link from 'next/link'


const CartSectionDetails = ({ products }) => {
    return (
        <>
         
          {products && products.length > 0 && (
            <>
       
              <div className="bg-white p-4 md:p-6  rounded-lg shadow-lg lg:mt-auto mb-6 w-full sm:w-[100%] mx-auto">
                <h2 className="text-lg font-bold mb-4 h-[30px] text-center sm:text-left">ENTREGA</h2>
                <p className="text-sm md:text-base mb-3 text-center sm:text-left">
                  Entregar a mi domicilio <a href="#" className="text-pink-500 underline">Necochea</a>
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs sm:text-sm">⚠️IMPORTANTE: Tiempo de preparación y envío entre 7 a 10 días hábiles</span>
                  </div>
                  <span className="font-bold text-gray-800 text-xs sm:text-sm">Gratis</span>
                </div>
              </div>
    
              <div className="bg-pink-200 p-4 md:p-6 rounded-lg shadow-lg lg:h-[270px] mb-10 w-full sm:w-[100%] mx-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-md text-lg ">Subtotal</h2>
                  <span className="text-md text-lg font-semibold">$100000</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-md text-lg ">Envío</h2>
                  <span className="text-md text-lg font-semibold">Gratis</span>
                </div>
                <div className="flex justify-between items-center text-lg  mb-4">
                  <h2>Total</h2>
                  <span className='font-semibold'>$100000</span>
                </div>
    
                <Link href={'/products'} className="items-center text-center lg:ml-72 mt-10 space-x-2 text-pink-700 mb-10 text-[13px]  sm:text-lg font-bold">
                  Psst psst, no te olvidas nada? Agrega más productos haciendo click <b>aca</b>😉
                </Link>
    
                <button
                  className="w-full py-3 mt-5 text-white bg-pink-500 hover:bg-pink-700 rounded-lg text-center"
                >
                  FINALIZAR COMPRA
                </button>
              </div>
            </>
          )}
        </>
      );
}

export default CartSectionDetails
       
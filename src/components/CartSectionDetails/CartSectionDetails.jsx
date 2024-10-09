import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import CheckoutMercadoPago from '../mercadoPago/mercadoPago';

const CartSectionDetails = ({ products }) => {
  const APIURL = process.env.NEXT_PUBLIC_API_URL
  const [id, setId] = useState("")

  // Function to calculate the total price of products
  const calculateTotalPrice = () => {
    if (!Array.isArray(products)) return 0; // Ensure products is an array
    let total = 0; // Initialize total to 0
    // Iterate over each product and add the value to total
    products.forEach(product => {
      if (product.valor) {
        total += product.valor; // Add product.valor to total if it exists
      }
    });

    return total; // Return the total price
  };

  useEffect(() => {
    
    if (products) {
      fetch(`${APIURL}/mercado-pago/crear-preferencia`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: products.map(product => {
            return (
              {
                "titulo": product.nombre,
                "cantidad": 1,
                "precio": product.valor,
                "image": product.imgUrl

              }
            )
          }
        ),
        email:JSON.parse(localStorage.getItem("userSession")).email
        })
      })
        .then(res => res.json())
        .then(res => {
          setId(res.id)
        })
    }
  }, [products])

  const totalPrice = calculateTotalPrice(); // Calculate total price

  return (
    <>

      {id && products && products.length > 0 && (
        <>

          <div className="bg-white p-4 md:p-6  rounded-lg shadow-lg lg:mt-auto mb-6 w-full sm:w-[100%] mx-auto">
            <h2 className="text-lg font-bold mb-4 h-[30px] text-center sm:text-left">ENTREGA</h2>
            <p className="mb-3 text-sm text-center md:text-base sm:text-left">
              Entregar a mi domicilio <a href="#" className="text-pink-500 underline">Necochea</a>
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm">⚠️IMPORTANTE: Tiempo de preparación y envío entre 7 a 10 días hábiles</span>
              </div>
              <span className="text-xs font-bold text-gray-800 sm:text-sm">Gratis</span>
            </div>
          </div>

          <div className="bg-pink-200 p-4 md:p-6 rounded-lg shadow-lg lg:h-[270px] mb-10 w-full sm:w-[100%] mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg text-md ">Subtotal</h2>
              <span className="text-lg font-semibold text-md">${totalPrice.toLocaleString('en-US')}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg text-md ">Envío</h2>
              <span className="text-lg font-semibold text-md">Gratis</span>
            </div>
            <div className="flex items-center justify-between mb-4 text-lg">
              <h2>Total</h2>
              <span className='font-semibold'>$100000</span>
            </div>

            <Link href={'/products'} className="items-center text-center lg:ml-72 mt-10 space-x-2 text-pink-700 mb-10 text-[13px]  sm:text-lg font-bold">
              Psst psst, no te olvidas nada? Agrega más productos haciendo click <b>aca</b>😉
            </Link>

            {/* <button
                  className="w-full py-3 mt-5 text-center text-white bg-pink-500 rounded-lg hover:bg-pink-700"
                >
                  FINALIZAR COMPRA
                </button> */}
            <CheckoutMercadoPago pagoId={id} />
          </div>
        </>
      )}
    </>
  );
}

export default CartSectionDetails

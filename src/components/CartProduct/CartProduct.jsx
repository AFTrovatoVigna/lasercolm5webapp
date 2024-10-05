/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/navigation';
import { DeleteProductFromCart } from '@/helpers/cart.helper';
import Link from 'next/link';
import CartSectionDetails from '../CartSectionDetails/CartSectionDetails';

const CartProduct = ({ product, cartId, router, onDelete }) => { // Accept router as a prop
  const handleDelete = async () => {
    await onDelete(cartId, product.id);
  };
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-[100px_auto_auto_auto_auto] gap-4 items-center p-4 bg-white shadow-lg rounded-xl border border-gray-300'>
      {/* Primera columna: Imagen */}
        <div className='flex justify-center sm:justify-start'>
          <img
            className='object-cover w-[80px] sm:w-[100px] h-auto rounded-lg shadow-sm'
            src={product.imgUrl}
            alt={product.nombre}
          />
        </div>

  {/* Segunda columna: Detalles del producto */}
  <div className='space-y-1 text-center sm:text-left'>
    <h4 className='text-base sm:text-lg font-semibold text-gray-900'>{product.nombre}</h4>
    <p className='text-xs sm:text-sm text-gray-600'>Color: {product.color}</p>
    <p className='text-xs sm:text-sm text-gray-600'>Material: {product.material}</p>
    <p className='text-xs sm:text-sm text-gray-600'>Medidas: {product.medidas}</p>
  </div>

  {/* Tercera columna: Botón de cantidad */}
  <div className='flex items-center justify-center mt-2 sm:mt-0'>
    <button
      className='px-2 py-1 bg-pink-500 text-white font-semibold rounded-l-full focus:outline-none'
    >
      -
    </button>
    <span className='px-3 py-1 bg-pink-500 text-white font-semibold'>1</span>
    <button
      className='px-2 py-1 bg-pink-500 text-white font-semibold rounded-r-full focus:outline-none'
    >
      +
    </button>
  </div>

  {/* Cuarta columna: Precio */}
  <div className='text-center sm:text-right sm:mt-0'>
    <p className=' text-xl sm:text-lg font-bold text-black'>${product.valor}</p>
  </div>

  {/* Quinta columna: Botón eliminar */}
  <button
    className='flex items-center justify-center px-3 py-1 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-full shadow-sm transition-all duration-200 ease-in-out  sm:mt-0 justify-self-center sm:justify-self-end'
    onClick={handleDelete}
  >
    <svg className='w-4 h-4 mr-1' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
    </svg>
    Eliminar
  </button>
</div>





 <div>
  <CartSectionDetails/>
 </div>
      </>
  
  
  );
}

export default CartProduct;

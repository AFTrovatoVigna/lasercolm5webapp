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


  <div className='space-y-1 text-center sm:text-left'>
    <h4 className='text-base font-semibold text-gray-900 sm:text-lg'>{product.nombre}</h4>
    <p className='text-xs text-gray-600 sm:text-sm'>Color: {product.color}</p>
    <p className='text-xs text-gray-600 sm:text-sm'>Material: {product.material}</p>
    <p className='text-xs text-gray-600 sm:text-sm'>Medidas: {product.medidas}</p>
  </div>

 
  <div className='flex items-center justify-center mt-2 sm:mt-0'>
    <button
      className='px-2 py-1 font-semibold text-white bg-pink-500 rounded-l-full focus:outline-none'
    >
      -
    </button>
    <span className='px-3 py-1 font-semibold text-white bg-pink-500'>1</span>
    <button
      className='px-2 py-1 font-semibold text-white bg-pink-500 rounded-r-full focus:outline-none'
    >
      +
    </button>
  </div>

  <div className='text-center sm:text-right sm:mt-0'>
    <p className='text-xl font-bold text-black sm:text-lg'>${product.valor}</p>
  </div>


  <button
    className='flex items-center justify-center px-3 py-1 text-xs font-semibold text-white transition-all duration-200 ease-in-out bg-red-600 rounded-full shadow-sm hover:bg-red-700 sm:mt-0 justify-self-center sm:justify-self-end'
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

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/navigation';
import { DeleteProductFromCart } from '@/helpers/cart.helper';

const CartProduct = ({ product, cartId }) => {
  const router = useRouter(); // Get the router instance

  const handleDelete = async () => {
    await DeleteProductFromCart(cartId, product.id, router); // Call the delete function
  };

  return (
    <div className='grid grid-cols-[30%_40%_10%_10%] gap-4 items-center p-4 bg-gray-100'>
      {/* First column: Image */}
      <img
        className='object-cover max-w-[100px] h-auto'
        src={product.imgUrl}
        alt={product.name}
      />

      {/* Second column: Product details */}
      <div className='space-y-2'>
        <h4 className='text-lg font-semibold'>{product.nombre}</h4>
        <p className='text-sm text-gray-500'>Color: {product.color}</p>
        <p className='text-sm text-gray-500'>Material: {product.material}</p>
        <p className='text-sm text-gray-500'>Medidas: {product.medidas}</p>
      </div>
      <p className='text-sm font-bold text-green-600'>Price: ${product.valor}</p>

      {/* Delete button */}
      <button
        className='px-3 py-1 text-white bg-red-500 rounded'
        onClick={handleDelete}
      >
        Eliminar Producto
      </button>
    </div>
  );
}

export default CartProduct;

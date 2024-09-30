import React from 'react';

const CartProduct = ({ product }) => {
  return (
    <div className='grid grid-cols-[30%_60%_10%] gap-4 items-center p-4 bg-gray-100'>
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
    </div>
  );
}

export default CartProduct;

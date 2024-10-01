"use client"; 

import { useRouter } from 'next/navigation';
import { AddtoCart } from '@/helpers/cart.helper';

const AddToCartButton = ({ productId }) => {
  const router = useRouter(); // Usar el hook aquí

  const handleAddToCart = async () => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      alert('No se encontró un cartId en el localStorage.');
      return;
    }

    // Mostrar confirmación antes de agregar al carrito
    const confirmAddToCart = window.confirm("¿Quiere añadir el producto al carrito de compras?");
    if (confirmAddToCart) {
      try {
        await AddtoCart(cartId, productId, router); // Pasar router como parámetro
        alert('Producto agregado al carrito exitosamente.');
      } catch (error) {
        console.error('Error al agregar al carrito:', error);
        alert('Error agregando el producto al carrito.');
      }
    }
  };

  return (
    <button 
      onClick={handleAddToCart}
      className="px-6 py-3 font-semibold text-white transition duration-200 bg-yellow-500 rounded-lg shadow hover:bg-yellow-600">
      Agregar al carrito
    </button>
  );
};

export default AddToCartButton;


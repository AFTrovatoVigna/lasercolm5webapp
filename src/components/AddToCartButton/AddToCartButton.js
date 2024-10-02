"use client"; 

import { useRouter } from 'next/navigation';
import { AddtoCart } from '@/helpers/cart.helper';
import Swal from 'sweetalert2';

const AddToCartButton = ({ productId }) => {
  const router = useRouter(); // Usar el hook aquí

  const handleAddToCart = async () => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Inicia sesion para poder añadir el producto'
      });
      return;
    }

    // Mostrar confirmación antes de agregar al carrito
    const result = await Swal.fire({
      title: '¿Está seguro?',
      text: "¿Quiere añadir el producto al carrito de compras?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'Cancelar'
    });
    if (result.isConfirmed) {
      try {
        await AddtoCart(cartId, productId, router); // Pasar router como parámetro
        Swal.fire({
          icon: 'success',
          title: 'Agregado',
          text: 'Producto agregado al carrito exitosamente.'
        });
      } catch (error) {
        console.error('Error al agregar al carrito:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error agregando el producto al carrito.'
        });
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


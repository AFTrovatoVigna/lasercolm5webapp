
import React, { useState } from 'react';
import { CreateCart } from '@/helpers/cart.helper';

const ModalQuickBuy = ({ show, onClose, product, cartId }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  if (!show || !product) return null;

 
  const handleAddToCart = async () => {
    try {
      setLoading(true);
      setError(null);

   
      await CreateCart(cartId, product.id, quantity);
      onClose(); 
    } catch (err) {
      setError('Error al agregar el producto al carrito. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute text-gray-600 top-2 right-2 hover:text-gray-800"
        >
          ✕
        </button>
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-2xl font-semibold">{product.nombre}</h2>
          <img
            src={product.imgUrl}
            alt={product.nombre}
            className="object-cover w-24 h-24 mb-4"
          />
          <p className="mb-4 text-lg font-bold text-gray-800">Precio: ${product.valor}</p>

          
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              className="w-16 p-2 text-center border border-gray-300 rounded"
            />
          </div>

          
          {error && <p className="mb-4 text-red-500">{error}</p>}


          <button
            onClick={handleAddToCart}
            className={`bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Agregando...' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalQuickBuy;

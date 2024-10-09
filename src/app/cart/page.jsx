"use client";
import React, { useEffect, useState } from 'react';
import { GetCart, DeleteProductFromCart } from '@/helpers/cart.helper';
import CartProduct from '@/components/CartProduct/CartProduct';
import { useRouter } from 'next/navigation'; // Import useRouter
import CartSectionDetails from '@/components/CartSectionDetails/CartSectionDetails';

const Cart = () => {
  const router = useRouter(); // Initialize the router
  const [userData, setUserData] = useState(null);
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [cartId, setCartId] = useState(null); // State to store cartId
  const [refreshCart, setRefreshCart] = useState(false); // State to trigger cart refresh

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedSession = localStorage.getItem("userSession");
      if (storedSession) {
        setUserData(JSON.parse(storedSession));
      }
      const storedCartId = localStorage.getItem("cartId"); // Retrieve cartId from local storage
      if (storedCartId) {
        setCartId(storedCartId); // Set the cartId state
      }
    }
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      if (userData && userData.id) {
        try {
          setLoading(true); // Set loading to true before fetching
          const res = await GetCart(userData.id);
          const cartData = await res.json();
          setCart(cartData);
        } catch (error) {
          console.error('Error fetching cart:', error);
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      }
    };

    fetchCart();
  }, [userData, refreshCart]); // Include refreshCart in the dependency array

  // Function to refresh cart
  const handleDeleteProduct = async (cartId, productId) => {
    try {
      await DeleteProductFromCart(cartId, productId, router);
      setRefreshCart(!refreshCart); // Toggle refreshCart to trigger useEffect
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Check if cart is empty or products array is empty
  const cartIsEmpty = cart && (!cart.products || cart.products.length === 0);

  return (
    <div className="pt-[100px] mx-[15px]">
      {loading ? ( // Check loading state
        <div className="flex flex-col items-center justify-center">
          <img className="max-w-xs" src="/assets/lg.gif" alt="Loading..." /> {/* Loading image */}
          <h3>Cargando carrito...</h3>
        </div>
      ) : cartIsEmpty ? (
        <div className="flex flex-col items-center justify-center">
          <img className="max-w-xs" src="/assets/empty-shooping-bag.jpg" alt="Empty Shopping Bag" />
          <h3 className="text-center">Tu carrito está vacío</h3>
        </div>
      ) : (
        <>
          <h2 className="pb-2 mb-4 text-2xl font-bold text-gray-800 border-b-2 border-gray-300">
            Productos en el carrito:
          </h2>

          <ul>
            {cart.products.map((product) => (
              <li key={product.id}>
                <CartProduct 
                  product={product} 
                  cartId={cartId} 
                  router={router} 
                  onDelete={handleDeleteProduct} 
                />
              </li>
            ))}
          </ul>
          <CartSectionDetails products={cart.products} />
          <p>Se realizó la orden de compra: {cart.isPurchased ? "Yes" : "No"}</p>
        </>
      )}
    </div>
  );
}

export default Cart;

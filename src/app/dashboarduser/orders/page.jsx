'use client'

import { getOrders } from '@/helpers/getOrder.helper';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Orders = () => {
  const router = useRouter();
  const [userSession, setUserSession] = useState();
  const [orders, setOrders] = useState([]);
  const [cartId, setCartId] = useState(null); // Nuevo estado para cartId

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userData = localStorage.getItem('userSession');
      setUserSession(JSON.parse(userData));
      const storedCartId = localStorage.getItem('cartId');
      setCartId(storedCartId); // Guardar cartId en el estado
    }
  }, []);

  const fetchData = async () => {
    if (userSession?.token && cartId) { // Verificar que tanto userSession como cartId estén disponibles
      const ordersResponse = await getOrders(userSession?.token, cartId, userSession?.id );
      setOrders(ordersResponse);
    }
  };

  useEffect(() => {
    if (userSession?.id) {
      userSession?.id === undefined ? router.push('/login') : fetchData();
    }
  }, [userSession, cartId]); // Añadir cartId como dependencia

  return (
    <div className="p-4 lg:h-[1000px]">
      <h1 className="mt-10 mb-4 text-2xl font-bold text-center">MIS PEDIDOS</h1>

      <div className="flex items-center justify-between mb-4">
        <Link href={"/dashboarduser"} className=" text-[11px] ml-20 lg:m-2 bg-pink-700 p-2 rounded-xl lg:text-sm">
          VOLVER A MI PERFIL
        </Link>
      </div>

      <h2 className="mb-2 text-xl font-bold lg:mb-4">Pedidos</h2>

      {orders && orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="p-4 mb-4 border rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="-mt-8 text-sm">
                  <span className="font-bold">Fecha del pedido:</span> {new Date(order.date)?.toLocaleDateString()} ✅
                </p>
              </div>
              <div className="text-right">
                <p className="mb-4 text-sm">Numero de pedido: #{order.id}</p>
                <span className="px-3 py-1 text-sm text-white bg-green-500 rounded-full">
                 
                </span>
              </div>
            </div>
            <div>
              <p>Estado del envío: INFO DEL BACK de EN PREPARACION</p>
              <p>Recibirás información de tu envío a través de tu email, si ya lo recibiste desestimá este mensaje</p>
              <p>¿Ya recibiste tu envío?</p>
              <p>Confírmanos acá: APRETAR BOTÓN DE ESTADO QUE CAMBIE A RECIBIDO</p>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p className="mb-10 text-xl font-bold text-center">No tenés pedidos📦</p>
          <Link href={"/products"} className="lg:ml-[300px] font-bold rounded-xl bg-pink-700 p-4 text-xl mb-5">
            HACÉ CLICK ACÁ PARA COMPRAR TUS PRODUCTOS FAVORITOS🔥
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;

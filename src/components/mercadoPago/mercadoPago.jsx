"use client"
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { MercadoPagoInstance } from "@mercadopago/sdk-react/mercadoPago/initMercadoPago";
export default function CheckoutMercadoPago({pagoId}){
    initMercadoPago('APP_USR-e8f6b2f8-dd4e-4e7d-bf7d-115dafde0baf')
    

 
      return <Wallet initialization={{ preferenceId: pagoId }} customization={{ texts:{ valueProp: 'smart_option'}}} />
    
      
      
}
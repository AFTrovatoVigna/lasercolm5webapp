import ProductDetailClient from "@/components/ProductDetailClient/ProductDetailClient";import Image from "next/image";
import { fetchProductById } from "@/Server/fetchProducts.jsx";
import AddToCartButton from '@/components/AddToCartButton/AddToCartButton'; 

async function ProductDetail({ params }) {
    const product = await fetchProductById(params.productsid);
    
    if (!product) {
        return <p className="mt-10 text-center text-red-500">Producto no encontrado</p>;
    }

    return (
       
        <ProductDetailClient product={product} />
    );
}

export default ProductDetail;

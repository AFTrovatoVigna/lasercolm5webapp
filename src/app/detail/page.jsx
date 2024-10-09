
import Image from "next/image";
import { fetchProductById } from "@/Server/fetchProducts.jsx";


async function ProductDetail({ params }) {

    const product = await fetchProductById(params.productId);

    
    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className="flex items-center justify-center m-auto my-10 bg-white border border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image 
                src={product.image} 
                alt={product?.name} 
                width={250} 
                height={250} 
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" 
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product?.name}</h1>
                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <p>{product?.description}</p>
                    <p>{product?.price}</p>
                </div>
            
            </div>
        </div>
   
    );
}

export default ProductDetail;

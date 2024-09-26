
import Image from "next/image";
import { fetchProductById } from "@/Server/fetchProducts.jsx";


async function ProductDetail({ params }) {

    const product = await fetchProductById(params.productsid);

    
    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className="flex items-center justify-center m-auto my-10 bg-white border border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
             <h1>{product.nombre} </h1>
             <Image src={product.imgUrl} alt={product.name} width={250} height={250} className="m-auto my-16" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h2 >{product?.color}</h2>
                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <p>{product?.material}</p>
                    <p>{product?.medidas}</p>
                    <p>{product?.stock}</p>
                </div>
                <h3>{product.valor}</h3>
            
            </div>
        </div>
    );
}

export default ProductDetail;
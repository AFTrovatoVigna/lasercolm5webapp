import Image from "next/image";
import { fetchProductById } from "@/Server/fetchProducts.jsx";
import AddToCartButton from '@/components/AddToCartButton/AddToCartButton'; 

async function ProductDetail({ params }) {
    const product = await fetchProductById(params.productsid);
    
    if (!product) {
        return <p className="mt-10 text-center text-red-500">Producto no encontrado</p>;
    }

    return (
        <div className="max-w-6xl mx-auto mt-[100px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="flex flex-col gap-8 md:flex-row">
            
                <div className="flex items-center justify-center flex-1">
                    <Image 
                        src={product.imgUrl} 
                        alt={product.nombre} 
                        width={400} 
                        height={400} 
                        className="rounded-md shadow-md"
                    />
                </div>

          
                <div className="flex flex-col justify-between flex-1">
            
                    <h1 className="mb-4 text-3xl font-bold text-gray-800">{product.nombre}</h1>

                    <div className="mb-6 space-y-2">
                        <h2 className="text-lg font-semibold text-gray-600">Color: {product.color}</h2>
                        <p className="text-gray-600"><span className="font-medium">Material:</span> {product.material}</p>
                        <p className="text-gray-600"><span className="font-medium">Medidas:</span> {product.medidas}</p>
                        <p className={`text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {product.stock > 0 ? `En stock (${product.stock} disponibles)` : 'No disponible'}
                        </p>
                    </div>

             
                    <h3 className="mb-6 text-2xl font-bold text-gray-800">Precio: {product.valor}</h3>

                   
                    <AddToCartButton productId={product.id} /> 
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

// components/Card.js
import Link from "next/link";
import Image from "next/image";

function ProductCard({ product, onQuickBuy }) { 
    return (
        <div className="flex flex-col items-center text-center">
            <Link href={`/detail/${product.id}`} passHref>
                <h1>{product.nombre}</h1>
                <p>{product.valor}</p>
                <Image src={product.imgUrl} alt={product.nombre} width={250} height={250} className="m-auto my-16" />
            </Link>

          
            <button 
                onClick={() => onQuickBuy(product)} 
                className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
                Compra Rápida
            </button>
        </div>
    );
}

export default ProductCard;

// components/Card.js
import Link from "next/link";
import Image from "next/image";

function ProductCard({ product, onQuickBuy }) { 
    return (
        <div className="flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-xs mx-auto">
  <Link href={`/detail/${product.id}`} passHref>
  
    <div className="flex justify-center items-center h-56">
      <Image
        src={product.imgUrl}
        alt={product.nombre}
        width={250}
        height={250}
        className="object-contain max-h-full"
      />
    </div>


    <h1 className="mt-4 text-lg font-semibold text-gray-800">{product.nombre}</h1>

 
    <p className="mt-2 text-xl font-bold text-gray-600">${product.valor}</p>
  </Link>

  
  <button
    onClick={() => onQuickBuy(product)}
    className="px-4 py-2 mt-6 text-white bg-pink-500 rounded-lg hover:bg-pink-700 transition-colors duration-300 ease-in-out"
  >
    Compra Rápida
  </button>
</div>

    );
}

export default ProductCard;

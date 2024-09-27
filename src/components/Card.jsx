import Link from "next/link";
import Image from "next/image";
function ProductCard({ product }) {
    return (
        <div className="flex flex-col items-center text-center ">
            <Link href={`/detail/${product.id}`} passHref>
                
            <h1>{product.nombre} </h1>
            <p>{product.valor}
            <Image src={product.imgUrl} alt={product.name} width={250} height={250} className="m-auto my-16" />
            </p>
            </Link>
        </div>
    );
}

export default ProductCard;
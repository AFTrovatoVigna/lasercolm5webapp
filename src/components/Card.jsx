import Link from "next/link";
import Image from "next/image";
function ProductCard({ product }) {
    return (
        <div className="flex flex-col items-center text-center ">
            <Link href={`/detail/${product.id}`} passHref>
                
            <h2>{product.name} </h2>
            <h3>{product.medida}</h3>
            <h4>{product.color}</h4>
            <Image src={product.imgUrl} alt={product.name} width={250} height={250} className="m-auto my-16" />
            <p>{product.price}
            </p>

            </Link>
        </div>
    );
}

export default ProductCard;
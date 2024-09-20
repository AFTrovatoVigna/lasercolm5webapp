import ProductCard from "./Card";
function ProductGridComponent({ products }) {

    return (

        <div className="grid grid-cols-1 gap-3 p-10 md:grid-cols-3">
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />


            ))}

        </div>


    )

}

export default ProductGridComponent;
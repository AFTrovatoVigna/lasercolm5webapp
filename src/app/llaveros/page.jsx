"use client"

import { useEffect, useState } from "react";
import ProductCard from "@/components/Card";

function llaveros() {

    const [products, setProducts ]= useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products/find/llaveros');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setProducts(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
<div className="">

        <div className="grid grid-cols-1 gap-3 p-10 md:grid-cols-3">
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />


            ))}

        </div>
    
</div>


    )

}

export default llaveros;
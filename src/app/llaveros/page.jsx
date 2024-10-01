"use client"

import { useEffect, useState } from "react";
import ProductCard from "@/components/Card";
import ProductsCards from "@/components/ProductsCards/ProductsCards";
import FiltroProductos from "@/components/Filtro/filtro";

function Llaveros() { // Renamed to uppercase

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products/category/llaveros');
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
            <ProductsCards />
            <FiltroProductos productos={products} />
        </div>
    );
}

export default Llaveros; // Changed to uppercase

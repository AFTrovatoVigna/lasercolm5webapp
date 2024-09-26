"use client"
import ProductGridComponent from "@/components/Cards"
import FiltroProductos from "@/components/Filtro/filtro";
import ProductsCards from "@/components/ProductsCards/ProductsCards";
import { useEffect, useState } from "react";

function product() {
    const [productos, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
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
        <div>
            <ProductsCards />
            <FiltroProductos productos={productos} />
        </div>

    )
}

export default product;
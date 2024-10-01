"use client";

import FiltroProductos from "@/components/Filtro/filtro";
import ProductsCards from "@/components/ProductsCards/ProductsCards";
import { useEffect, useState } from "react";

function Product() {
    const [productos, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Access the API URL here
    const APIURL = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${APIURL}/products`);
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
    }, [APIURL]); // Add APIURL as a dependency

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <ProductsCards />
            <FiltroProductos productos={productos} />
        </div>
    );
}

export default Product;

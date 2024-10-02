
"use client";

import { useEffect, useState } from "react";
import ProductCard from "./Card";
import ModalQuickBuy from "./ModalQuickBuy/ModalQuickBuy"; 

function ProductGridComponent({ products }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartId, setCartId] = useState(null); 


    useEffect(() => {
        const storedCartId = localStorage.getItem("cartId");
        if (storedCartId) {
            setCartId(storedCartId);
        }
    }, []);

    
    const handleModalOpen = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

  
    const handleModalClose = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    return (
        <div className="">
            <div className="grid grid-cols-1 gap-3 p-10 md:grid-cols-3">
                {products.map((product) => (
                    <ProductCard 
                        product={product} 
                        key={product.id} 
                        onQuickBuy={handleModalOpen} 
                    />
                ))}
            </div>

           
            {showModal && selectedProduct && (
                <ModalQuickBuy
                    show={showModal}
                    onClose={handleModalClose}
                    product={selectedProduct}
                    cartId={cartId}
                />
            )}
        </div>
    );
}

export default ProductGridComponent;

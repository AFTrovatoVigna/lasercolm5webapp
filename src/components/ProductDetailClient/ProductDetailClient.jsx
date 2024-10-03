
"use client"; 

import React, { useState } from 'react';
import Image from "next/image";


const ProductDetailClient = ({ product }) => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);


    const handleTextChange = (e) => {
        if (e.target.value.length <= 15) {
            setText(e.target.value);
        }
    };

    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="max-w-6xl mx-auto mt-[100px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="flex flex-col gap-8 md:flex-row">
               
                <div className="flex items-center justify-center flex-1">
                    <Image 
                        src={product.imgUrl} 
                        alt={product.nombre} 
                        width={400} 
                        height={400} 
                        className="rounded-md shadow-md"
                    />
                </div>

                <div className="flex flex-col justify-between flex-1">
                    <h1 className="mb-4 text-3xl font-bold text-gray-800">{product.nombre}</h1>
                    <div className="mb-6 space-y-2">
                        <h2 className="text-lg font-semibold text-gray-600">Color: {product.color}</h2>
                        <p className="text-gray-600"><span className="font-medium">Material:</span> {product.material}</p>
                        <p className="text-gray-600"><span className="font-medium">Medidas:</span> {product.medidas}</p>
                        <p className={`text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {product.stock > 0 ? `En stock (${product.stock} disponibles)` : 'No disponible'}
                        </p>
                        <p>En Lasercol, creemos que los recuerdos y las conexiones profundas merecen ser eternos. Nuestros productos, fabricados en acero inoxidable pulido, son grabados con láser y personalizables con tu mensaje. Crea una pieza única que celebre tus historias más queridas</p>
                    </div>
                    <h3 className="mb-6 text-2xl font-bold text-gray-800">Precio: {product.valor}</h3>

                
                    <div className="mb-4">
                        <label htmlFor="personalMessage" className="block mb-2 text-sm font-medium text-gray-600">
                            Mensaje personalizado (máximo 15 caracteres):
                        </label>
                        <input
                            type="text"
                            id="personalMessage"
                            value={text}
                            onChange={handleTextChange}
                            maxLength={15}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Escribe tu mensaje"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="imageUpload" className="block mb-2 text-sm font-medium text-gray-600">
                            Sube una imagen (opcional):
                        </label>
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                       
                        {imagePreview && (
                            <div className="mt-4">
                                <p className="text-sm font-medium text-gray-600">Vista previa de la imagen:</p>
                                <img src={imagePreview} alt="Preview" className="object-cover w-32 h-32 mt-2 rounded-md shadow-md" />
                            </div>
                        )}
                    </div>

                   
                
                </div>
            </div>
        </div>
    );
}

export default ProductDetailClient;

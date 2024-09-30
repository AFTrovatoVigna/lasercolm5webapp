"use client"
import React, { useEffect, useState } from 'react';
import { TextField, Select, MenuItem, Button, Slider, Typography } from '@mui/material';
import ProductGridComponent from '../Cards';
const FiltroProductos = ({ productos }) => {

    const [category, setcategory] = useState('');
    const [color, setColor] = useState('');
    const [precio, setPrecio] = useState([0, 1000]);
    const [categorys, setcategorys] = useState([]);
    const [colores, setcolores] = useState([]);
    const [productosFiltrados, setproductosFiltrados] = useState([]);

    useEffect(() => {
        // console.log(productos[0].category.name);

        setcategorys([...new Set(productos.map(p => {
           if(p.category != null){
            return p.category.name
           }
             
        }))]);
        setcolores([...new Set(productos.map(p => p.color))]);
    }, [])


    const filtrarProductos = () => {



        if (productos.length > 0) {

            let arrayProductos = productos.filter(producto => {

                if (color) {
                    const colorValido = color ? producto.color === color : true;
                    return colorValido;
                } else if (category) {
                    const categoryValida = category ? producto.category === category : true;
                    return categoryValida
                } else if (precio[1] > 0) {

                    console.log(producto.price, "<=", precio[1]);
                    console.log(producto.price <= precio[1]);

                    const precioValido = producto.price >= precio[0] && producto.price <= precio[1];

                    return precioValido
                } else if (category && color) {
                    const categoryValida = category ? producto.category === category : true;
                    const colorValido = color ? producto.color === color : true;
                    return categoryValida && colorValido;
                } else if (precio[1] > 0 && category) {


                    const precioValido = producto.price >= precio[0] && producto.price <= precio[1];
                    const categoryValida = category ? producto.category === category : true;

                    return precioValido && categoryValida;

                } else if (precio[1] > 0 && color) {

                    const precioValido = producto.price >= precio[0] && producto.price <= precio[1];
                    const colorValido = color ? producto.color === color : true;
                    return precioValido && colorValido;
                } else if (precio[1] > 0 && category && color) {

                    const precioValido = producto.price >= precio[0] && producto.price <= precio[1];
                    const categoryValida = category ? producto.category === category : true;
                    const colorValido = color ? producto.color === color : true;
                    return precioValido && categoryValida && colorValido;
                }
            });

            console.log(arrayProductos);

            setproductosFiltrados(arrayProductos)
        }
    };

    return (
        <div className="flex">

            <aside className="sticky top-0 w-1/4 h-screen p-4 bg-white">
                <h2 className="mb-4 text-xl font-semibold">Filtrar productos</h2>

                <TextField
                    select
                    label="Categoría"
                    value={category}
                    onChange={(e) => setcategory(e.target.value)}
                    fullWidth
                    margin="normal"
                >
                    <MenuItem value="">Todas</MenuItem>
                    {categorys.map((cat, index) => (
                        <MenuItem key={index} value={cat}>{cat}</MenuItem>
                    ))}
                </TextField>

                <TextField
                    select
                    label="Color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    fullWidth
                    margin="normal"
                >
                    <MenuItem value="">Todos</MenuItem>
                    {colores.map((col, index) => (
                        <MenuItem key={index} value={col}>{col}</MenuItem>
                    ))}
                </TextField>

                <Typography gutterBottom>Rango de Precio</Typography>
                <Slider
                    value={precio}
                    onChange={(e, newValue) => setPrecio(newValue)}
                    valueLabelDisplay="auto"
                    min={0}
                    max={100000}
                />
                <Typography>Precio: ${precio[0]} - ${precio[1]}</Typography>

                <Button
                    variant="contained"
                    onClick={filtrarProductos}
                    style={{ marginTop: '20px' }}
                >
                    Aplicar Filtros
                </Button>
            </aside>


            <section className="w-3/4 p-4">
                <ProductGridComponent products={productosFiltrados.length > 0 ? productosFiltrados : productos} />
            </section>
        </div>
    );
};

export default FiltroProductos;
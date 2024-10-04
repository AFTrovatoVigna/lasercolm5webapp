"use client"
import React, { useEffect, useState } from 'react';
import { TextField, Select, MenuItem, Button, Slider, Typography } from '@mui/material';
import ProductGridComponent from '../Cards';
const FiltroProductos = ({ productos }) => {

    const [category, setcategory] = useState('');
    const [color, setColor] = useState('');
    const [precio, setPrecio] = useState([0, 0]);
    const [categorys, setcategorys] = useState([]);
    const [colores, setcolores] = useState([]);
    const [productosFiltrados, setproductosFiltrados] = useState([]);

    useEffect(() => {

        setcategorys([...new Set(productos.map(p => {
            if (p.category != null) {
                return p.category.name
            }

        }))]);
        setcolores([...new Set(productos.map(p => p.color))]);
    }, [])


    const filtrarProductos = () => {



        if (productos.length > 0) {

            let arrayProductos = productos.filter(producto => {
                console.log(producto);

                if (precio[1] > 0 && category && color) {
                    if (producto.category != null){
                        
                        const precioValido = producto.valor >= precio[0] && producto.valor <= precio[1];
                        const categoryValida = category ? producto.category.name === category : true;
                        const colorValido = color ? producto.color === color : true;
                        return precioValido && categoryValida && colorValido;
                        
                    }
                } else if (precio[1] > 0 && color) {

                    const precioValido = producto.valor >= precio[0] && producto.valor <= precio[1];
                    const colorValido = color ? producto.color === color : true;
                    return precioValido && colorValido;
                } else if (precio[1] > 0 && category) {
                    if (producto.category != null) {  
                        
                        
                        const precioValido = producto.valor >= precio[0] && producto.valor <= precio[1];
                        const categoryValida = category ? producto.category.name === category : true;
    
                        return precioValido && categoryValida;
                    }


                } else if (category && color) {
                    if (producto.category != null){
                        
                        const categoryValida = category ? producto.category.name === category : true;
                        const colorValido = color ? producto.color === color : true;
                        return categoryValida && colorValido;
                    }  
                } else if (precio[1] > 0) {

                    console.log(producto.valor, "<=", precio[1]);
                    console.log(producto.valor <= precio[1]);

                    const precioValido = producto.valor >= precio[0] && producto.valor <= precio[1];

                    return precioValido
                } else if (color) {
                    const colorValido = color ? producto.color === color : true;
                    return colorValido;
                } else if (category) {
                    if (producto.category != null) {

                        const categoryValida = category ? producto.category.name === category : true;
                        return categoryValida
                    }
                }
            });

            setproductosFiltrados(arrayProductos)
        }
    };
    const borrarFiltros = () => {
        setcategory('');
        setColor('');
        setPrecio([0, 0]);
        setproductosFiltrados([]); 
};

    return (
        <div className="flex flex-col lg:flex-row lg:mt-9">


  <aside className="lg:sticky top-0 w-full lg:w-[300px] h-auto lg:h-screen p-4 bg-white">
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
      sx={{
        color: '#e91e63', 
        '& .MuiSlider-thumb': { backgroundColor: '#e91e63' },
        '& .MuiSlider-rail': { backgroundColor: '#f48fb1' }
      }}
    />
    <Typography>Precio: ${precio[0]} - ${precio[1]}</Typography>

    <div className="flex justify-around mt-4">
      <Button
        variant="contained"
        onClick={filtrarProductos}
        className=""
        style={{ backgroundColor: '#e91e63', color: 'white', marginRight: '10px' }}  
      >
        Aplicar Filtros
      </Button>

      <Button
        variant="outlined"
        onClick={borrarFiltros}
        className=""
        style={{ color: '#e91e63', borderColor: '#e91e63', marginLeft: '10px' }} 
      >
        Borrar Filtros
      </Button>
    </div>
  </aside>

  
  <section className="w-full lg:w-3/4 p-4">
    <ProductGridComponent products={productosFiltrados.length > 0 ? productosFiltrados : productos} />
  </section>

</div>

    );
};

export default FiltroProductos;
//hodklddjf
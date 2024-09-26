


export async function fetchProductById(id) {
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) {
            throw new Error(`Error al obtener el producto con ID ${id}`);
        }
        const product = await response.json();
        return product; 
    } catch (error) {
        console.error(error);
        return null; 
    }
}

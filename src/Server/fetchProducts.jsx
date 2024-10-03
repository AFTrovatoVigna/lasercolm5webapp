export async function fetchProductById(id) {
    try {
        // Use the NEXT_PUBLIC_API_URL environment variable
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${API_URL}/products/${id}`);
        
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

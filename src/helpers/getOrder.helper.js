export async function getOrders(token, cartId) {
    try {
        const res = await fetch(`https://back-deploy-5y3a.onrender.com/cart/${cartId}/order`, {
            method: 'GET',
            cache: "no-cache",
            headers: {
                "Content-type": "application/json",
                Authorization: token
            },
            
        })
        const orders = await res.json();
        return orders
    } catch (error) {
        throw new Error(error)
    }
}
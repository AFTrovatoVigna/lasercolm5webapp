export async function getOrders(token, cartId, id) {
    try {
        const res = await fetch(`https://back-deploy-5y3a.onrender.com/${id}/orders`, {
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
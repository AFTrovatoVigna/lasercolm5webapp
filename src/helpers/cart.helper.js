export async function CreateCart(userId) {
  try {
    console.log("Request body:", { userId }); // Debugging output
    const res = await fetch(`http://localhost:3000/cart/create`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ userId })  // Wrap userId in an object
    });

    if (res.ok) {
      const cartData = await res.json();  // Parse the response as JSON
      return cartData;
    } else {
      throw new Error('Error creating the cart');
    }
  } catch (error) {
    throw new Error(`Failed to create cart: ${error.message}`);
  }
}

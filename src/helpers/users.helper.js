export async function UpdateUser(userId, updatedData, token) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${API_URL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(updatedData) // Convert the updated data to JSON
    });

    if (!res.ok) {
      throw new Error(`Error updating user: ${res.status} ${res.statusText}`);
    }

    const updatedUser = await res.json(); // Parse the updated user data from the response
    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error(error);
  }
}
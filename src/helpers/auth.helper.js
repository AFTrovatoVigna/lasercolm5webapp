

const APIURL = process.env.NEXT_PUBLIC_API_URL
//mi front corre en local host 3001 y mi back en local host 3000, esta api url contiene el env de localhost:3000

export async function register(userData) {
    // Validación simple para asegurarse de que todos los campos requeridos están llenos
    const requiredFields = ['name', 'email', 'password', 'Dni', 'address', 'phone', 'country', 'city', 'birthDate'];
    for (const field of requiredFields) {
        if (!userData[field]) {
            throw new Error(`El campo ${field} es obligatorio`);
        }
    }

    // Convertir el campo phone a número
    userData.phone = Number(userData.phone); // Asegúrate de que sea un número

    try {
        const res = await fetch(`${APIURL}/auth/register`, {
            method: `POST`,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        if (res.ok) {
            if (res.token) {
                localStorage.setItem('token', res.token); // Guardar el token en localStorage
            }
            return res.json();
            
        }     
    } catch (error) {
        throw new Error(error);  
    }
}


export async function login(userData) {
    try {
        const res = await fetch(`${APIURL}/auth/login`, {
            method: `POST`,
            headers: {
                "Content-type": "application/json"
            },
           body: JSON.stringify(userData)
        })
       if(res.ok) {
        return res.json();
       } else {
        throw Error("Fallo el inicio de sesion")
       }       
    } catch (error) {
        throw new Error(error)  
    }
}
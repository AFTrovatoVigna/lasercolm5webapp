

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function register(userData) {
    try {
        const res = await fetch(`${APIURL}/users/register`, {
            method: `POST`,
            headers: {
                "Content-type": "application/json"
            },
           body: JSON.stringify(userData)
        })
       if(res.ok) {
        return res.json();
       } else {
        throw Error("Fallo el registro")
       }       
    } catch (error) {
        throw new Error(error)  
    }
}

export async function login(userData) {
    try {
        const res = await fetch(`${APIURL}/users/login`, {
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
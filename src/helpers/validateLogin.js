

const emailRegExp = /^[\w\.\+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}$/;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function validateLogin(values) {
    const errors = {}

    if (!emailRegExp.test(values.email)) {
        errors.email = "❌Email incorrecto"
    }

    if (!passwordRegExp.test(values.password)) {
        errors.password = "❌Password incorrecta"
    }
    
    return errors
}
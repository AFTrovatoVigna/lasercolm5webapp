



export const validateRegister = (form) => {
  const errors = {};

  const regExp = {
    name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
    address: /^[a-zA-Z0-9\s,.'-]{3,}$/,
    phone: /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
  };

  if (form.name && !regExp.name.test(form.name)) {
    errors.name = "❌Ingresa un nombre válido";
  }

  if (form.email && !regExp.email.test(form.email)) {
    errors.email = "❌Ingresa un email válido";
  }

  if (form.password && !regExp.password.test(form.password)) {
    errors.password = "❌Ingresa una contraseña válida";
  }

  if (form.address && !regExp.address.test(form.address)) {
    errors.address = "❌Ingresa una dirección válida";
  }

  if (form.phone && !regExp.phone.test(form.phone)) {
    errors.phone = "❌Ingresa un número de teléfono válido";
  }

  return errors;
};

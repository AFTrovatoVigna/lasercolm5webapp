



export const validateRegister = (form) => {
  const errors = {};

  const regExp = {

    name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/, // Permite letras y caracteres acentuados pero NO espacios

      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Formato de email
      password: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
      passwordConfirmation: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
      Dni: /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/, // Ajustar según el formato del DNI que necesites
      address: /^[a-zA-Z0-9\s,.'-]{3,}$/,
      phone: /^\d{10,15}$/, // Permite solo dígitos, ajuste el rango según sea necesario

      country:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
      city:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
      birthDate:/^\d{4}-\d{2}-\d{2}$/
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

  if (form.passwordConfirmation && !regExp.passwordConfirmation.test(form.passwordConfirmation)) {
    errors.passwordConfirmation = "❌Ingresa una contraseña válida";
  }

  if (form.Dni && !regExp.Dni.test(form.Dni)) {
    errors.Dni = "❌Ingresa una dirección válida";
  }

  if (form.address && !regExp.address.test(form.address)) {
    errors.address = "❌Ingresa una dirección válida";
  }

  if (form.phone && !regExp.phone.test(form.phone.toString())) {
    errors.phone = "❌Ingresa un número de teléfono válido";
  }

  if (form.country && !regExp.country.test(form.country)) {
    errors.country = "❌Ingresa un paìs válido";
  }

  if (form.city && !regExp.city.test(form.city)) {
    errors.city = "❌Ingresa una ciudad válida";
  }

  if (form.birthDate && !regExp.birthDate.test(form.birthDate)) {
    errors.birthDate = "❌Ingresa una fecha válida (YYYY-MM-DD)";
  }

  return errors;
};

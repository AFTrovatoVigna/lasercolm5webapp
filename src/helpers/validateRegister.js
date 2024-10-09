



export const validateRegister = (form) => {
  const errors = {};

  const regExp = {

    name: /^[A-Za-z]+( [A-Za-z]+)*$/, // Permite letras y caracteres acentuados pero NO espacios

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
    errors.name = "El nombre debe contener solo letras y no puede tener espacios al inicio o al final. Ejemplo: 'Lionel Messi'.";
  }

  if (form.email && !regExp.email.test(form.email)) {
    errors.email = "El email debe tener un formato válido. Ejemplo:'nombre@dominio.com'";
  }

  if (form.password && !regExp.password.test(form.password)) {
    errors.password = "La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial como @$!%*?&";
  }

  if (form.passwordConfirmation && !regExp.passwordConfirmation.test(form.passwordConfirmation)) {
    errors.passwordConfirmation = "La confirmación de la contraseña debe coincidir y cumplir con los mismos requisitos";
  }

  if (form.Dni && !regExp.Dni.test(form.Dni)) {
    errors.Dni = "El DNI debe ser un número entre 7 y 11 caracteres, por ejemplo,'123.456.789'";
  }

  if (form.address && !regExp.address.test(form.address)) {
    errors.address = "La dirección debe contener al menos 3 caracteres y puede incluir letras, números, comas, puntos y guiones.";
  }

  if (form.phone && !regExp.phone.test(form.phone.toString())) {
    errors.phone = "El teléfono debe contener entre 10 y 15 dígitos, sin espacios ni símbolos.";
  }

  if (form.country && !regExp.country.test(form.country)) {
    errors.country = "El país debe contener entre 2 y 50 caracteres, permitiendo solo letras y espacios.";
  }

  if (form.city && !regExp.city.test(form.city)) {
    errors.city = "La ciudad debe contener entre 2 y 50 caracteres, permitiendo solo letras y espacios.";
  }

  if (form.birthDate && !regExp.birthDate.test(form.birthDate)) {
    errors.birthDate = "La fecha de nacimiento debe estar en el formato 'YYYY-MM-DD'. Ejemplo: '1997-04-17'.";
  }

  return errors;
};

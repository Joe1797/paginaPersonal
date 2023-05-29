export default function Errors(inputs) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const errors = {};

  if (inputs.nombre === "") {
    errors["nombre"] = "Rellene el campo obligatorio";
  }
  if (inputs.asunto === "") {
    errors["asunto"] = "Rellene el campo obligatorio";
  }
  if (!emailPattern.test(inputs.email)) {
    errors["email"] = "Ingrese correo válido";
  }
  if (inputs.contenido === "") {
    errors["contenido"] = "Rellene el campo obligatorio";
  }

  return errors;
}

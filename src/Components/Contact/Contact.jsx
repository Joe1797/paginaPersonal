import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import styles from "./Contact.module.css";
import Wsp from "../SvgImages/Wsp";
import Mail from "../SvgImages/Mail";
import PinMap from "../SvgImages/PinMap";
import Errors from "./Errors";

export const Contact = () => {
  const [inputs, setInputs] = useState({
    nombre: "",
    asunto: "",
    contenido: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // console.log("useEffect");
    setErrors(Errors(inputs));
  }, [inputs, setInputs]);

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("service_99bkaiq", "template_yelqvzs", inputs, "DZmIr2b40bcAdu43j")
      .then(
        (result) => {
          // console.log(result);
          toast.success("Correo enviado con éxito");
          setInputs({
            nombre: "",
            asunto: "",
            contenido: "",
            email: "",
          });
        },
        (error) => {
          console.log(error);
          toast.error(
            "Ocurrio un error, abriremos el correo con la información ingresada..."
          );
          setTimeout(() => {
            window.open(
              `mailto:joelfabrizio17@gmail.com?Subject=${encodeURI(
                inputs.asunto
              )}&body=${encodeURI(inputs.contenido)}`
            );
          }, 2000);
          setInputs({
            nombre: "",
            asunto: "",
            contenido: "",
            email: "",
          });
        }
      );
  };

  console.log(errors);

  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.border}>
        <h3>
          Continuemos en <strong>contacto!</strong>
        </h3>
      </div>

      <div className={styles.containerInfoForm}>
        <div className={styles.containerInfo}>
          <p>
            Puedes contactarme por whastapp o correo electronico, estare feliz
            de poder responder tus mensajes!
          </p>
          <div className={styles.infoContacto}>
            <div>
              <div>
                <a
                  href={`https://api.whatsapp.com/send?phone=${51950781859}&text=${encodeURI(
                    "Hola me contacto desde tu página personal, tengo la siguiente consulta:"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Wsp></Wsp>
                </a>
              </div>
              <label>+51 950781859</label>
            </div>
            <div>
              <div>
                <a
                  href={`mailto:joelfabrizio17@gmail.com?Subject=${encodeURI(
                    inputs.asunto
                  )}&body=${encodeURI(inputs.contenido)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail></Mail>
                </a>
              </div>
              <label>joelfabrizio17@gmail.com</label>
            </div>
            <div>
              <div>
                <a
                  href="https://www.google.com/maps/place/peru+arequipa/data=!4m2!3m1!1s0x91424a487785b9b3:0xa3c4a612b9942036?sa=X&ved=2ahUKEwjcy-nehJv_AhWBALkGHUCjCXYQ8gF6BAgQEAE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PinMap></PinMap>
                </a>
              </div>
              <label>Perú-Arequipa</label>
            </div>
          </div>
        </div>
        <form onSubmit={sendEmail} className={styles.form}>
          {errors?.nombre?.length > 0 && <span>{errors.nombre}</span>}
          <div>
            <label>Nombre*</label>
            <input
              type="text"
              name="nombre"
              onChange={handleChange}
              value={inputs.nombre}
            />
          </div>
          {errors?.asunto?.length > 0 && <span>{errors.asunto}</span>}
          <div>
            <label>Asunto*</label>
            <input
              type="text"
              name="asunto"
              onChange={handleChange}
              value={inputs.asunto}
            />
          </div>
          {errors?.email?.length > 0 && <span>{errors.email}</span>}
          <div>
            <label>Email*</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
            />
          </div>
          {errors?.contenido?.length > 0 && <span>{errors.contenido}</span>}
          <div>
            <label>Mensaje*</label>
            <textarea
              name="contenido"
              onChange={handleChange}
              value={inputs.contenido}
            />
          </div>
          <input
            type="submit"
            value="Enviar"
            disabled={Object.keys(errors).length > 0}
          />
        </form>
      </div>
    </div>
  );
};

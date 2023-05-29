import styles from "./Home.module.css";
import Facebook from "../SvgImages/Facebook";
import GitHub from "../SvgImages/GitHub";
import Instagram from "../SvgImages/Instagram";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.containerPrincipal}>
      <h1>
        Hola, soy <strong>Joel Gonzales</strong>
      </h1>
      <h3>Programador FullStack Web, Ingeniero Industrial </h3>
      <div className={styles.buttons}>
        <button onClick={() => navigate("/contacto")}>Contratame</button>
        <button onClick={() => navigate("/portafolio")}>Portafolio</button>
      </div>
      <div className={styles.redesSociales}>
        <span>Sigueme en mis Redes!</span>
        <div>
          <div>
            <a
              href="https://www.facebook.com/joel.gonzales.16940"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook></Facebook>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/joel_fabrizio_17/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram></Instagram>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Joe1797"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub></GitHub>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

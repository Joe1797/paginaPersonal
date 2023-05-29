import styles from "./Styles.module.css";
import ReactSvg from "../SvgImages/React";
import ReactRouter from "../SvgImages/ReactRouter";
import GitHub from "../SvgImages/GitHub";
import Git from "../SvgImages/Git";
import DescargaCVIMG from "../../Images/DescargaCV.png";
import pRutas from "../../Images/pRutas.png";
import correoP from "../../Images/correoP.png";

export const PaginaPersonal = () => {
  return (
    <div className={styles.contenedor}>
      <h3>Página Personal</h3>
      <p>
        Proyecto individual para presentación personal, cuenta con
        <strong>
          {" "}
          rutas dinámicas para navegación, proyectos realizados y formulario
          para contacto.
        </strong>
      </p>
      <h4>Funcionalidades</h4>
      <div className={styles.funcionalidades}>
        <div>
          <h5>Rutas Dinámicas</h5>
          <div>
            <img src={pRutas} alt="Rutas dinámicas" />
          </div>
          <p>Navegación con vinculos activos a rutas y rutas anidadas.</p>
        </div>
        <div>
          <h5>Envio de Correo</h5>
          <div>
            <img src={correoP} alt="Envio de correo" />
          </div>
          <p>Formulario para contacto a traves de correo electronico.</p>
        </div>
        <div>
          <h5>Descarga de archivo PDF</h5>
          <div>
            <img src={DescargaCVIMG} alt="Imagen descarga de CV" />
          </div>
          <p>Descarga de CV por boton.</p>
        </div>
      </div>
      <h4>Tecnologias</h4>
      <div className={styles.tecnologias}>
        <ReactSvg width="55" />
        <ReactRouter width="55" />
        <Git width="55" />
      </div>
      <h4>Repositorio</h4>
      <a
        href="https://github.com/Joe1797/paginaPersonal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub width="30" />
      </a>
    </div>
  );
};

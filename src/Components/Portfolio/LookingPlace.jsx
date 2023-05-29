import styles from "./Styles.module.css";
import ReactSvg from "../SvgImages/React";
import ReactRouter from "../SvgImages/ReactRouter";
import GitHub from "../SvgImages/GitHub";
import Git from "../SvgImages/Git";
import detalleProLP from "../../Images/detalleProLP.png";
import filtrosLP from "../../Images/filtrosLP.png";
import landingLP from "../../Images/landingLP.png";
import propiedadesLP from "../../Images/propiedadesLP.png";
import mapLP from "../../Images/mapLP.png";
import formPropLP from "../../Images/formPropLP.png";
import Node from "../SvgImages/Node";
import Express from "../SvgImages/Express";
import Postgresql from "../SvgImages/Postgresql";
import ReduxSvg from "../SvgImages/ReduxSvg";

export const LookingPlace = () => {
  return (
    <div className={styles.contenedor}>
      <h3>Looking Place</h3>
      <p>
        Proyecto grupal que permite reservar alojamiento a viajeros, cuenta con
        <strong>
          {" "}
          filtros combinados, rutas dinamicas, acceso a base de datos, pasarela
          de pagos MercadoPago,api de googleMaps y otros,
        </strong>
        que permitan al viajero elejir un alojamiento a su medida.
      </p>
      <h4>Funcionalidades</h4>
      <div className={styles.funcionalidades}>
        <div>
          <h5>Landing Page</h5>
          <div>
            <img src={landingLP} alt="" />
          </div>
          <p>
            Página de aterrizaje con introducción breve acerca del producto.
          </p>
        </div>
        <div>
          <h5>Alojamientos</h5>
          <div>
            <img src={propiedadesLP} alt="" />
          </div>
          <p>
            Ruta donde se muestran los alojamientos traidos desde Postgresql.
          </p>
        </div>
        <div>
          <h5>Detalle de alojamiento</h5>
          <div>
            <img src={detalleProLP} alt="Imagen descarga de CV" />
          </div>
          <p>
            Se usa Params de Router, para desplegar vistas de detalle
            consumiendo DB.
          </p>
        </div>
        <div>
          <h5>Map de Google</h5>
          <div>
            <img src={mapLP} alt="Imagen descarga de CV" />
          </div>
          <p>
            Uso de api de google para autocompletado y abstraccion de lt y lng.
          </p>
        </div>
        <div>
          <h5>Filtros combinados</h5>
          <div>
            <img src={filtrosLP} alt="Imagen descarga de CV" />
          </div>
          <p>Filtrado por distintas categorías combinando lo seleccionado.</p>
        </div>
        <div>
          <h5>Formulario API REST</h5>
          <div>
            <img src={formPropLP} alt="Imagen descarga de CV" />
          </div>
          <p>Se desarrollo API REST para alojamientos, reservaciones, otros.</p>
        </div>
      </div>
      <h4>Tecnologias</h4>
      <div className={styles.tecnologias}>
        <ReactSvg width="55" />
        <ReactRouter width="55" />
        <Node width="55" />
        <Express width="55" />
        <Postgresql width="55" />
        <Git width="55" />
        <GitHub width="55" />
        <ReduxSvg width="55" />
      </div>
      <h4>Repositorio</h4>
      <a
        href="https://github.com/Joe1797/LookingPlacePF"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub width="30" />
      </a>
    </div>
  );
};

import styles from "./Styles.module.css";
import ReactSvg from "../SvgImages/React";
import ReactRouter from "../SvgImages/ReactRouter";
import GitHub from "../SvgImages/GitHub";
import Git from "../SvgImages/Git";
import Node from "../SvgImages/Node";
import Express from "../SvgImages/Express";
import Postgresql from "../SvgImages/Postgresql";
import cartaClientesSC from "../../Images/cartaClienteSC.png";
import clientesSC from "../../Images/clientesSC.png";
import crudSC from "../../Images/crudSC.png";
import formSC from "../../Images/formSC.png";
import loginSC from "../../Images/loginSC.png";
import pdfSC from "../../Images/pdfSC.png";
import reportesSC from "../../Images/reporteSC.png";
import wspSC from "../../Images/wspSC.png";

export const SimuladorPedidos = () => {
  return (
    <div className={styles.contenedor}>
      <h3>Simulador de Pedidos</h3>
      <p>
        Proyecto individual para para simulación de consolidado de pedidos de
        contrata de alimentos, cuenta con
        <strong>
          {" "}
          rutas dinámicas para navegación, CRUD de platos y login con database.
        </strong>
      </p>
      <h4>Funcionalidades</h4>
      <div className={styles.funcionalidades}>
        <div>
          <h5>Landing Clientes</h5>
          <div>
            <img src={clientesSC} alt="" />
          </div>
          <p>Permite el registro y login de clientes.</p>
        </div>
        <div>
          <h5>Panel cliente</h5>
          <div>
            <img src={cartaClientesSC} alt="" />
          </div>
          <p>
            Muestra la carta del día y permite seleccionar platos para pedido.
          </p>
        </div>
        <div>
          <h5>PDF de pedido</h5>
          <div>
            <img src={pdfSC} alt="Imagen descarga de CV" />
          </div>
          <p>Generación de PDF según platos seleccionados por el cliente.</p>
        </div>
        <div>
          <h5>CRUD platos</h5>
          <div>
            <img src={crudSC} alt="Imagen descarga de CV" />
          </div>
          <p>Permite hacer CRUD de los platos al administrador.</p>
        </div>
        <div>
          <h5>Formulario de plato</h5>
          <div>
            <img src={formSC} alt="Imagen descarga de CV" />
          </div>
          <p>Permite crear los platos.</p>
        </div>
        <div>
          <h5>Login</h5>
          <div>
            <img src={loginSC} alt="Imagen descarga de CV" />
          </div>
          <p>Formulario para login de usuarios.</p>
        </div>

        <div>
          <h5>Tabla de pedidos</h5>
          <div>
            <img src={reportesSC} alt="Imagen descarga de CV" />
          </div>
          <p>
            Permite visualizar pedidos y filtrar, asi como descargar en csv.
          </p>
        </div>
        <div>
          <h5>Pedido a Whatsapp</h5>
          <div>
            <img src={wspSC} alt="Imagen descarga de CV" />
          </div>
          <p>
            Redirección de información de pedido a Whatsapp con el número del
            cliente.
          </p>
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
      </div>
      <h4>Repositorio</h4>
      <a
        href="https://github.com/Joe1797/deployModuloConsolidacion"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub width="30" />
      </a>
    </div>
  );
};

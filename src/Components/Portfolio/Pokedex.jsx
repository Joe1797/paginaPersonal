import styles from "./Styles.module.css";
import ReactSvg from "../SvgImages/React";
import ReactRouter from "../SvgImages/ReactRouter";
import GitHub from "../SvgImages/GitHub";
import Git from "../SvgImages/Git";
import pokemonsPK from "../../Images/pokemonsPk.png";
import buscadorPk from "../../Images/buscadorPK.png";
import formPk from "../../Images/formPk.png";
import detallePk from "../../Images/detallePK.png";
import filtradoPk from "../../Images/filtradoPK.png";
import Node from "../SvgImages/Node";
import Express from "../SvgImages/Express";
import ReduxSvg from "../SvgImages/ReduxSvg";
import Postgresql from "../SvgImages/Postgresql";

export const Pokedex = () => {
  return (
    <div className={styles.contenedor}>
      <h3>Pokedex</h3>
      <p>
        Proyecto individual para busqueda y filtrado de pokemons consumiendo
        POKEAPI y usando DB creada a la vez, cuenta con
        <strong>
          {" "}
          detalle dinámico, buscador, filtros combinados y formulario para
          creación de DB.
        </strong>
      </p>
      <h4>Funcionalidades</h4>
      <div className={styles.funcionalidades}>
        <div>
          <h5>Paginación</h5>
          <div>
            <img src={pokemonsPK} alt="" />
          </div>
          <p>Paginación de pokemons mostrando nombres y atributos.</p>
        </div>
        <div>
          <h5>Buscador</h5>
          <div>
            <img src={buscadorPk} alt="" />
          </div>
          <p>Buscador segun id o nombre del pokemon.</p>
        </div>
        <div>
          <h5>Detalle de pokemon</h5>
          <div>
            <img src={detallePk} alt="Imagen descarga de CV" />
          </div>
          <p>Vista de pokemon con sus cualidades por ruta usando Params.</p>
        </div>
        <div>
          <h5>Filtros combinados</h5>
          <div>
            <img src={filtradoPk} alt="Imagen descarga de CV" />
          </div>
          <p>Filtrado de pokemons por varias campos, combinando resultados.</p>
        </div>
        <div>
          <h5>Formulario</h5>
          <div>
            <img src={formPk} alt="Imagen descarga de CV" />
          </div>
          <p>
            Creación de pokemons en database, se usa api PokeAPI y DB creada.
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
        <ReduxSvg width="55" />
      </div>
      <h4>Repositorio</h4>
      <a
        href="https://github.com/Joe1797/PI-Pokemon-main"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub width="30" />
      </a>
    </div>
  );
};

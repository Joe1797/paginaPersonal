import { NavLink, Outlet } from "react-router-dom";
import styles from "./Portfolio.module.css";

export const Portfolio = () => {
  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.containerIzq}>
        <div className={styles.border}>
          <h3>
            Mis <strong>Proyectos!</strong>
          </h3>
        </div>
        <nav className={styles.navPortafolio}>
          <ul>
            <li>
              <NavLink
                to="lookingPlace"
                className={({ isActive }) => {
                  return isActive ? styles.activo : null;
                }}
              >
                Looking Place
              </NavLink>
            </li>
            <li>
              <NavLink
                to="pokedex"
                className={({ isActive }) => {
                  return isActive ? styles.activo : null;
                }}
              >
                Pokedex
              </NavLink>
            </li>
            <li>
              <NavLink
                to="simuladorPedidos"
                className={({ isActive }) => {
                  return isActive ? styles.activo : null;
                }}
              >
                SimuladorPedidos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="paginaPersonal"
                className={({ isActive }) => {
                  return isActive ? styles.activo : null;
                }}
              >
                Pagina Personal
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.containerDer}>
        <Outlet />
      </div>
    </div>
  );
};

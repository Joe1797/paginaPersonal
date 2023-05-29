import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/joe-logo.png";
import styles from "./Navigation.module.css";
import Hamburger from "./Svgs/Hamburger";
import Close from "./Svgs/Close";

export const Navigation = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="Logo Joe" />
      </div>
      <nav className={styles.navPrincipal}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? styles.activo : null;
              }}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/acerca-de-mi"
              className={({ isActive }) => {
                return isActive ? styles.activo : null;
              }}
            >
              Sobre Mi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portafolio"
              className={({ isActive }) => {
                return isActive ? styles.activo : null;
              }}
            >
              Portafolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => {
                return isActive ? styles.activo : null;
              }}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className={styles.menuDesplegable}>
        <span onClick={() => setActive(!active)}>
          {active ? (
            <Close width="20px"></Close>
          ) : (
            <Hamburger width="20px"></Hamburger>
          )}
        </span>

        {active && (
          <ul>
            <li onClick={() => setActive(false)}>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li onClick={() => setActive(false)}>
              <NavLink to="/acerca-de-mi">Sobre Mi</NavLink>
            </li>
            <li onClick={() => setActive(false)}>
              <NavLink to="/portafolio">Portafolio</NavLink>
            </li>
            <li onClick={() => setActive(false)}>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

import styles from "./AboutMe.module.css";

export const AboutMe = () => {
  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.border}>
        <h1>
          Hey! te cuento un poco de <strong>Joe!</strong>
        </h1>
      </div>
      <h3>
        Soy Programador Web FullStack con background como Ingeniero Industrial
      </h3>
      <p>
        Me encanta el mundo de la tecnología, y sobretodo el desarrollo web. Me
        capacite como FullStack Developer en Henry, tras escoger un nuevo rumbo
        dentro de lo que me apasiona!.
      </p>
      <p>
        Tengo un background de Ingenieria Industrial donde labore por dos años y
        obtuve experiencia en la gestion de varios sectores.
      </p>
      <p>
        Actualmente busco brindar valor a proyectos con mis nuevas habilidades!
      </p>
      <h3>Mis Habilidades</h3>
      <div className={styles.habilidades}>
        <span>HTML5</span>
        <span>CSS3</span>
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>React js</span>
        <span>Next js</span>
        <span>Redux js</span>
        <span>Express js</span>
        <span>Sequalize</span>
        <span>Node js</span>
        <span>PostgresSQL</span>
        <span>MongoDB</span>
        <span>Figma</span>
        <span>SCRUM</span>
      </div>
      <h3>Mi CV</h3>
      <a href="/CV-JOEL GONZALES DIAZ.pdf" download>
        <button className={styles.button}>Descargar CV</button>
      </a>
    </div>
  );
};

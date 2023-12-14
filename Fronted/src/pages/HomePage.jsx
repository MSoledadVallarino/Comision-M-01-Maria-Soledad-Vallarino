import { Link } from "react-router-dom";
import styles from "../styles/Landing.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Viajemos juntos</h1>
      <p>
        Este es un espacio donde los viajeros pueden compartir sus experiencias,
        e invitarnos a ser participes de ellas.
      </p>
      <Link to={"/post"}>Dirigirse a los posteos</Link>
      <Link to={"/register"}>Registrarse</Link>
      <Link to={"/login"}>Iniciar sesion</Link>
    </div>
  );
}

export default HomePage;

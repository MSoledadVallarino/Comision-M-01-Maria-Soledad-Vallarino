import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/const";
import styles from "../styles/AuthForm.module.css";
import { Link } from "react-router-dom";
function RegisterForm() {
  const ref = useRef(null);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const avatar = formData.get("avatar");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");

    const user = {
      avatar,
      email,
      username,
      password,
    };

    const req = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (req.status !== 201) return alert("No es posible crear el usuario");
    ref.current.reset();

    navigate("/login");
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} ref={ref} className={styles.form}>
        <div className={styles.inputGroup}>
          <input type="url" placeholder="www.avatar.com" name="avatar" />
        </div>
        <div className={styles.inputGroup}>
          <input type="email" placeholder="Direccion de email" name="email" />
        </div>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Nombre de usuario" name="username" />
        </div>
        <div className={styles.inputGroup}>
          <input type="password" placeholder="Contraseña" name="password" />
        </div>
        <button>Registrarse</button>
      </form>
      <Link to={"/"}>Volver a la pagina principal</Link>
    </div>
  );
}

export default RegisterForm;

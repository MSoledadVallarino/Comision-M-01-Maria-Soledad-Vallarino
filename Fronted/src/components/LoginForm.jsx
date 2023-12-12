import { useRef } from "react";
import { API_URL } from "../utils/const.js";
import { useContext } from "react";
import { AuthContex } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const ref = useRef(null);

  const { login } = useContext(AuthContex);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const user = {
      email,
      password,
    };

    const req = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (req.status !== 200) {
      ref.current.reset();
      return alert("Error al iniciar sesion");
    }

    const res = await req.json();

    login(res);

    ref.current.reset();

    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} ref={ref}>
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;

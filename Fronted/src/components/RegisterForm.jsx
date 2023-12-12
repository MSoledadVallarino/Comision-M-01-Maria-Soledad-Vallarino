import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/const";

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

    if (req.status !== 201) return alert("Error al registrar el usuario");
    ref.current.reset();

    navigate("/login");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} ref={ref}>
        <input type="url" placeholder="www.Avatar.com" name="avatar" />
        <input type="email" placeholder="Email" name="email" />
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;

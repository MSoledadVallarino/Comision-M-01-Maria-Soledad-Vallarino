import { API_URL } from "../../utils/const";

function LoginForm() {
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

    if (req.status !== 200) return alert("Error al iniciar sesion");

    const res = await req.json();

    console.log(res);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;

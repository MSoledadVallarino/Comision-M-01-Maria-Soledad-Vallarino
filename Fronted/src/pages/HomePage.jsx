import { useContext } from "react";
import { AuthContex } from "../providers/AuthProvider";

function HomePage() {
  const { logout } = useContext(AuthContex);

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
}

export default HomePage;

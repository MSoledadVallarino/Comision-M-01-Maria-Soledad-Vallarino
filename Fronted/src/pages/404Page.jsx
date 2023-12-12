import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <p>Pagina no encontrada</p>

      <Link to="/">Por favor digirse a la pagina principal</Link>
    </div>
  );
}
export default NotFoundPage;

/**
 * La función `RutasProtegidas` comprueba si un usuario ha iniciado sesión y, en caso contrario, lo
 * redirecciona a la página de inicio de sesión.
 * @returns Si el usuario no ha iniciado sesión, el código devuelve un componente `<Navigate>` de
 * react-router-dom que redirige al usuario a la ruta "/login". Si el usuario ha iniciado sesión,
 * devuelve la propiedad "children", que normalmente representa el contenido que debe representarse
 * dentro de las rutas protegidas.
 */
import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null;
  //preguntar si usuario NO esta logueado
  if (!usuarioLogueado) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    return children;
  }
};

export default RutasProtegidas;

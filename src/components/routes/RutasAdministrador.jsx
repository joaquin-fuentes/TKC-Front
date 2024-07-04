/**
 * La función RutasAdministrador configura una ruta para el componente Administrador en una aplicación
 * React usando reaccionar-router-dom.
 * @returns El código devuelve un componente llamado RutasAdministrador, que contiene un componente de
 * Rutas de react-router-dom. Dentro del componente Rutas, hay un componente Ruta con una ruta exacta
 * de "/" que representa el componente Administrador cuando la ruta coincide.
 */
import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador/Administrador";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador></Administrador>}></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;

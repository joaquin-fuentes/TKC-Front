import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import PaginaSobreNosotros from "./components/views/PaginaSobreNosotros";
import Excursiones from "./components/views/servicios/Excursiones";
import Escuela from "./components/views/servicios/Escuela";
import Coaching from "./components/views/servicios/Coaching";
import Guarderia from "./components/views/servicios/Guarderia";
import Cumpleanios from "./components/views/servicios/Cumpleanios";
import Alquiler from "./components/views/servicios/Alquiler";
import AlquilerKayak from "./components/views/servicios/AlquilerKayak";
import Administrador from "./components/views/Administrador/Administrador";
import Error404 from "./components/views/Error404";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Login from "./components/views/Administrador/Login";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import Estudiantiles from "./components/views/servicios/Estudiantiles";
import Loading from "./components/views/Loading"; // Importa el componente de carga

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  // Estado de carga para mostrar el componente Loading
  const [isLoading, setIsLoading] = useState(true);
  const usuarioDelSessionStorage =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(
    usuarioDelSessionStorage
  );

  useEffect(() => {
    // Simulación de tiempo de carga (ej. puedes hacer esto con tus requests de datos)
    const timer = setTimeout(() => {
      setIsLoading(false); // Desactiva la carga después de 600 ms
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // Mientras se está cargando, solo muestra el componente Loading
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <div>
        {/* Renderiza Header, el contenido y Footer solo después de que la carga termina */}
        <Header
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
        <div className="main">
          <Routes>
            {/* Define las rutas y los componentes correspondientes */}
            <Route exact path="/" element={<Inicio />} />
            <Route
              exact
              path="/sobrenosotros"
              element={<PaginaSobreNosotros />}
            />
            <Route exact path="/excursiones" element={<Excursiones />} />
            <Route exact path="/escuela" element={<Escuela />} />
            <Route exact path="/coaching" element={<Coaching />} />
            <Route exact path="/cumpleaños" element={<Cumpleanios />} />
            <Route exact path="/guarderia" element={<Guarderia />} />
            <Route exact path="/estudiantiles" element={<Estudiantiles />} />
            <Route exact path="/alquilerquincho" element={<Alquiler />} />
            <Route exact path="/alquilerkayak" element={<AlquilerKayak />} />
            <Route
              exact
              path="/login"
              element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
            />
            <Route
              path="/administrador/*"
              element={
                <RutasProtegidas>
                  <RutasAdministrador />
                </RutasProtegidas>
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

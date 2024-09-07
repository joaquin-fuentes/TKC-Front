import { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos CSS de Bootstrap
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importa componentes de React Router
import Inicio from './components/views/Inicio'; // Importa el componente Inicio
import PaginaSobreNosotros from "./components/views/PaginaSobreNosotros"; // Importa el componente PaginaSobreNosotros
import Excursiones from './components/views/servicios/Excursiones'; // Importa el componente Excursiones
import Escuela from './components/views/servicios/Escuela'; // Importa el componente Escuela
import Coaching from './components/views/servicios/Coaching'; // Importa el componente Coaching
import Guarderia from "./components/views/servicios/Guarderia"; // Importa el componente Guarderia
import Cumpleanios from './components/views/servicios/Cumpleanios'; // Importa el componente Cumpleanios
import Alquiler from './components/views/servicios/Alquiler'; // Importa el componente Alquiler
import AlquilerKayak from './components/views/servicios/AlquilerKayak'; // Importa el componente AlquilerKayak
import Administrador from './components/views/Administrador/Administrador'; // Importa el componente Administrador
import Error404 from './components/views/Error404'; // Importa el componente Error404
import Header from './components/common/Header'; // Importa el componente Header
import Footer from './components/common/Footer'; // Importa el componente Footer
import Login from './components/views/Administrador/Login'; // Importa el componente Login
import RutasProtegidas from "./components/routes/RutasProtegidas"; // Importa el componente RutasProtegidas
import RutasAdministrador from "./components/routes/RutasAdministrador"; // Importa el componente RutasAdministrador
import Estudiantiles from "./components/views/servicios/Estudiantiles"; // Importa el componente Estudiantiles

import "slick-carousel/slick/slick.css"; // Importa los estilos CSS de Slick Carousel
import "slick-carousel/slick/slick-theme.css"; // Importa el tema de Slick Carousel

const App = () => {
  // Obtiene el usuario guardado en sessionStorage y lo convierte a un objeto
  const usuarioDelSessionStorage = JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {};
  // Define el estado para el usuario logueado
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioDelSessionStorage);

  return (
    <BrowserRouter>
      <div>
        {/* Renderiza el componente Header y pasa las propiedades usuarioLogueado y setUsuarioLogueado */}
        <Header usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
        <div className="main">
          <Routes>
            {/* Define las rutas y los componentes correspondientes */}
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/sobrenosotros" element={<PaginaSobreNosotros />} />
            <Route exact path="/excursiones" element={<Excursiones />} />
            <Route exact path="/escuela" element={<Escuela />} />
            <Route exact path="/coaching" element={<Coaching />} />
            <Route exact path="/cumpleaños" element={<Cumpleanios />} />
            <Route exact path="/guarderia" element={<Guarderia />} />
            <Route exact path="/estudiantiles" element={<Estudiantiles />} />
            <Route exact path="/alquilerquincho" element={<Alquiler />} />
            <Route exact path="/alquilerkayak" element={<AlquilerKayak />} />
            <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado} />} />
            <Route path="/administrador/*" element={<RutasProtegidas><RutasAdministrador /></RutasProtegidas>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        {/* Renderiza el componente Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App; // Exporta el componente App

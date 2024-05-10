import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './components/views/Inicio';
import PaginaSobreNosotros from "./components/views/PaginaSobreNosotros";
import Excursiones from './components/views/servicios/Excursiones';
import Escuela from './components/views/servicios/Escuela';
import Coaching from './components/views/servicios/Coaching';
import Guarderia from "./components/views/servicios/Guarderia";
import Cumpleanios from './components/views/servicios/Cumpleanios';
import Alquiler from './components/views/servicios/Alquiler';
import Administrador from './components/views/Administrador/Administrador';
import Error404 from './components/views/Error404';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/views/Administrador/Login';
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import Loading from "./components/views/Loading";

const App = () => {
  const usuarioDelSessionStorage = JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioDelSessionStorage);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mainPageLoaded = false;

    const mainPageLoadHandler = () => {
      // Página principal cargada, ahora esperar otros 3 segundos
      mainPageLoaded = true;
      setTimeout(() => {
        setIsLoading(false); // Desactivar la carga después del retraso
      }, 3000); // Esperar 3 segundos
    };

    // Temporizador para el tiempo de carga inicial
    const initialLoadTimer = setTimeout(mainPageLoadHandler, 3000); // Tiempo para cargar página inicial

    // Escuchar el evento onload
    window.onload = () => {
      if (!mainPageLoaded) {
        clearTimeout(initialLoadTimer);
        mainPageLoadHandler();
      }
    };

    return () => {
      clearTimeout(initialLoadTimer); // Limpia el temporizador cuando el componente se desmonta
      window.removeEventListener('load', mainPageLoadHandler);
    };
  }, []);

  return (

    <BrowserRouter>
      <div>
        <Header usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/sobrenosotros" element={<PaginaSobreNosotros />} />
            <Route exact path="/excursiones" element={<Excursiones />} />
            <Route exact path="/escuela" element={<Escuela />} />
            <Route exact path="/coaching" element={<Coaching />} />
            <Route exact path="/cumpleaños" element={<Cumpleanios />} />
            <Route exact path="/guarderia" element={<Guarderia />} />
            <Route exact path="/alquiler" element={<Alquiler />} />
            <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado} />} />
            <Route path="/administrador/*" element={<RutasProtegidas><RutasAdministrador /></RutasProtegidas>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
         <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

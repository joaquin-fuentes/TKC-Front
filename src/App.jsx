import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './components/views/Inicio';
import PaginaSobreNosotros from "./components/views/PaginaSobreNosotros"
import Excursiones from './components/views/servicios/Excursiones';
import Escuela from './components/views/servicios/Escuela';
import Coaching from './components/views/servicios/Coaching';
import Cumpleanios from './components/views/servicios/Cumpleanios';
import Alquiler from './components/views/servicios/Alquiler';
import Administrador from './components/views/Administrador/Administrador';
import Error404 from './components/views/Error404';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/views/Administrador/Login';
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministrador from "./components/routes/RutasAdministrador";

const App = () => {

  const usuarioDelSessionStorage = JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioDelSessionStorage)

  return (
    <BrowserRouter>
      <div>
        <Header usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Header>
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Inicio></Inicio>
            }></Route>
            <Route exact path="/sobrenosotros" element={<PaginaSobreNosotros></PaginaSobreNosotros>
            }></Route>
            <Route exact path="/excursiones" element={<Excursiones></Excursiones>
            }></Route>
            <Route exact path="/escuela" element={<Escuela></Escuela>
            }></Route>
            <Route exact path="/coaching" element={<Coaching></Coaching>
            }></Route>
            <Route exact path="/cumpleaños" element={<Cumpleanios></Cumpleanios>
            }></Route>
            <Route exact path="/alquiler" element={<Alquiler></Alquiler>
            }></Route>
            <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>
            }></Route>
            <Route path="/administrador/*" element={
              <RutasProtegidas>
                <RutasAdministrador></RutasAdministrador>
              </RutasProtegidas>
            }></Route>
            <Route path="*" element={<Error404></Error404>
            }></Route>
          </Routes>
        </div>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
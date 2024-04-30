import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
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

const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Header></Header>
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
           <Route exact path="/administrador" element={<Administrador></Administrador>
          }></Route>
             <Route exact path="/error" element={<Error404></Error404>
          }></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
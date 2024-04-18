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

const App = () => {
  return (
    <BrowserRouter>
      <div>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
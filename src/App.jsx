import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './components/views/Inicio';
import PaginaSobreNosotros from "./components/views/PaginaSobreNosotros"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>
          }></Route>
          <Route exact path="/sobrenosotros" element={<PaginaSobreNosotros></PaginaSobreNosotros>
          }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
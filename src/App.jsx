import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';
import Servicios from './components/views/Servicios';
import Nosotros from './components/views/Nosotros';
import Onda from "./assets/imagenes/wave.svg"

const App = () => {
  return (
    <div>
      <Header></Header>
      <Inicio></Inicio>
      <Nosotros></Nosotros>
      <img src={Onda} alt="onda svg" className='bg-danger waveInicio' />
      <Servicios></Servicios>
      <Footer></Footer>
    </div>
  );
};

export default App;
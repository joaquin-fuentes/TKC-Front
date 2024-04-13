import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';
import Servicios from './components/views/Servicios';
import Nosotros from './components/views/Nosotros';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Inicio></Inicio>
      <Nosotros></Nosotros>
      <Servicios></Servicios>
      <Footer></Footer>
    </div>
  );
};

export default App;
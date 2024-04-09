import React from 'react';
import './App.css'
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Inicio></Inicio>
      <Footer></Footer>
    </div>
  );
};

export default App;
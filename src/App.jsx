import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <div>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>
          }></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
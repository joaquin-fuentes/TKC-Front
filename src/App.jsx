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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 190"><path fill="	#171717" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,245.3C672,256,768,256,864,229.3C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
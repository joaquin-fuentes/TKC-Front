import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'; // Importa el componente principal de la aplicación
import './App.css'; // Importa los estilos CSS de la aplicación

// Crea un "root" React utilizando ReactDOM.createRoot y renderiza la aplicación en el elemento con id "root"
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode envuelve la aplicación para activar ciertas advertencias y comprobaciones de React en modo de desarrollo
  <React.StrictMode>
    <App /> {/* Renderiza el componente principal de la aplicación */}
  </React.StrictMode>,
);

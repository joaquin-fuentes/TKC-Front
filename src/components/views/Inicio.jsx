import React, { useState, useEffect } from "react";
import Nosotros from "./Nosotros";
import Servicios from "./Servicios";
import Contacto from "./Contacto";
import DondeEncontrarnos from "./DondeEncontrarnos";
import Loading from "./Loading";
import Portada from "./Portada";

const Inicio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-100">
      {/* Sección principal */}
      <Portada></Portada>

      {/* Componente Nosotros */}
      <Nosotros />

      {/* Separador SVG */}
      <div className="relative">
        <svg
          className="absolute w-full -top-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 100 1440 190"
        >
          <path
            fill="#dc2626"
            d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,245.3C672,256,768,256,864,229.3C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Componente Servicios */}
      <Servicios />

      {/* Separador SVG */}
      <div className="relative">
        <svg
          className="absolute w-full -top-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 100 1440 190"
        >
          <path
            fill="#dc2626"
            d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,245.3C672,256,768,256,864,229.3C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Componente DondeEncontrarnos */}
      <DondeEncontrarnos />

      {/* Separador SVG */}
      <div className="relative">
        <svg
          className="absolute w-full -top-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 100 1440 190"
        >
          <path
            fill="#b00b0b"
            d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,245.3C672,256,768,256,864,229.3C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Componente Contacto */}
      <Contacto />

      {/* Último separador SVG */}
      <div className="relative">
        <svg
          className="absolute w-full -top-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 100 1440 190"
        >
          <path
            fill="#171717"
            d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,245.3C672,256,768,256,864,229.3C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Inicio;

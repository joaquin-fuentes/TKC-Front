/**
 * El componente `Inicio` en esta aplicación React incluye renderizado condicional basado en un estado
 * de carga y muestra varias secciones como servicios e información de contacto con separadores SVG
 * para mayor atractivo visual.
 * @returns Se está devolviendo el componente `Inicio`. Incluye representación condicional basada en el
 * estado "isLoading". Si `isLoading` es verdadero, devuelve el componente `Loading`. De lo contrario,
 * devuelve el contenido principal de la página, que incluye secciones para "Nosotros", "Servicios",
 * "DondeEncontrarnos" y "Contacto", junto con separadores que utilizan elementos SVG.
 */

import React, { useState, useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import logoTransparente from "../../assets/logos/logoTransparente.png";
import Nosotros from "./Nosotros";
import Servicios from "./Servicios";
import Contacto from "./Contacto";
import DondeEncontrarnos from "./DondeEncontrarnos";
import Loading from "./Loading";

const Inicio = () => {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar si se muestra el componente de carga

  // Simula un proceso de carga durante 1.2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Después de 1.2 segundos, cambia el estado para dejar de mostrar el componente de carga
    }, 1200); // 1200 ms = 1.2 segundos

    // Función de limpieza para asegurarse de que el temporizador se cancela si el componente se desmonta antes
    return () => clearTimeout(timer);
  }, []); // Se ejecuta solo una vez al montar el componente

  // Si todavía está cargando, muestra el componente Loading
  if (isLoading) {
    return <Loading />; // Muestra el componente de carga si aún no ha pasado el tiempo de espera
  }

  // De lo contrario, devuelve el contenido principal
  return (
    <>
      <Container
        fluid
        className="contenedorPrincipal d-flex justify-content-center align-items-center"
        id="inicio"
      >
        <section
          data-aos="fade-up"
          className="d-flex justify-content-center align-items-center flex-column mb-1 "
        >
          <img
            src={logoTransparente}
            alt="Logo de TKC"
            className="logoTkcInicio"
          />
          <Nav.Link href={"/#servicios"} className="w-50 p-1 btn btn-rojo mt-3">
            Servicios
          </Nav.Link>
        </section>
      </Container>

      {/* Componente Nosotros */}
      <Nosotros />

      {/* Separador SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 190">
        <path
          fill="#b00b0b"
          fill-opacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,245.3C672,256,768,256,864,229.3C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      {/* Componente Servicios */}
      <Servicios />

      {/* Separador SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 190">
        <path
          fill="#b00b0b"
          fill-opacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,245.3C672,256,768,256,864,229.3C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/* Componente DondeEncontrarnos */}
      <DondeEncontrarnos />

      {/* Separador SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 190">
        <path
          fill="#b00b0b"
          fill-opacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,245.3C672,256,768,256,864,229.3C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      {/* Componente Contacto */}
      <Contacto />

      {/* Separador SVG */}
      <svg
        className="bg-rojo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 100 1440 190"
      >
        <path
          fill="#171717"
          fill-opacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,245.3C672,256,768,256,864,229.3C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Inicio;

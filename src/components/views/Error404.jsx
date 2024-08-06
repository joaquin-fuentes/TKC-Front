import React from "react";
import { Container, Nav } from "react-bootstrap";
import imgError from "../../assets/imagenes/error404.webp";

/**
 * Componente funcional que representa la página de error 404 (Página no encontrada).
 * Muestra un mensaje y una imagen cuando el usuario accede a una URL que no existe.
 */
const Error404 = () => {
  return (
    <div>
      {/* Contenedor principal con Bootstrap para centrar el contenido */}
      <Container
        fluid
        className="contenedorPrincipalError d-flex justify-content-center align-items-center"
        id="inicio"
      >
        {/* Sección principal con efecto de desvanecimiento hacia arriba */}
        <section
          data-aos="fade-up"
          className="d-flex justify-content-center align-items-center flex-column mb-1 "
        >
          {/* Imagen de error 404 */}
          <img
            src={imgError}
            alt="Imagen de error 404"
            className="logoTkcInicio"
          />
          {/* Mensaje de página no encontrada */}
          <h4 className="text-light">Página no encontrada</h4>
          {/* Enlace para volver a la página de inicio */}
          <Nav.Link href={"/"} className="w-50 p-1 btn btn-rojo mt-3">
            Volver a Inicio
          </Nav.Link>
        </section>
      </Container>
    </div>
  );
};

export default Error404;

import React from "react";
import { Container, Row, Col, NavLink } from "react-bootstrap"; // Importa componentes de Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos CSS de Bootstrap

// Importa las imágenes de los servicios
import excursiones from "../../assets/imagenes/alquilerkayak.webp";
import coaching from "../../assets/imagenes/coaching.webp";
import escuelita from "../../assets/imagenes/escuelita.webp";
import cumple from "../../assets/imagenes/grupo5.webp";
import quincho from "../../assets/imagenes/quincho6.webp";
import guarderia from "../../assets/imagenes/guarderia2.webp";
import alquiler from "../../assets/imagenes/grupo2.webp";
import estudiantiles from "../../assets/imagenes/portada3.webp";

// Importa el logo y los iconos de los servicios
import logo from "../../assets/logos/logoTransparente.webp";
import { TbKayak } from "react-icons/tb";
import iconoAlquiler from "../../assets/iconos/kayakRojo.webp";
import iconoExcursion from "../../assets/iconos/kayakRojo3.webp";
import iconoCoaching from "../../assets/iconos/trekkingRojo2.webp";
import iconoEscuela from "../../assets/iconos/kayakRojo2.webp";
import iconoCumple from "../../assets/iconos/globosRojo.webp";
import iconoAsador from "../../assets/iconos/asadorRojo2.webp";
import iconoGuarderia from "../../assets/iconos/kayakRojo4.webp";
import iconoEstudiantiles from "../../assets/iconos/grupoRojo.webp";

const Servicios = () => {
  return (
    <div className="bg-rojo" id="servicios">
      <Container>
        {/* Encabezado con el ícono y título de los servicios */}
        <div
          data-aos="fade-up"
          className="d-flex flex-column justify-content-center align-items-center pt-3"
        >
          <TbKayak className="iconoKayak text-light " />
          <h3 className="text-light m-0 p-4 text-center ">
            {" "}
            Nuestros Servicios
          </h3>
        </div>
        {/* Filas de servicios */}
        <Row className="pb-4 d-flex justify-content-center">
          {/* Servicio de Alquiler de kayaks */}
          <Col md="6" lg="4" className="d-flex justify-content-center">
            <article data-aos="fade-up" className="articleCard mx-1 my-3">
              <img
                src={alquiler}
                alt="imagen de alquiler de kayaks"
                className="imgCard"
              />
              <div className="overlay"></div>
              <img
                src={iconoAlquiler}
                alt="icono de alquiler de kayaks"
                className="iconoCard"
              />
              <h5 className="textCard">Alquiler de kayaks</h5>
              <NavLink href="/alquilerkayak" className="btnCard">
                Ver más
              </NavLink>
            </article>
          </Col>
          {/* Servicio de Excursiones */}
          <Col md="6" lg="4" className="d-flex justify-content-center">
            <article data-aos="fade-up" className="articleCard mx-1 my-3">
              <img
                src={excursiones}
                alt="imagen de excursiones"
                className="imgCard"
              />
              <div className="overlay"></div>
              <img
                src={iconoExcursion}
                alt="icono de excursiones"
                className="iconoCard"
              />
              <h5 className="textCard">Excursiones</h5>
              <NavLink href="/excursiones" className="btnCard">
                Ver más
              </NavLink>
            </article>
          </Col>
          {/* Servicio de Coaching */}
          <Col md="6" lg="4" className="d-flex justify-content-center">
            <article data-aos="fade-up" className="articleCard mx-1 my-3">
              <img
                src={coaching}
                alt="imagen de coaching"
                className="imgCard"
              />
              <div className="overlay"></div>
              <img
                src={iconoCoaching}
                alt="icono de coaching"
                className="iconoCard p-1"
              />
              <h5 className="textCard">Team Building</h5>
              <NavLink href="/coaching" className="btnCard">
                Ver más
              </NavLink>
            </article>
          </Col>
          {/* Servicio de Escuela de kayaks */}
          <Col md="6" lg="4" className="d-flex justify-content-center">
            <article data-aos="fade-up" className="articleCard mx-1 my-3">
              <img
                src={escuelita}
                alt="imagen de escuela de kayaks"
                className="imgCard"
              />
              <div className="overlay"></div>
              <img
                src={iconoEscuela}
                alt="icono de escuela de kayak"
                className="iconoCard p-1"
              />
              <h5 className="textCard">Escuela de kayaks</h5>
              <NavLink href="/escuela" className="btnCard">
                Ver más
              </NavLink>
            </article>
          </Col>
          {/* Servicio de Cumpleaños infantiles */}
          <Col md="6" lg="4" className="d-flex justify-content-center">
            <article data-aos="fade-up" className="articleCard mx-1 my-3">
              <img
                src={cumple}
                alt="imagen de cumpleaños infantiles"
                className="imgCard"
              />
              <div className="overlay"></div>
              <img
                src={iconoCumple}
                alt="icono de cumpleaños"
                className="iconoCard p-1"
              />
              <h5 className="textCard">Cumpleaños infantiles</h5>
              <NavLink href="/cumpleaños" className="btnCard">
                Ver más
              </NavLink>
            </article>
          </Col>
          {/* Servicio de Alquiler de quincho para eventos */}
          <Col md="6" lg="4" className="d-flex justify-content-center">
            <article data-aos="fade-up" className="articleCard mx-1 my-3">
              <img
                src={quincho}
                alt="imagen de alquiler de quincho para eventos"
                className="imgCard"
              />
              <div className="overlay"></div>
              <h5 className="textCard">Quincho para eventos</h5>
              <img
                src={iconoAsador}
                alt="icono de asador"
                className="iconoCard"
              />
              <NavLink href="/alquilerquincho" className="btnCard">
                Ver más
              </NavLink>
            </article>
          </Col>
          {/* Servicio de Guardería de kayaks */}
          <Col md="6" lg="4" className="d-flex justify-content-center">
            <article data-aos="fade-up" className="articleCard mx-1 my-3">
              <img
                src={guarderia}
                alt="imagen de guardería de kayaks"
                className="imgCard"
              />
              <div className="overlay"></div>
              <img
                src={iconoGuarderia}
                alt="icono de guardería de kayaks"
                className="iconoCard p-1"
              />
              <h5 className="textCard">Guardería de Kayaks</h5>
              <NavLink href="/guarderia" className="btnCard">
                Ver más
              </NavLink>
            </article>
          </Col>
          {/* Servicio de Estudiantiles */}
          <Col md="6" lg="4" className="d-flex justify-content-center">
            <article data-aos="fade-up" className="articleCard mx-1 my-3">
              <img
                src={estudiantiles}
                alt="imagen de Estudiantiles"
                className="imgCard"
              />
              <div className="overlay"></div>
              <img
                src={iconoEstudiantiles}
                alt="icono de Estudiantiles"
                className="iconoCard p-1"
              />
              <h5 className="textCard">Estudiantiles</h5>
              <NavLink href="/estudiantiles" className="btnCard">
                Ver más
              </NavLink>
            </article>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Servicios;

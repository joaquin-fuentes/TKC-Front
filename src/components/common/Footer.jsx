/* Este fragmento de código es un componente funcional de React llamado "Pie de página". Está creando
una sección de pie de página para un sitio web que utiliza componentes de React Bootstrap. A
continuación se muestra un desglose de lo que hace el código: */
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import logoTransparente from "../../assets/logos/logoTransparente.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid className="bg-negro text-light ">
      <Row>
        <Col md="4" className="d-flex align-items-center justify-content-around">
          <section className="p-1 d-flex flex-column justify-content-center align-items-center">
            <a href="/#inicio" className="text-center">
              <img
                src={logoTransparente}
                alt="logo tkc"
                className="logotkc-footer"
              />
            </a>
          </section>
        </Col>
        <Col md="4" className="d-flex align-items-center justify-content-around">
          <section className="p-3 d-flex flex-column justify-content-center align-items-center">
            <h4>Navegacion</h4>
            <Nav className="d-flex flex-column text-center">
              <Nav.Link className="text-light text-header p-1" href="/#inicio">
                Inicio
              </Nav.Link>
              <Nav.Link
                className="text-light text-header p-1"
                href="/#nosotros"
              >
                Nosotros
              </Nav.Link>
              <Nav.Link
                className="text-light text-header p-1"
                href="/#servicios"
              >
                Servicios
              </Nav.Link>
              <Nav.Link
                className="text-light text-header p-1"
                href="/#contacto"
              >
                Contacto
              </Nav.Link>
            </Nav>
          </section>
        </Col>
        <Col md="4" className="d-flex align-items-center justify-content-around">
          <section className="p-3 d-flex flex-column justify-content-center align-items-center">
            <h4>Contacto</h4>
            <Nav className="d-flex flex-column text-center">
              <Nav.Link
                className="text-light me-1 text-header"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre los servicios de Tucuman Kayak Club"
              >
                <FaWhatsapp className="me-1 fs-4" />
                3816097754
              </Nav.Link>
              <Nav.Link
                className="text-light me-1 text-header"
                target="_blank"
                href="https://www.facebook.com/tkcturismoaventura/"
              >
                <FaFacebookSquare className="me-1 fs-4" />
                Tucumán Kayak Club
              </Nav.Link>
              <Nav.Link
                className="text-light me-1 text-header"
                target="_blank"
                href="https://www.instagram.com/tucumankayakclub/?hl=es"
              >
                <FaInstagram className="me-1 fs-4" />
                @TucumánKayakClub
              </Nav.Link>
            </Nav>
          </section>
        </Col>
      </Row>
      <h6 className="text-center p-0 m-0 py-3 mt-2 copyright-text">
        © Todos los derechos reservados.
      </h6>
    </Container>
  );
};

export default Footer;

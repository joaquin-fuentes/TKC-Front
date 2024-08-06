/* Este fragmento de código es un componente funcional de React llamado "Coaching". Importa
dependencias necesarias como React, useState, useEffect de 'react' y componentes como Container,
Row, Col, Nav de 'react-bootstrap'. También importa varias imágenes e íconos para usar dentro del
componente. */
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import imgCoaching from "../../../assets/imagenes/juegos.webp";
import img1 from "../../../assets/imagenes/coaching.webp";
import img2 from "../../../assets/imagenes/portada2.webp";
import img3 from "../../../assets/imagenes/portada3.webp";
import img4 from "../../../assets/imagenes/juegos.webp";
import img5 from "../../../assets/imagenes/grupo4.webp";

import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg";

import Slider from "react-slick";

const Coaching = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Para ajustar inicialmente al tamaño de la ventana

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="fondoExcursiones">
        <Container>
          <h2
            data-aos="fade-up"
            className="text-center text-light tituloSobreNosotros mb-4"
          >
            Team Building
          </h2>
          <hr data-aos="fade-up" className="m-0 text-light my-4" />
          <Row className="pt-3 pb-5">
            <Col md={6}>
              <article data-aos="fade-up">
                <img
                  src={imgCoaching}
                  alt="imagen de kayak en rio"
                  className="imgExcursion"
                />
              </article>
            </Col>
            <Col md={6}>
              <article data-aos="fade-up" className="p-3 text-center">
                <h5 className="textTitulo">Team Building</h5>
                <ul className="p-0 m-0">
                  <li className="textSubtitulo">
                    <span className="textExplicacion">
                      TKC ofrece servicios especializados en team building,
                      coaching y motivación para empresas y grupos, adaptándose
                      a sus necesidades. <br />
                      El team building es una filosofía que ve a los
                      participantes como parte de grupos interconectados, no
                      solo individuos. Se basa en dinámicas para mejorar la
                      cohesión grupal y entender su funcionamiento. <br />
                      Beneficios del Team Building: <br />
                      - Mejora relaciones y cohesión grupal. <br />
                      - Fomenta la comunicación y confianza. <br />
                      - Desarrolla liderazgo y promueve la creatividad. <br />-
                      Aumenta la productividad comparado con el trabajo
                      individualista.
                    </span>
                  </li>
                  <Nav.Link
                    className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center"
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre TEAM BUILDING"
                  >
                    <img
                      src={whatsapp}
                      className="icono-header mx-1"
                      alt="whatsapp"
                    />
                    Enviar Mensaje
                  </Nav.Link>
                </ul>
              </article>
            </Col>
          </Row>
          <Slider {...settings}>
            <div data-aos="fade-up" className="image-container">
              <img
                src={img1}
                alt="imagen de alquiler"
                className="img-galeria"
              />
            </div>
            <div data-aos="fade-up" className="image-container">
              <img
                src={img2}
                alt="imagen de alquiler"
                className="img-galeria"
              />
            </div>
            <div data-aos="fade-up" className="image-container">
              <img
                src={img3}
                alt="imagen de alquiler"
                className="img-galeria"
              />
            </div>
            <div data-aos="fade-up" className="image-container">
              <img
                src={img4}
                alt="imagen de alquiler"
                className="img-galeria"
              />
            </div>
            <div data-aos="fade-up" className="image-container">
              <img
                src={img5}
                alt="imagen de alquiler"
                className="img-galeria"
              />
            </div>
          </Slider>
        </Container>
      </div>
    </div>
  );
};

export default Coaching;

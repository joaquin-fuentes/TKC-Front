/* El código anterior es un componente de React llamado `Cumpleanios` que muestra información sobre los
cumpleaños de los niños. Incluye una imagen, una descripción de la experiencia del cumpleaños y una
galería deslizante de imágenes relacionadas con las celebraciones del cumpleaños. El componente
también incluye un comportamiento receptivo para ajustar la cantidad de diapositivas mostradas según
el ancho de la ventana. Además, existe un enlace para enviar un mensaje de WhatsApp para consultas
sobre cumpleaños infantiles. */
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import imgCumpleanios from "../../../assets/imagenes/grupo3.webp";
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg";

import imgGaleria from "../../../assets/imagenes/base.webp";
import imgGaleria2 from "../../../assets/imagenes/quincho.webp";
import imgGaleria11 from "../../../assets/imagenes/grupo.webp";
import imgGaleria3 from "../../../assets/imagenes/grupo5.webp";
import imgGaleria4 from "../../../assets/imagenes/quincho5.webp";
import imgGaleria5 from "../../../assets/imagenes/quincho6.webp";
import imgGaleria6 from "../../../assets/imagenes/baño1.webp";
import imgGaleria7 from "../../../assets/imagenes/baño2.webp";
import imgGaleria8 from "../../../assets/imagenes/baño3.webp";
import imgGaleria9 from "../../../assets/imagenes/portada3.webp";
import imgGaleria10 from "../../../assets/imagenes/base2.webp";

import Slider from "react-slick";

const Cumpleanios = () => {
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
            Cumpleaños infantiles
          </h2>
          <hr data-aos="fade-up" className="m-0 text-light my-4" />
          <Row className="pt-3 pb-5">
            <Col md={6}>
              <article data-aos="fade-up">
                <img
                  src={imgCumpleanios}
                  alt="imagen de kayak en rio"
                  className="imgExcursion"
                />
              </article>
            </Col>
            <Col md={6}>
              <article data-aos="fade-up" className="p-3 text-center">
                <h5 className="textTitulo">Cumpleaños infantiles</h5>
                <ul className="p-0 m-0">
                  <li className="textSubtitulo">
                    <span className="textExplicacion">
                      ¿Quieres celebrar el cumpleaños de tu hijo/a de una manera
                      única y emocionante? ¡Te ofrecemos una experiencia
                      inolvidable con una excursión en kayak por el dique,
                      guiada por nuestros expertos, seguida de una deliciosa
                      comida en nuestro quincho! Después de explorar el agua en
                      nuestras embarcaciones, podrán disfrutar de una
                      hamburguesada o del menú que prefieras. Además, contamos
                      con un amplio espacio equipado con todo lo necesario para
                      juegos y diversión. ¡No te pierdas esta oportunidad de
                      hacer que su cumpleaños sea memorable!
                    </span>
                  </li>
                  <Nav.Link
                    className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center"
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre CUMPLEAÑOS INFANTILES"
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
                src={imgGaleria}
                alt="imagen de quincho"
                className="img-galeria"
              />
            </div>
            <div data-aos="fade-up" className="image-container">
              <img
                src={imgGaleria2}
                alt="imagen de quincho"
                className="img-galeria"
              />
            </div>
            <div data-aos="fade-up" className="image-container">
              <img
                src={imgGaleria11}
                alt="imagen de quincho"
                className="img-galeria"
              />
            </div>
            <div data-aos="fade-up" className="image-container">
              <img
                src={imgGaleria3}
                alt="imagen de quincho"
                className="img-galeria"
              />
            </div>
            <div data-aos="fade-up" className="image-container">
              <img
                src={imgGaleria4}
                alt="imagen de quincho"
                className="img-galeria"
              />
            </div>
            <div data-aos="fade-up" className="image-container">
              <img
                src={imgGaleria5}
                alt="imagen de quincho"
                className="img-galeria"
              />
            </div>
            <div data-aos="fade-up" className="image-container">
              <img
                src={imgGaleria6}
                alt="imagen de quincho"
                className="img-galeria"
              />
            </div>
            <div data-aos="fade-up" className="image-container">
              <img
                src={imgGaleria7}
                alt="imagen de quincho"
                className="img-galeria"
              />
            </div>
            <div data-aos="fade-up" className="image-container">
              <img
                src={imgGaleria8}
                alt="imagen de quincho"
                className="img-galeria"
              />
            </div>
            <div data-aos="fade-up" className="image-container">
              <img
                src={imgGaleria9}
                alt="imagen de quincho"
                className="img-galeria"
              />
            </div>
            <div data-aos="fade-up" className="image-container">
              <img
                src={imgGaleria10}
                alt="imagen de quincho"
                className="img-galeria"
              />
            </div>
          </Slider>
        </Container>
      </div>
    </div>
  );
};

export default Cumpleanios;

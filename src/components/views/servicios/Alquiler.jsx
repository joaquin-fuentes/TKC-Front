import React, { useState, useEffect } from 'react';

import { Container, Row, Col, Nav } from "react-bootstrap"
import imgAlquiler from "../../../assets/imagenes/quincho3.png"
import imgGaleria from "../../../assets/imagenes/quincho2.png"
import imgGaleria2 from "../../../assets/imagenes/quincho.png"
import imgGaleria3 from "../../../assets/imagenes/quincho4.png"
import imgGaleria4 from "../../../assets/imagenes/quincho5.png"
import imgGaleria5 from "../../../assets/imagenes/quincho6.png"
import imgGaleria6 from "../../../assets/imagenes/baño1.png"
import imgGaleria7 from "../../../assets/imagenes/baño2.png"
import imgGaleria8 from "../../../assets/imagenes/baño3.png"
import imgGaleria9 from "../../../assets/imagenes/base.png"
import imgGaleria10 from "../../../assets/imagenes/base2.png"

import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg"

import Slider from "react-slick";


const Alquiler = () => {
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Para ajustar inicialmente al tamaño de la ventana

        return () => {
            window.removeEventListener('resize', handleResize);
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
            <div className='fondoExcursiones'>
                <Container>
                    <h2 data-aos="fade-up" className='text-center text-light tituloSobreNosotros mb-4'>Alquiler de quincho</h2>
                    <hr data-aos="fade-up" className="m-0 text-light my-4" />
                    <Row className='pt-3 pb-5'>
                        <Col md={6}>
                            <article data-aos="fade-up">
                                <img src={imgAlquiler} alt="imagen de kayak en rio" className='imgExcursion' />
                            </article>
                        </Col>
                        <Col md={6}>
                            <article data-aos="fade-up" className='p-3 text-center'>
                                <h5 className='textTitulo'>Alquiler de quincho para eventos</h5>
                                <ul className='p-0 m-0'>
                                    <li className='textSubtitulo'><span className='textExplicacion'>Nuestra base operativa cuenta con un quincho cubierto y un asador perfecto para organizar una amplia variedad de eventos, desde cumpleaños hasta eventos deportivos. Con capacidad para aproximadamente 60 personas, ofrece la mejor vista del dique y sus alrededores. Además, cuenta con baños, mesas y sillas para mayor comodidad.</span></li>
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre el ALQUILER DE QUINCHO PARA EVENTOS"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />Enviar Mensaje</Nav.Link>
                                </ul>
                            </article>
                        </Col>
                    </Row>
                    <Slider {...settings}>

                        <div data-aos="fade-up" className="image-container">
                            <img src={imgGaleria} alt="imagen de quincho" className="img-galeria" />
                        </div>
                        <div data-aos="fade-up" className="image-container">
                            <img src={imgGaleria2} alt="imagen de quincho" className="img-galeria" />
                        </div>
                        <div data-aos="fade-up" className="image-container">
                            <img src={imgGaleria3} alt="imagen de quincho" className="img-galeria" />
                        </div>
                        <div data-aos="fade-up" className="image-container">
                            <img src={imgGaleria4} alt="imagen de quincho" className="img-galeria" />
                        </div>
                        <div data-aos="fade-up" className="image-container">
                            <img src={imgGaleria5} alt="imagen de quincho" className="img-galeria" />
                        </div>
                        <div data-aos="fade-up" className="image-container">
                            <img src={imgGaleria6} alt="imagen de quincho" className="img-galeria" />
                        </div>
                        <div data-aos="fade-up" className="image-container">
                            <img src={imgGaleria7} alt="imagen de quincho" className="img-galeria" />
                        </div>
                        <div data-aos="fade-up" className="image-container">
                            <img src={imgGaleria8} alt="imagen de quincho" className="img-galeria" />
                        </div>
                        <div data-aos="fade-up" className="image-container">
                            <img src={imgGaleria9} alt="imagen de quincho" className="img-galeria" />
                        </div>
                        <div data-aos="fade-up" className="image-container">
                            <img src={imgGaleria10} alt="imagen de quincho" className="img-galeria" />
                        </div>
                    </Slider>
                </Container>
            </div>
        </div>
    );
};

export default Alquiler;
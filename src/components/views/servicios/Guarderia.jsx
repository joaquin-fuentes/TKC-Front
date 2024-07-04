/* Este fragmento de código es un componente funcional de React llamado "Guarderia" que representa una
sección de un sitio web relacionado con un servicio de almacenamiento de kayak. A continuación se
muestra un desglose de lo que hace el código: */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap"
import imgGuarderia from "../../../assets/imagenes/guarderia3.png"
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg"


import img1 from "../../../assets/imagenes/guarderia.png"
import img2 from "../../../assets/imagenes/guarderia2.png"
import img3 from "../../../assets/imagenes/guarderia3.png"
import img4 from "../../../assets/imagenes/base.png"
import img5 from "../../../assets/imagenes/base2.png"
import Slider from "react-slick";


const Guarderia = () => {

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
                    <h2 data-aos="fade-up" className='text-center text-light tituloSobreNosotros mb-4'>Guarderia de kayak</h2>
                    <hr data-aos="fade-up" className="m-0 text-light my-4" />
                    <Row className='pt-3 pb-5'>
                        <Col md={6}>
                            <article data-aos="fade-up">
                                <img src={imgGuarderia} alt="imagen de kayak en rio" className='imgExcursion' />
                            </article>
                        </Col>
                        <Col md={6}>
                            <article data-aos="fade-up" className='p-3 text-center'>
                                <h5 className='textTitulo'>Guarderia de kayak</h5>
                                <ul className='p-0 m-0'>
                                    <li className='textSubtitulo'><span className='textExplicacion'>En las orillas del Dique Celestino Gelsi, ofrecemos una guardería de kayaks con capacidad para 66 embarcaciones. Cada kayak tiene su propio espacio asignado donde puedes almacenarlo junto con chalecos, remos y otros equipos dentro del box correspondiente. Nuestras instalaciones son seguras y cuentan con baños disponibles para tu comodidad. Si estás cansado de transportar tu kayak en el vehículo, ¡nuestra guardería es la solución perfecta!</span></li>
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre la Guarderia de kayak de TKC"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />Enviar Mensaje</Nav.Link>
                                </ul>
                            </article>
                        </Col>
                    </Row>
                    <Slider {...settings}>

                        <div data-aos="fade-up" className="image-container">
                            <img src={img1} alt="imagen de alquiler" className="img-galeria" />
                        </div>
                        <div data-aos="fade-up" className="image-container">
                            <img src={img2} alt="imagen de alquiler" className="img-galeria" />
                        </div>
                        <div data-aos="fade-up" className="image-container">
                            <img src={img3} alt="imagen de alquiler" className="img-galeria" />
                        </div>
                        <div data-aos="fade-up" className="image-container">
                            <img src={img4} alt="imagen de alquiler" className="img-galeria" />
                        </div>
                        <div data-aos="fade-up" className="image-container">
                            <img src={img5} alt="imagen de alquiler" className="img-galeria" />
                        </div>
                    </Slider>

                </Container>
            </div>
        </div>
    );
};

export default Guarderia;
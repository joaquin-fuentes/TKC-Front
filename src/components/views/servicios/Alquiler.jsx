import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap"
import imgAlquiler from "../../../assets/imagenes/quincho3.png"
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg"

const Alquiler = () => {
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
                </Container>
            </div>
        </div>
    );
};

export default Alquiler;
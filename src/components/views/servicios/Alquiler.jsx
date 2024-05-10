import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap"
import imgAlquiler from "../../../assets/imagenes/portada.jpg"
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg"

const Alquiler = () => {
    return (
        <div>
            <div className='fondoExcursiones'>
            <div className='fondoHeaderOscuro'> </div>
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
                                    <li className='textSubtitulo'>Descripcion: <br /><span className='textExplicacion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vero praesentium consequuntur in voluptas reiciendis pariatur optio nemo, voluptates error?</span></li>
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre ALQUILER DE QUINCHO PARA EVENTOS"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />Enviar Mensaje</Nav.Link>
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
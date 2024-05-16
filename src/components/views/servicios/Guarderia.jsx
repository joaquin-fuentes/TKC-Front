import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap"
import imgGuarderia from "../../../assets/imagenes/guarderia3.png"
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg"

const Guarderia = () => {
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
                </Container>
            </div>
        </div>
    );
};

export default Guarderia;
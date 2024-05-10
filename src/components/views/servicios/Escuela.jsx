import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap"
import imgEscuela from "../../../assets/imagenes/portada2.jpg"
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg"

const Escuela = () => {
    return (
        <div>
            <div className='fondoExcursiones'>
            <div className='fondoHeaderOscuro'> </div>

                <Container>
                    <h2 data-aos="fade-up" className='text-center text-light tituloSobreNosotros mb-4'>Escuela de kayak</h2>
                    <hr data-aos="fade-up" className="m-0 text-light my-4" />
                    <Row className='pt-3 pb-5'>
                        <Col md={6}>
                            <article data-aos="fade-up">
                                <img src={imgEscuela} alt="imagen de kayak en rio" className='imgExcursion' />
                            </article>
                        </Col>
                        <Col md={6}>
                            <article data-aos="fade-up" className='p-3 text-center'>
                                <h5 className='textTitulo'>Escuela de kayak adultos</h5>
                                <ul className='p-0 m-0'>
                                    <li className='textSubtitulo'>Descripcion: <br /><span className='textExplicacion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vero praesentium consequuntur in voluptas reiciendis pariatur optio nemo, voluptates error?</span></li>
                                    <li className='textSubtitulo'>Días de entrenamiento: <br /><span className='textExplicacion'>Miercoles de 16 a 18hs <br /> Sábados de 11 a 13hs y de 16 a 18hs</span></li>
                                    <li className='textSubtitulo'>Precio 4 clases mensuales: <span className='textExplicacion'>$8.000</span></li>
                                    <li className='textSubtitulo'>Precio 8 clases mensuales: <span className='textExplicacion'>$11.000</span></li>
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre la escuela de kayak de TKC"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />Enviar Mensaje</Nav.Link>
                                </ul>
                            </article>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Escuela;
import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap"
import imgEscuela from "../../../assets/imagenes/portada2.jpg"
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg"

const Escuela = () => {
    return (
        <div>
            <div className='fondoExcursiones'>
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
                                    <li className='textSubtitulo'>Descripcion: <br /><span className='textExplicacion'>La escuela de kayak ofrece clases para todas las edades y niveles, cubriendo técnicas de remo, seguridad, navegación y rescate. Además de enseñar habilidades básicas, promueve la conexión con la naturaleza y un estilo de vida activo.</span></li>
                                    <li className='textSubtitulo'>Días de entrenamiento: <br /><span className='textExplicacion'>Miercoles de 16 a 18hs <br /> Sábados de 11 a 13hs y de 16 a 18hs</span></li>
                              
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre la ESCUELA DE KAYAK DE TKC"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />Enviar Mensaje</Nav.Link>
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
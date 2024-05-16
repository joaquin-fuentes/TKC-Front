import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap"
import imgEstudiantiles from "../../../assets/imagenes/grupo4.png"
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg"

const Estudiantiles = () => {
    return (
        <div>
            <div className='fondoExcursiones'>
                <Container>
                    <h2 data-aos="fade-up" className='text-center text-light tituloSobreNosotros mb-4'>Grupos Estudiantiles</h2>
                    <hr data-aos="fade-up" className="m-0 text-light my-4" />
                    <Row className='pt-3 pb-5'>
                        <Col md={6}>
                            <article data-aos="fade-up">
                                <img src={imgEstudiantiles} alt="imagen de kayak en rio" className='imgExcursion' />
                            </article>
                        </Col>
                        <Col md={6}>
                            <article data-aos="fade-up" className='p-3 text-center'>
                                <h5 className='textTitulo'>Estudiantiles</h5>
                                <ul className='p-0 m-0'>
                                    <li className='textSubtitulo'><span className='textExplicacion'>¡En nuestra empresa también ofrecemos emocionantes excursiones para grupos estudiantiles! Sumérgete en aventuras inolvidables mientras exploras el dique con nuestras excursiones guiadas en kayak. Nuestros experimentados guías te llevarán a descubrir los secretos de la naturaleza mientras disfrutas de paisajes impresionantes. Después de la excursión, podrás relajarte y disfrutar de un picnic en nuestras instalaciones con vistas panorámicas al dique. ¡No te pierdas la oportunidad de crear recuerdos duraderos con tus compañeros de clase!</span></li>
                                   
                                    <li className='textSubtitulo'>Precio: <span className='textExplicacion'>$11.000</span></li>
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre GRUPOS ESTUDIANTILES"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />Enviar Mensaje</Nav.Link>
                                </ul>
                            </article>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Estudiantiles;
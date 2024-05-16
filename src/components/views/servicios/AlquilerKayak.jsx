import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap"
import imgAlquilerKayak from "../../../assets/imagenes/carpatkc.png"
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg"

const AlquilerKayak = () => {
    return (
        <div>
            <div className='fondoExcursiones'>
                <Container>
                    <h2 data-aos="fade-up" className='text-center text-light tituloSobreNosotros mb-4'>Alquiler de Kayaks</h2>
                    <hr data-aos="fade-up" className="m-0 text-light my-4" />
                    <Row className='pt-3 pb-5'>
                        <Col md={6}>
                            <article data-aos="fade-up">
                                <img src={imgAlquilerKayak} alt="imagen de kayak en rio" className='imgExcursion' />
                            </article>
                        </Col>
                        <Col md={6}>
                            <article data-aos="fade-up" className='p-3 text-center'>
                                <h5 className='textTitulo'>Alquiler de Kayaks</h5>
                                <ul className='p-0 m-0'>
                                    <li className='textSubtitulo'><span className='textExplicacion'>Nuestro servicio de alquiler de kayak ofrece turnos de 30 minutos, donde se incluye el remo, chaleco salvavidas y un instructivo detallado. Nuestros kayaks tienen capacidad para 2 o 3 personas, garantizando una experiencia segura y emocionante en el agua. ¡Ven y disfruta de la aventura con nosotros!</span><br /> Dias y horarios: <br /> <span className="textExplicacion">Lunes a Viernes de 12 a 18hs <br /> Sabados, Domingos y Feriados de 10 a 19hs</span></li>
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre ALQUILER DE KAYAK"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />Enviar Mensaje</Nav.Link>
                                </ul>
                            </article>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AlquilerKayak;
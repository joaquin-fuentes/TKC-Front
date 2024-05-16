import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap"
import imgCumpleanios from "../../../assets/imagenes/grupo3.png"
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg"

const Cumpleanios = () => {
    return (
        <div>
            <div className='fondoExcursiones'>
                <Container>
                    <h2 data-aos="fade-up" className='text-center text-light tituloSobreNosotros mb-4'>Cumpleaños infantiles</h2>
                    <hr data-aos="fade-up" className="m-0 text-light my-4" />
                    <Row className='pt-3 pb-5'>
                        <Col md={6}>
                            <article data-aos="fade-up">
                                <img src={imgCumpleanios} alt="imagen de kayak en rio" className='imgExcursion' />
                            </article>
                        </Col>
                        <Col md={6}>
                            <article data-aos="fade-up" className='p-3 text-center'>
                                <h5 className='textTitulo'>Cumpleaños infantiles</h5>
                                <ul className='p-0 m-0'>
                                    <li className='textSubtitulo'><span className='textExplicacion'>¿Quieres celebrar el cumpleaños de tu hijo/a de una manera única y emocionante? ¡Te ofrecemos una experiencia inolvidable con una excursión en kayak por el dique, guiada por nuestros expertos, seguida de una deliciosa comida en nuestro quincho! Después de explorar el agua en nuestras embarcaciones, podrán disfrutar de una hamburguesada o del menú que prefieras. Además, contamos con un amplio espacio equipado con todo lo necesario para juegos y diversión. ¡No te pierdas esta oportunidad de hacer que su cumpleaños sea memorable!</span></li>
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center"target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre CUMPLEAÑOS INFANTILES"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />Enviar Mensaje</Nav.Link>
                                </ul>
                            </article>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Cumpleanios;
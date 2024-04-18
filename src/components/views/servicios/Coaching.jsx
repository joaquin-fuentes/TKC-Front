import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap"
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import imgCoaching from "../../../assets/imagenes/coaching.jpg"
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg"

const Coaching = () => {
    return (
        <div>
            <Header></Header>
            <div className='fondoExcursiones'>
                <Container>
                    <h2 data-aos="fade-up" className='text-center text-light tituloSobreNosotros mb-4'>Coaching Empresarial</h2>
                    {/* kAYAK RIO LORO */}
                    <Row className='pt-3 pb-5'>
                        <Col md={6}>
                            <article data-aos="fade-up">
                                <img src={imgCoaching} alt="imagen de kayak en rio" className='imgExcursion' />
                            </article>
                        </Col>
                        <Col md={6}>
                            <article data-aos="fade-up" className='p-3 text-center'>
                                <h5 className='textTitulo'>Coaching para empresas y equipos deportivo</h5>
                                <ul className='p-0 m-0'>
                                    <li className='textSubtitulo'>Descripcion: <br /><span className='textExplicacion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vero praesentium consequuntur in voluptas reiciendis pariatur optio nemo, voluptates error?</span></li>
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center"target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre COACHING EMPRESARIAL"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />3816097754</Nav.Link>
                                </ul>
                            </article>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Coaching;
import React from 'react';
import { Container, Row, Col, Button, Card, NavLink } from "react-bootstrap"
import excursiones from "../../assets/imagenes/alquilerkayak.jpg"
import coaching from "../../assets/imagenes/coaching.jpg"
import escuelita from "../../assets/imagenes/escuelita.jpg"
import trekking from "../../assets/imagenes/trekking.jpg"
import portada2 from "../../assets/imagenes/portada2.jpg"
import { TbKayak } from "react-icons/tb";
import excursion2 from "../../assets/iconos/rafting.svg"



const Servicios = () => {
    return (
        <div className='bg-rojo' id="servicios">
            <Container className=''>
                <div data-aos="fade-up" className='d-flex flex-column justify-content-center align-items-center pt-3'>
                    <TbKayak className='iconoKayak text-light ' />
                    <h3 className='text-light m-0 p-4 text-center '> Nuestros Servicios</h3>
                </div>
                <Row className='pb-4 d-flex justify-content-center'>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>

                        <article data-aos="fade-up" class="articleCard mx-1 my-3">
                            <div class="imgCard">
                                <img src={excursiones} alt="imagen de excursiones" className='imgCard' />
                            </div>
                            <div class="overlay"></div>
                            <div class="textCard">
                                <h5 className='textCard'>Excursiones</h5>
                            </div>
                            <div class="btnCard">
                                <NavLink href='/excursiones' className='btnCard'>Ver más</NavLink>
                            </div>
                        </article>
                    </Col>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>
                    <article data-aos="fade-up" class="articleCard mx-1 my-3">
                            <div class="imgCard">
                                <img src={coaching} alt="imagen de coaching" className='imgCard' />
                            </div>
                            <div class="overlay"></div>
                            <div class="textCard">
                                <h5 className='textCard'>Coaching empresarial</h5>
                            </div>
                            <div class="btnCard">
                                <NavLink href='/coaching' className='btnCard'>Ver más</NavLink>
                            </div>
                        </article>
                    </Col>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>
                    <article data-aos="fade-up" class="articleCard mx-1 my-3">
                            <div class="imgCard">
                                <img src={escuelita} alt="imagen de escuelita" className='imgCard' />
                            </div>
                            <div class="overlay"></div>
                            <div class="textCard">
                                <h5 className='textCard'>Escuea de kayaks</h5>
                            </div>
                            <div class="btnCard">
                                <NavLink href='/escuela' className='btnCard'>Ver más</NavLink>
                            </div>
                        </article>
                    </Col>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>
                    <article data-aos="fade-up" class="articleCard mx-1 my-3">
                            <div class="imgCard">
                                <img src={portada2} alt="imagen de cumpleaños" className='imgCard' />
                            </div>
                            <div class="overlay"></div>
                            <div class="textCard">
                                <h5 className='textCard'>Cumpleaños infantiles </h5>
                            </div>
                            <div class="btnCard">
                                <NavLink href='/cumpleaños' className='btnCard'>Ver más</NavLink>
                            </div>
                        </article>
                    </Col>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>
                    <article data-aos="fade-up" class="articleCard mx-1 my-3">
                            <div class="imgCard">
                                <img src={excursiones} alt="imagen de alquiler quincho para eventos" className='imgCard' />
                            </div>
                            <div class="overlay"></div>
                            <div class="textCard">
                                <h5 className='textCard'>Quincho para eventos</h5>
                            </div>
                            <div class="btnCard">
                                <NavLink href='/alquiler' className='btnCard'>Ver más</NavLink>
                            </div>
                        </article>
                    </Col>

                </Row>
            </Container>
        </div>

    );
};

export default Servicios;
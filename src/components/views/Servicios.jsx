import React from 'react';
import { Container, Row, Col, Button, Card, NavLink } from "react-bootstrap"
import excursiones from "../../assets/imagenes/alquilerkayak.jpg"
import coaching from "../../assets/imagenes/coaching.jpg"
import escuelita from "../../assets/imagenes/escuelita.jpg"
import trekking from "../../assets/imagenes/trekking.jpg"
import portada2 from "../../assets/imagenes/portada2.jpg"
import { TbKayak } from "react-icons/tb";
import excursion2 from "../../assets/iconos/rafting.svg"
import iconoExcursion from "../../assets/iconos/kayakRojo3.png"
import iconoCoaching from "../../assets/iconos/grupoRojo.png"
import iconoEscuela from "../../assets/iconos/kayakRojo2.png"
import iconoCumple from "../../assets/iconos/globosRojo.png"
import iconoAsador from "../../assets/iconos/asadorRojo2.png"
import iconoGuarderia from "../../assets/iconos/kayakRojo4.png"


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
                            <img src={excursiones} alt="imagen de excursiones" className='imgCard' />
                            <div class="overlay"></div>
                            <img src={iconoExcursion} alt="icono de excursiones" className='iconoCard' />
                            <h5 className='textCard'>Excursiones</h5>
                            <NavLink href='/excursiones' className='btnCard'>Ver más</NavLink>
                        </article>
                    </Col>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>
                        <article data-aos="fade-up" class="articleCard mx-1 my-3">
                            <img src={coaching} alt="imagen de coaching" className='imgCard' />
                            <div class="overlay"></div>
                            <img src={iconoCoaching} alt="icono de coaching" className='iconoCard p-2' />
                            <h5 className='textCard'>Coaching empresarial</h5>
                            <NavLink href='/coaching' className='btnCard'>Ver más</NavLink>
                        </article>
                    </Col>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>
                        <article data-aos="fade-up" class="articleCard mx-1 my-3">
                            <img src={escuelita} alt="imagen de escuelita" className='imgCard' />
                            <div class="overlay"></div>
                            <img src={iconoEscuela} alt="icono de escuela de kayak" className='iconoCard p-1' />
                            <h5 className='textCard'>Escuea de kayaks</h5>
                            <NavLink href='/escuela' className='btnCard'>Ver más</NavLink>
                        </article>
                    </Col>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>
                        <article data-aos="fade-up" class="articleCard mx-1 my-3">
                            <img src={portada2} alt="imagen de cumpleaños" className='imgCard' />
                            <div class="overlay"></div>
                            <img src={iconoCumple} alt="icono de cumpleaños" className='iconoCard p-1' />
                            <h5 className='textCard'>Cumpleaños infantiles </h5>
                            <NavLink href='/cumpleaños' className='btnCard'>Ver más</NavLink>
                        </article>
                    </Col>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>
                        <article data-aos="fade-up" class="articleCard mx-1 my-3">
                            <img src={excursiones} alt="imagen de alquiler quincho para eventos" className='imgCard' />
                            <div class="overlay"></div>
                            <h5 className='textCard'>Quincho para eventos</h5>
                            <img src={iconoAsador} alt="icono de asador" className='iconoCard' />
                            <NavLink href='/alquiler' className='btnCard'>Ver más</NavLink>
                        </article>
                    </Col>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>
                        <article data-aos="fade-up" class="articleCard mx-1 my-3">
                            <img src={escuelita} alt="imagen de guarderia de kayak" className='imgCard' />
                            <div class="overlay"></div>
                            <img src={iconoGuarderia} alt="icono de guarderia de kayak" className='iconoCard p-1' />
                            <h5 className='textCard'>Guarderia de Kayaks</h5>
                            <NavLink href='/guarderia' className='btnCard'>Ver más</NavLink>
                        </article>
                    </Col>

                </Row>
            </Container>
        </div>

    );
};

export default Servicios;
import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { RiContactsFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const Contacto = () => {
    return (
        <Container>
            <div className='d-flex flex-column justify-content-center align-items-center pt-3 text-rojo' id='contacto'>
                <RiContactsFill className='iconoKayak ' />
                <h3 className=' m-0 p-4 text-center '> Podes contactarnos por whatsapp o cualquiera de nuestras redes sociales</h3>
                <Row>
                    <Col md={4}>
                        <article className='d-flex flex-column justify-content-center align-items-center p-3 text-center'>
                            <FaWhatsapp className='iconoWp' />
                            <p className='textRedSocialContacto'>3813097754</p>
                        </article>
                    </Col>
                    <Col md={4}>
                        <article className='d-flex flex-column justify-content-center align-items-center p-3 text-center'>
                            <FaFacebook className='iconoFb' />
                            <p className='textRedSocialContacto'>Tucuman kayak club</p>
                        </article>
                    </Col>
                    <Col md={4}>
                        <article className='d-flex flex-column justify-content-center align-items-center p-3 text-center'>
                           <FaInstagram className='iconoFb' />
                            <p className='textRedSocialContacto'>@TucumankayakClub</p>
                        </article>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Contacto;
import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap"
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
                        <Nav.Link target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre los servicios de Tucuman Kayak Club" className='d-flex flex-column justify-content-center align-items-center p-3 text-center'>
                            <FaWhatsapp className='iconoWp' />
                            <p className='textRedSocialContacto'>3813097754</p>
                        </Nav.Link>
                    </Col>
                    <Col md={4}>
                        <Nav.Link target='_blank' href="https://www.facebook.com/tkcturismoaventura/" className='d-flex flex-column justify-content-center align-items-center p-3 text-center'>
                            <FaFacebook className='iconoFb' />
                            <p className='textRedSocialContacto'>Tucuman kayak club</p>
                        </Nav.Link>
                    </Col>
                    <Col md={4}>
                        <Nav.Link  target='_blank' href="https://www.instagram.com/tucumankayakclub/?hl=es" className='d-flex flex-column justify-content-center align-items-center p-3 text-center'>
                           <FaInstagram className='iconoFb' />
                            <p className='textRedSocialContacto'>@TucumankayakClub</p>
                        </Nav.Link>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Contacto;
/* Este fragmento de código es un componente de React llamado "Contacto" que representa una sección de
contacto de un sitio web. Incluye varios elementos, como íconos de WhatsApp, Facebook e Instagram,
junto con enlaces a esas plataformas de redes sociales. El componente también incluye un componente
de formulario `CrearMensaje` para crear un mensaje. */
import React from 'react';
import { Container, Row, Col, Nav, Form, Button } from "react-bootstrap"
import { RiContactsFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import CrearMensaje from './CrearMensaje';





const Contacto = () => {
    return (
        <div className='bg-rojo'>
            <Container>
                <div className='d-flex flex-column justify-content-center align-items-center pt-3' id='dondeencontrarnos'>
                    <Row data-aos="fade-up" id='contacto' className='py-3'>
                        <RiContactsFill data-aos="fade-up" className='iconoKayak ' />
                        <h3 data-aos="fade-up" className=' m-0 p-4 text-center '>Cómo contactarte con nosotros?</h3>
                        <p data-aos="fade-up" className='text-center '> Podes contactarte con nosotros por whatsapp o por cualquiera de nuestras redes sociales dando click en los siguientes iconos</p>
                        <Col md={4}>
                            <Nav.Link data-aos="fade-up" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre los servicios de Tucuman Kayak Club" className='d-flex flex-column justify-content-center align-items-center p-3 text-center'>
                                <FaWhatsapp className='iconoWp iconoContacto' />
                                <p className='textRedSocialContacto'>3813097754</p>
                            </Nav.Link>
                        </Col>
                        <Col md={4}>
                            <Nav.Link data-aos="fade-up" target='_blank' href="https://www.facebook.com/tkcturismoaventura/" className='d-flex flex-column justify-content-center align-items-center p-3 text-center'>
                                <FaFacebook className='iconoFb iconoContacto' />
                                <p className='textRedSocialContacto'>Tucuman kayak club</p>
                            </Nav.Link>
                        </Col>
                        <Col md={4} className='mb-4'>
                            <Nav.Link data-aos="fade-up" target='_blank' href="https://www.instagram.com/tucumankayakclub/?hl=es" className='d-flex flex-column justify-content-center align-items-center p-3 text-center'>
                                <FaInstagram className='iconoFb iconoContacto' />
                                <p className='textRedSocialContacto'>@TucumankayakClub</p>
                            </Nav.Link>
                        </Col>

                        <CrearMensaje></CrearMensaje>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Contacto;
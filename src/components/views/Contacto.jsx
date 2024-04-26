import React from 'react';
import { Container, Row, Col, Nav, Form, Button } from "react-bootstrap"
import { RiContactsFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";





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
                        <Col md={4}>
                            <Nav.Link data-aos="fade-up" target='_blank' href="https://www.instagram.com/tucumankayakclub/?hl=es" className='d-flex flex-column justify-content-center align-items-center p-3 text-center'>
                                <FaInstagram className='iconoFb iconoContacto' />
                                <p className='textRedSocialContacto'>@TucumankayakClub</p>
                            </Nav.Link>
                        </Col>
                        <h3 data-aos="fade-up" className='text-center my-4  '>¡Dejanos tu mensaje!</h3>
                        <Form data-aos="fade-up" className='d-flex  flex-column'>
                            <div className='d-flex'>
                                <Col md={6}>
                                    <Form.Group className="mb-3 px-3" controlId="">
                                        <Form.Label>Nombre Completo</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese su nombre completo aquí" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3 px-3" controlId="">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                                    </Form.Group>
                                </Col>
                            </div>
                            <Col md={12}>
                                <Form.Group className="mb-3 px-3" controlId="">
                                    <Form.Label>Mensaje</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder='Ingrese aquí su mensaje' />
                                </Form.Group>
                                <div className="text-center w-100">
                                    <Button className='btn btn-enviar  mx-3 mt-3 w-25'>Enviar</Button>
                                </div>
                            </Col>
                        </Form>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Contacto;
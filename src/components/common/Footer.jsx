import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap"
import logoTransparente from "../../assets/imagenes/logoTransparente.png"
import facebook from "../../assets/imagenes/icons8-facebook.svg"
import whatsapp from "../../assets/imagenes/icons8-whatsapp.svg"
import instagram from "../../assets/imagenes/icons8-instagram.svg"


const Footer = () => {
    return (
        <Container fluid className='bg-dark text-light p-2 d-flex justify-content-around'>
            <Row>
                <Col lg="4">
                    <section className='p-1 d-flex flex-column justify-content-center align-items-center'>
                        <img src={logoTransparente} alt="logo tkc" className='logotkc-footer' />
                        <Nav className="">
                            <Nav.Link className="text-light me-1 text-header" href="#"><img src={facebook} className='icono-header' alt="facebook" /></Nav.Link>
                            <Nav.Link className="text-light me-1 text-header" href="#"><img src={whatsapp} className='icono-header' alt="whatsapp" /></Nav.Link>
                            <Nav.Link className="text-light me-1 text-header" href="#"><img src={instagram} className='icono-header' alt="instagram" /></Nav.Link>
                        </Nav>
                    </section>
                </Col>
                <Col lg="4">
                    <section className='p-3 d-flex flex-column justify-content-center align-items-center'>
                        <h4>Seccion 2</h4>
                        <a href="">Inicio</a>
                        <a href="">Servicios</a>
                        <a href="">Contacto</a>
                        <a href="">Nosotros</a>
                    </section>
                </Col>
                <Col lg="4">
                    <section className='p-3 d-flex flex-column justify-content-center align-items-center'>
                        <h4>Seccion 2</h4>
                        <a href="">Inicio</a>
                        <a href="">Servicios</a>
                        <a href="">Contacto</a>
                        <a href="">Nosotros</a>
                    </section>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
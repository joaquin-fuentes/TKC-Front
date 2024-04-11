import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap"
import logoRojo from "../../assets/imagenes/logoRojo.jpg"
import facebook from "../../assets/imagenes/icons8-facebook.svg"
import whatsapp from "../../assets/imagenes/icons8-whatsapp.svg"
import instagram from "../../assets/imagenes/icons8-instagram.svg"
const Header = () => {
    return (
        <Navbar expand="lg" className=" navBar header">
        <Container>
            <Navbar.Brand href="#home" className='text-light fw-bold'> 
            <img src={logoRojo} alt="Logo joaquin fuentes" className='logoMenu rounded-circle me-1' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-secondary' />
            <Navbar.Collapse id="basic-navbar-nav " >
                <Nav className="contenedorEnlacesNav">
                    <Nav.Link className="text-light text-header text-right text-md-left" href="#">Inicio</Nav.Link>
                    <Nav.Link className="text-light text-header" href="#">Servicios</Nav.Link>
                    <Nav.Link className="text-light text-header" href="#contacto">Contacto</Nav.Link>
                    <Nav.Link className="text-light text-header" href="#">Nosotros</Nav.Link>
                </Nav>
                <Nav className="ms-auto contenedorImgHeader ">
                    <Nav.Link className="text-light me-1 text-header" href="#"><img src={facebook} className='icono-header' alt="facebook" /></Nav.Link>
                    <Nav.Link className="text-light me-1 text-header" href="#"><img src={whatsapp} className='icono-header' alt="whatsapp" /></Nav.Link>
                    <Nav.Link className="text-light me-1 text-header" href="#"><img src={instagram} className='icono-header' alt="instagram" /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;
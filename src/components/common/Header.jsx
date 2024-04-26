import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap"
import logoTransparente from "../../assets/imagenes/logoTransparente.png"
import facebook from "../../assets/imagenes/icons8-facebook.svg"
import whatsapp from "../../assets/imagenes/icons8-whatsapp.svg"
import instagram from "../../assets/imagenes/icons8-instagram.svg"
import { CgMenuRound } from "react-icons/cg";


const Header = () => {
    return (
        <Navbar expand="lg" className=" navBar header">
            <Container>
                <Navbar.Brand href="/#inicio" className='text-light fw-bold p-1'>
                    <img src={logoTransparente} alt="Logo joaquin fuentes" className='logoMenu me-1 bg-rojo ' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='narbarToggle' >
                    <CgMenuRound className='menuHamburguesa'/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav " >
                    <Nav className="contenedorEnlacesNav">
                        <Nav.Link className="text-light text-header text-right text-md-left" href="/#inicio">Inicio</Nav.Link>
                        <Nav.Link className="text-light text-header" href="/#nosotros">Nosotros</Nav.Link>
                        <Nav.Link className="text-light text-header" href="/#servicios">Servicios</Nav.Link>
                        <Nav.Link className="text-light text-header" href="/#dondeencontrarnos">Donde encontrarnos</Nav.Link>
                        <Nav.Link className="text-light text-header" href="/#contacto">Contacto</Nav.Link>
                        <Nav.Link className="text-light text-header" href="/administrador">Administrador</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto contenedorImgHeader ">
                        <Nav.Link className="text-light me-1 text-header" target='_blank' href="https://www.facebook.com/tkcturismoaventura/"><img src={facebook} className='icono-header' alt="facebook" /></Nav.Link>
                        <Nav.Link className="text-light me-1 text-header" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre los servicios de Tucuman Kayak Club"><img src={whatsapp} className='icono-header' alt="whatsapp" /></Nav.Link>
                        <Nav.Link className="text-light me-1 text-header" target='_blank' href="https://www.instagram.com/tucumankayakclub/?hl=es"><img src={instagram} className='icono-header' alt="instagram" /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
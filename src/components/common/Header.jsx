import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logoTransparente from "../../assets/logos/logoLetraRoja.png";
import facebook from "../../assets/imagenes/icons8-facebook.svg";
import whatsapp from "../../assets/imagenes/icons8-whatsapp.svg";
import instagram from "../../assets/imagenes/icons8-instagram.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";



const Header = ({ usuarioLogueado, setUsuarioLogueado }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Cambia el estado para abrir/cerrar el menú
    };
    const logout = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¿Deseas cerrar sesión?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí'
        }).then((result) => {
            if (result.isConfirmed) {
                // Navegar a la ruta principal y borrar session storage
                navigate("/");
                sessionStorage.removeItem("usuarioLogueado");
                setUsuarioLogueado({});
                Swal.fire(
                    '¡Listo!',
                    'Sesión cerrada',
                    'success'
                );
            }
        });
    };

    return (
        <Navbar expand="lg" className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <Container>
                <Navbar.Brand href="/#inicio" className='text-light fw-bold p-1'>
                    <img src={logoTransparente} alt="Logo" className='logoMenu me-1' />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className='narbarToggle'
                    onClick={toggleMenu} // Maneja el clic para abrir/cerrar el menú
                    style={{ border: "none" }} // Evita el borde negro
                >
                    {menuOpen ? <IoClose className='menuHamburguesaAbierto transitionMenu' /> : <GiHamburgerMenu className='menuHamburguesaCerrado transitionMenu' />}
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="contenedorEnlacesNav">
                        <Nav.Link className="text-light text-header text-right text-md-left" href="/#inicio">Inicio</Nav.Link>
                        <Nav.Link className="text-light text-header" href="/#nosotros">Nosotros</Nav.Link>
                        <Nav.Link className="text-light text-header" href="/#servicios">Servicios</Nav.Link>
                        <Nav.Link className="text-light text-header" href="/#dondeencontrarnos">Donde encontrarnos</Nav.Link>
                        <Nav.Link className="text-light text-header" href="/#contacto">Contacto</Nav.Link>
                        {
                            usuarioLogueado.rol === "administrador" ?
                                <>
                                    <Nav.Link className="text-light text-header" href="/administrador">Administrador</Nav.Link>
                                    <Nav.Link className="text-light text-header" onClick={logout}>Cerrar sesion</Nav.Link>
                                </>
                                :
                                <></>
                        }
                    </Nav>
                    <Nav className="ms-auto contenedorImgHeader">
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

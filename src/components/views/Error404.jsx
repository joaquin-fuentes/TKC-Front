import React from 'react';
import {Container, Nav} from "react-bootstrap"
import imgError from "../../assets/imagenes/error404.png"

const Error404 = () => {
    return (
        <div>
             <Container fluid className="contenedorPrincipalError d-flex justify-content-center align-items-center" id='inicio'>
                <section data-aos="fade-up" className='d-flex justify-content-center align-items-center flex-column mb-1 '>
                    <img src={imgError} alt="Logo de TKC" className='logoTkcInicio' />
                    <h4 className='text-light'>Página no encontrada</h4>
                    <Nav.Link href={"/"} className='w-50 p-1 btn btn-rojo mt-3'>Volver a Inicio</Nav.Link>
                </section>
            </Container>
        </div>
    );
};

export default Error404;
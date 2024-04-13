import React from 'react';
import {Container, Button} from "react-bootstrap"
import logoTransparente from "../../assets/imagenes/logoTransparente.png"


const Inicio = () => {
    return (
        <Container fluid className="contenedorPrincipal d-flex justify-content-center align-items-center">
            <section className='d-flex justify-content-center align-items-center flex-column mb-4'>
                <img src={logoTransparente} alt="Logo de TKC" className='logoTkcInicio'/>
                <Button variant="danger" className='w-50'>Servicios</Button>
            </section>
        </Container>
    );
};

export default Inicio;
import React from 'react';
import {Container, Button} from "react-bootstrap"
import logoTransparente from "../../assets/imagenes/logoTransparente.png"


const Inicio = () => {
    return (
        <Container fluid className="contenedorPrincipal d-flex justify-content-center align-items-center">
            <section className='d-flex justify-content-center align-items-center flex-column'>
                <img src={logoTransparente} alt="Logo de TKC" className='logoTkcInicio'/>
                <Button variant="danger">Servicios</Button>
            </section>
        </Container>
    );
};

export default Inicio;
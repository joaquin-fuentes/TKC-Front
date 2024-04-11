import React from 'react';
import { Container, Row, Col, NavLink } from "react-bootstrap"
import excursiones from "../../assets/imagenes/escuelita.jpg"
import coaching from "../../assets/imagenes/coaching.jpg"
import escuelita from "../../assets/imagenes/portada2.jpg"
import alquiler from "../../assets/imagenes/portada.jpg"


const Servicios = () => {
    return (
        <div className='bg-danger'>
            <Container className=''>
                <h3 className='text-light m-0 p-4 text-center text-decoration-underline'> Nuestros Servicios</h3>
                <Row className='pb-4'>
                    <Col md="6" lg="6">
                        <NavLink href='/'  className='d-flex justify-content-center align-items-center  m-3'>
                            <img src={excursiones} alt="foto excursiones" className='w-100 imagenServicio' />
                            <h4 className='text-img'>Excursiones</h4>
                        </NavLink>
                    </Col>
                    <Col md="6" lg="6">
                        <NavLink href='/' className='d-flex justify-content-center align-items-center  m-3'>
                            <img src={coaching} alt="foto coaching" className='w-100 imagenServicio' />
                            <h4 className='text-img'>Coaching Empresarial</h4>
                        </NavLink>
                    </Col>
                    <Col md="6" lg="6">
                        <NavLink href='/' className='d-flex justify-content-center align-items-center  m-3'>
                            <img src={escuelita} alt="foto escuelita" className='w-100 imagenServicio' />
                            <h4 className='text-img'>Escuela de Kayak</h4>
                        </NavLink>
                    </Col>
                    <Col md="6" lg="6">
                        <NavLink href='/' className='d-flex justify-content-center align-items-center  m-3'>
                            <img src={alquiler} alt="foto alquiler" className='w-100 imagenServicio' />
                            <h4 className='text-img'>Alquiler de quincho para eventos</h4>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Servicios;
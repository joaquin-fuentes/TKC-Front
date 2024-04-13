import React from 'react';
import { Container, Row, Col, Button, Card, NavLink } from "react-bootstrap"
import excursiones from "../../assets/imagenes/alquilerkayak.jpg"
import coaching from "../../assets/imagenes/coaching.jpg"
import escuelita from "../../assets/imagenes/escuelita.jpg"
import trekking from "../../assets/imagenes/trekking.jpg"
import portada2 from "../../assets/imagenes/portada2.jpg"
import { TbKayak } from "react-icons/tb";



const Servicios = () => {
    return (
        <div className='bg-danger'>
            <Container className=''>
                <div className='d-flex flex-column justify-content-center align-items-center pt-3'>
                    <TbKayak className='iconoKayak text-light ' />
                    <h3 className='text-light m-0 p-4 text-center '> Nuestros Servicios</h3>
                </div>
                <Row className='pb-4 d-flex justify-content-center'>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>
                        <Card className="bg-dark text-white p-0 card-servicio text-center">
                            <Card.Img src={excursiones} alt="Card image" className='card-img' />
                            <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
                                <Card.Title className='text-card'>Excursiones</Card.Title>
                                <NavLink className='w-50  btn-card'>Ver más</NavLink>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>
                        <Card className="bg-dark text-white p-0 card-servicio text-center">
                            <Card.Img src={escuelita} alt="Card image" className='w-100 h-100 card-img' />
                            <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
                                <Card.Title className='text-card'>Escuela de kayak</Card.Title>
                                <NavLink className='w-50  btn-card'>Ver más</NavLink>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>
                        <Card className="bg-dark text-white p-0 card-servicio text-center">
                            <Card.Img src={coaching} alt="Card image" className='w-100 h-100 card-img' />
                            <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
                                <Card.Title className='text-card'>Coaching empresarial</Card.Title>
                                <NavLink className='w-50  btn-card'>Ver más</NavLink>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>
                        <Card className="bg-dark text-white p-0 card-servicio text-center">
                            <Card.Img src={portada2} alt="Card image" className='w-100 h-100 card-img' />
                            <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
                                <Card.Title className='text-card'>Cumpleaños para niños</Card.Title>
                                <NavLink className='w-50  btn-card'>Ver más</NavLink>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md="6" lg="4" className='d-flex justify-content-center'>
                        <Card className="bg-dark text-white p-0 card-servicio text-center">
                            <Card.Img src={portada2} alt="Card image" className='w-100 h-100 card-img' />
                            <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
                                <Card.Title className='text-card'>Alquiler de quincho para eventos</Card.Title>
                                <NavLink className='w-50  btn-card'>Ver más</NavLink>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>

    );
};

export default Servicios;
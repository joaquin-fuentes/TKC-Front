import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap"
import carpatkc from "../../assets/imagenes/carpatkc.png"
import logoTkc from "../../assets/logos/logoTransparente.png"



const DondeEncontrarnos = () => {
    return (
        <div className='mb-3'>
            <Container >
                <div className='d-flex flex-column justify-content-center align-items-center pt-3 text-rojo' id='dondeencontrarnos'>
                    <div data-aos="fade-up">
                        <FaMapMarkerAlt className='iconoKayak ' />
                    </div>
                    <h3 data-aos="fade-up" className=' m-0 p-4 text-center '> Donde encontrarnos</h3>
                    <Row data-aos="fade-up">
                        <p className='p-2 text-center'>Estamos ubicados en El Cadillal (20km al norte de San Miguel de Tucumán), más precisamente en el dique Celestino Gelsi, en el sector de playa, justo debajo del bar La Isla, a simple vista podras ubicar nuestra carpa roja de TKC</p>
                        <Col md={6}>
                            <div className='mb-3 w-100 h-100 contenedorCarpaLogo '>
                                <img src={carpatkc} alt="carpa tkc" className=' carpaTkc ' />
                                <img src={logoTkc} alt="logo de tkc" className='logoTkcImg' />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='mb-3 w-100 h-100 '>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20176.22637576159!2d-65.2160793826423!3d-26.626489869886584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942265fafc14b407%3A0xab872a32ac3e22b4!2sTucum%C3%A1n%20Kayak%20Club%20(TKC)!5e0!3m2!1ses!2sar!4v1713450891823!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='ubicacion'></iframe>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

        </div>

    );
};

export default DondeEncontrarnos;
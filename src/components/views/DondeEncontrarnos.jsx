import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import carpatkc from "../../assets/imagenes/base.png";

/**
 * Componente funcional que muestra la ubicación de Tucumán Kayak Club (TKC) y proporciona instrucciones para llegar.
 * Incluye un mapa interactivo de Google Maps y una imagen representativa.
 */
const DondeEncontrarnos = () => {
    return (
        <div className='mb-3'>
            {/* Contenedor principal con Bootstrap */}
            <Container>
                {/* Sección principal centrada con efecto de desvanecimiento hacia arriba */}
                <div className='d-flex flex-column justify-content-center align-items-center pt-3 text-rojo' id='dondeencontrarnos'>
                    {/* Icono de ubicación */}
                    <div data-aos="fade-up">
                        <FaMapMarkerAlt className='iconoKayak ' />
                    </div>
                    {/* Título */}
                    <h3 data-aos="fade-up" className='m-0 p-4 text-center'> Donde encontrarnos</h3>
                    {/* Contenido principal */}
                    <Row data-aos="fade-up">
                        {/* Descripción de la ubicación */}
                        <p className='p-2 text-center'>
                            Nuestra ubicación se encuentra en El Cadillal, a tan solo 20 km al norte de San Miguel de Tucumán, específicamente en el dique Celestino Gelsi. Para llegar, desde la rotonda del Cadillal, deben tomar el primer desvío a la izquierda y luego, a 50 metros, girar a la derecha, por la calle que bordea un amplio espacio verde y una cancha de rugby. Al final de esta calle, encontrarán las playas del dique Celestino Gelsi y nuestra base operativa. ¡Los esperamos con ansias para vivir una experiencia inolvidable!
                        </p>
                        {/* Imagen representativa */}
                        <Col md={6}>
                            <img src={carpatkc} alt="Carpa de TKC" className='carpaTkc' />
                        </Col>
                        {/* Mapa de Google Maps */}
                        <Col md={6}>
                            <div className='mb-3 w-100 h-100'>
                                {/* Embed de Google Maps con la ubicación de TKC */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20176.22637576159!2d-65.2160793826423!3d-26.626489869886584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942265fafc14b407%3A0xab872a32ac3e22b4!2sTucum%C3%A1n%20Kayak%20Club%20(TKC)!5e0!3m2!1ses!2sar!4v1713450891823!5m2!1ses!2sar"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className='ubicacion'
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default DondeEncontrarnos;

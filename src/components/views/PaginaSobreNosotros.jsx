import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import equipoTKC from "../../assets/imagenes/equipotkc.jpg"
import carpaTkc from "../../assets/imagenes/carpatkc.png"
import logoTkc from "../../assets/logos/logoTransparente.png"

const PaginaSobreNosotros = () => {
    return (
        <div className='fondoSobreNosotros text-light'>
            <Container>
                 <h2 data-aos="fade-up" className='text-center tituloSobreNosotros mb-4'>Sobre Nosotros</h2>
                <hr data-aos="fade-up" className="m-0 text-light my-4" /> 
                <Row>
                    <Col md={6}>
                        <article data-aos="fade-up">
                            {/* <h5>Nuestro equipo</h5> */}
                            <img src={equipoTKC} alt="imagen equipo tkc" className='w-100 rounded p-3' />
                        </article>
                    </Col>
                    <Col md={6}>
                        <article data-aos="fade-up" className='p-3 text-center'>
                            <p className='textSobreNosotros'>¡Bienvenidos a Tucumán Kayak Club (TKC), donde convertimos simples momentos en emocionantes aventuras! Con más de 15 años de experiencia en el Turismo Activo y los deportes alternativos, en TKC nos enorgullece ofrecer experiencias seguras y llenas de diversión para todos nuestros clientes. <br />

                                Nuestro equipo está conformado por profesionales con conocimientos especializados y una pasión inigualable por lo que hacemos. Hemos invertido tiempo en capacitaciones tanto a nivel nacional como internacional, obteniendo certificaciones en primeros auxilios, seguridad y rescate, tanto en aguas blancas como en entornos agrestes. Además, nuestra amplia experiencia en el manejo de grupos nos permite garantizar una atención personalizada y adaptada a las necesidades de cada individuo. <br />

                                Contamos con una flota de 30 kayaks dobles, cada uno equipado con chalecos salvavidas y remos de alta calidad y homologados. También disponemos de todo el equipo necesario para la práctica de Rapel, incluyendo cuerdas, arneses, mosquetones y más. <br />

                                Nos enorgullece informar que contamos con la habilitación correspondiente emitida por el Ente Autárquico Tucumán Turismo para realizar nuestras excursiones, y cumplimos con todos los requisitos legales, seguros e inscripciones necesarias. <br />

                                En TKC, estamos comprometidos con la seguridad, la diversión y la excelencia en cada una de nuestras actividades. ¡Únete a nosotros y descubre un mundo de aventuras emocionantes!</p>
                        </article>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default PaginaSobreNosotros;
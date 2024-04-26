import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap"
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import canyonning from "../../../assets/imagenes/trekking.jpg"
import kayakrio from "../../../assets/imagenes/fondoKayak2.jpg"
import kayakdique from "../../../assets/imagenes/remando.jpg"
import rappeldique from "../../../assets/imagenes/rappel.jpg"
import rappelaguaschiquitas from "../../../assets/imagenes/rappelac.jpg"
import viaducto from "../../../assets/imagenes/viaducto2.jpg"
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg"





const Excursiones = () => {
    return (
        <div>
            <Header></Header>
            <div className='fondoExcursiones'>
                <Container>
                    <h2 data-aos="fade-up" className='text-center text-light tituloSobreNosotros mb-4'>Excursiones</h2>

                    {/* kAYAK RIO LORO */}
                    <Row>
                        <Col md={6}>
                            <article data-aos="fade-up">
                                <img src={kayakrio} alt="imagen de kayak en rio" className='imgExcursion' />
                            </article>
                        </Col>
                        <Col md={6}>
                            <article data-aos="fade-up" className='p-3 text-center'>
                                <h5 className='textTitulo'>Kayak en el Río Loro</h5>
                                <ul className='p-0 m-0'>
                                    <li className='textSubtitulo'>Horario de salida: <span className='textExplicacion'>09:00 o 14:00hs</span></li>
                                    <li className='textSubtitulo'>Descripcion: <span className='textExplicacion'>Nos encontramos en el Cadillal donde se encuentra el río Loro, ideal para iniciarse en este deporte. El río cuenta con una serie de rápidos clase 1 que nos ofrecerán adrenalina, pero al mismo tiempo, seguridad. Comenzaremos con un mini-curso instructivo a orillas del río para luego hacer un descenso de aproximadamente 1 y ½ hs. </span></li>
                                    <li className='textSubtitulo'>Incluye: <span className='textExplicacion'>Guía, mini-curso instructivo, snack, todo el equipo necesario.</span></li>
                                    <li className='textSubtitulo'>Recorrido: <span className='textExplicacion'>5km de río</span></li>
                                    <li className='textSubtitulo'>Duración total: <span className='textExplicacion'>4hs</span></li>
                                    <li className='textSubtitulo'>Precio: <span className='textExplicacion'>$2.800</span></li>
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre la excursion de KAYAK EN EL RIO LORO"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />3816097754</Nav.Link>
                                </ul>
                            </article>
                        </Col>
                    </Row>
                    {/* KAYAK DIQUE */}
                    <Row className='py-4 d-flex flex-row-reverse'>
                        <Col md={6}>
                            <article data-aos="fade-up">
                                <img src={kayakdique} alt="imagen de kayak en dique" className='imgExcursion' />
                            </article>
                        </Col>
                        <Col md={6}>
                            <article data-aos="fade-up" className='p-3 text-center'>
                                <h5 className='textTitulo'>Kayak en el Dique</h5>
                                <ul className='p-0 m-0'>
                                    <li className='textSubtitulo'>Horario de salida: <span className='textExplicacion'>09:00 o 14:00hs</span></li>
                                    <li className='textSubtitulo'>Descripcion: <span className='textExplicacion'>Nos encontramos en El Cadillal para llegar a su gran espejo de agua, donde después de un curso instructivo remaremos en las mansas aguas del dique haciendo un recorrido por sus bahías y conociendo su hermosa naturaleza. </span></li>
                                    <li className='textSubtitulo'>Incluye: <span className='textExplicacion'>Guía, curso instructivo, snack  y todo el equipo necesario.</span></li>
                                    <li className='textSubtitulo'>Recorrido: <span className='textExplicacion'>4km</span></li>
                                    <li className='textSubtitulo'>Duración total: <span className='textExplicacion'>3hs</span></li>
                                    <li className='textSubtitulo'>Precio: <span className='textExplicacion'>$1.400</span></li>
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre la excursion de KAYAK EN EL DIQUE"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />3816097754</Nav.Link>
                                </ul>
                            </article>
                        </Col>
                    </Row>
                    {/* KAYAK EN EL DIQUE + RAPPEL */}
                    <Row className='py-4 '>
                        <Col md={6}>
                            <article data-aos="fade-up">
                                <img src={rappeldique} alt="imagen de rappel en el dique" className='imgExcursion' />
                            </article>
                        </Col>
                        <Col md={6}>
                            <article data-aos="fade-up" className='p-3 text-center'>
                                <h5 className='textTitulo'>Kayak en el Dique + Rappel</h5>
                                <ul className='p-0 m-0'>
                                    <li className='textSubtitulo'>Horario de salida: <span className='textExplicacion'>09:00 o 14:00hs</span></li>
                                    <li className='textSubtitulo'>Descripcion: <span className='textExplicacion'>Nos encontramos en El Cadillal para llegar a su gran espejo de agua, donde después de un curso instructivo remaremos en las mansas aguas del dique haciendo un recorrido por sus bahías, al llegar a la tercera, descenderemos una pared de 15 mts. de alto con sogas y arneses para sumarle adrenalina a nuestra aventura. </span></li>
                                    <li className='textSubtitulo'>Incluye: <span className='textExplicacion'>Guía, curso instructivo, snack  y todo el equipo necesario.</span></li>
                                    <li className='textSubtitulo'>Recorrido: <span className='textExplicacion'>4km</span></li>
                                    <li className='textSubtitulo'>Duración total: <span className='textExplicacion'>4hs</span></li>
                                    <li className='textSubtitulo'>Precio: <span className='textExplicacion'>$2.100</span></li>
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre la excursion de KAYAK EN EL DIQUE + RAPPEL"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />3816097754</Nav.Link>
                                </ul>
                            </article>
                        </Col>
                    </Row>
                    {/* Canyoning en la Reserva Aguas Chiquitas*/}
                    <Row className='py-4 d-flex flex-row-reverse'>
                        <Col md={6}>
                            <article data-aos="fade-up">
                                <img src={canyonning} alt="imagen de canyonning en aguas chiquitas" className='imgExcursion' />
                            </article>
                        </Col>
                        <Col md={6}>
                            <article data-aos="fade-up" className='p-3 text-center'>
                                <h5 className='textTitulo'>Canyoning en la Reserva Aguas Chiquitas</h5>
                                <ul className='p-0 m-0'>
                                    <li className='textSubtitulo'>Horario de salida: <span className='textExplicacion'>09:00</span></li>
                                    <li className='textSubtitulo'>Descripcion: <span className='textExplicacion'>Comenzamos con un trekking ascendiendo por el cerro Medina hasta llegar al cañón de Aguas Chiquitas, donde iniciamos la subida por el mismo. Durante todo el recorrido cruzaremos piletones de agua, escalaremos rocas y conviviremos con un paisaje de espesas arboledas y abundante vida silvestre, hasta llegar a una cascada de 50 mts. de alto. </span></li>
                                    <li className='textSubtitulo'>Incluye: <span className='textExplicacion'>Guía, curso instructivo, snack  y todo el equipo necesario.</span></li>
                                    <li className='textSubtitulo'>Recorrido: <span className='textExplicacion'>8km en el río</span></li>
                                    <li className='textSubtitulo'>Duración total: <span className='textExplicacion'>6hs</span></li>
                                    <li className='textSubtitulo'>Precio: <span className='textExplicacion'>$2.100</span></li>
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre la excursion de CANYONING EN LA RESERVA AGUAS CHIQUITAS"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />3816097754</Nav.Link>
                                </ul>
                            </article>
                        </Col>
                    </Row>
                    {/* Canyoning Aguas Chiquitas + Rappel */}
                    <Row className='py-4 '>
                        <Col md={6}>
                            <article data-aos="fade-up">
                                <img src={rappelaguaschiquitas} alt="imagen de rappel en aguas chiquitas" className='imgExcursion' />
                            </article>
                        </Col>
                        <Col md={6}>
                            <article data-aos="fade-up" className='p-3 text-center'>
                                <h5 className='textTitulo'>Canyoning Aguas Chiquitas + Rappel</h5>
                                <ul className='p-0 m-0'>
                                    <li className='textSubtitulo'>Horario de salida: <span className='textExplicacion'>09:00</span></li>
                                    <li className='textSubtitulo'>Descripcion: <span className='textExplicacion'>Comenzamos con un trekking ascendiendo por el cerro Medina hasta llegar al cañón de Aguas Chiquitas, donde iniciamos la subida por el mismo. Durante todo el recorrido cruzaremos piletones de agua, escalaremos rocas y conviviremos con un paisaje de espesas arboledas y abundante vida silvestre, hasta llegar a una cascada de 50 mts. de alto. Luego subiremos a conocer la segunda cascada de 25 mts. para luego descender por la primera cascada con cuerdas utilizando la técnica de rappel. La vuelta la hacemos por el rio, disfrutando de un paisaje y experiencias distintas. </span></li>
                                    <li className='textSubtitulo'>Incluye: <span className='textExplicacion'>Guía, curso instructivo, snack  y todo el equipo necesario.</span></li>
                                    <li className='textSubtitulo'>Recorrido: <span className='textExplicacion'>9km</span></li>
                                    <li className='textSubtitulo'>Duración total: <span className='textExplicacion'>7hs</span></li>
                                    <li className='textSubtitulo'>Precio: <span className='textExplicacion'>$3.500</span></li>
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre la excursion de CANYONING AGUAS CHIQUITAS + RAPPEL"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />3816097754</Nav.Link>
                                </ul>
                            </article>
                        </Col>
                    </Row>
                    {/*Rappel aéreo en el Viaducto El Saladillo*/}
                    <Row className='py-4 d-flex flex-row-reverse'>
                        <Col md={6}>
                            <article data-aos="fade-up">
                                <img src={viaducto} alt="imagen de rappel en el viaducto" className='imgExcursion' />
                            </article>
                        </Col>
                        <Col md={6}>
                            <article data-aos="fade-up" className='p-3 text-center'>
                                <h5 className='textTitulo'>Rappel aéreo en el Viaducto El Saladillo</h5>
                                <ul className='p-0 m-0'>
                                    <li className='textSubtitulo'>Horario de salida: <span className='textExplicacion'>09:00 o 14:00hs</span></li>
                                    <li className='textSubtitulo'>Descripcion: <span className='textExplicacion'>Nos encontramos en el Cadillal, para partir con destino a el Viaducto El Saladillo, donde apreciaremos esta imponente obra de arquitectura contemporánea. Realizaremos un pequeño ascenso para llegar a la parte superior del puente, donde haremos un anclaje para así, poder realizar el descenso aéreo en rappel. </span></li>
                                    <li className='textSubtitulo'>Incluye: <span className='textExplicacion'>Guía, curso instructivo, snack  y todo el equipo necesario.</span></li>
                                    <li className='textSubtitulo'>Recorrido: <span className='textExplicacion'>25 mts. en descenso.</span></li>
                                    <li className='textSubtitulo'>Duración total: <span className='textExplicacion'>2hs</span></li>
                                    <li className='textSubtitulo'>Precio: <span className='textExplicacion'>$1.400</span></li>
                                    <Nav.Link className="text-light mt-2 fs-5 d-flex justify-content-center align-items-center" target='_blank' href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre la excursion de RAPPEL AÉREO EN EL VIADUCTO EL SALADILLO"><img src={whatsapp} className='icono-header mx-1' alt="whatsapp" />3816097754</Nav.Link>
                                </ul>
                            </article>
                        </Col>
                    </Row>

                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Excursiones;
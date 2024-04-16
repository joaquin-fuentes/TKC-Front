import React from 'react';
import { Container,Nav } from "react-bootstrap"
import { MdKayaking } from "react-icons/md";


const Nosotros = () => {
    return (
        <div className='divSobreNosotros' id='nosotros'>
            <Container>
                <article data-aos="fade-up" className='d-flex flex-column justify-content-center align-items-center mb-4'>
                    <MdKayaking className='iconoKayak text-rojo mt-3' />
                    <h3 className='text-rojo m-0 p-4 text-center '>Somos una empresa de Turismo Aventura ubicada en El Cadillal</h3>
                    <p className='text-center'>
                        Tucumán Kayak Club es una empresa con más de 15 años de experiencia en Turismo Activo y deportes alternativos. Su equipo altamente capacitado garantiza experiencias seguras y divertidas, respaldadas por certificaciones en primeros auxilios, seguridad y rescate. Con 30 kayaks dobles de alta calidad y equipo completo para Rapel, ofrecen aventuras emocionantes. Están debidamente habilitados por el Ente Autárquico Tucumán Turismo, asegurando excursiones con todos los permisos y seguros necesarios. ¡Ven y únete a nosotros para vivir una experiencia inolvidable en la naturaleza!</p>
                    <Nav.Link href='/sobrenosotros' className='btn outline-rojo'>Sobre nosotros</Nav.Link>
                </article>
            </Container>
        </div>
    );
};

export default Nosotros;
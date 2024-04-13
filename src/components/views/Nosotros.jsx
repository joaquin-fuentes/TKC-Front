import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap"
import equipoTKC from "../../assets/imagenes/equipotkc.jpg"
import { MdKayaking } from "react-icons/md";


const Nosotros = () => {
    return (
        <div className='divSobreNosotros'>
            <Container>
                <article className='d-flex flex-column justify-content-center align-items-center mb-4'>
                    <MdKayaking className='iconoKayak text-danger mt-3' />
                    <h3 className='text-danger m-0 p-4 text-center '>Somos una empresa de Turismo Aventura ubicada en El Cadillal</h3>
                    <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi pariatur alias maiores dignissimos autem enim unde? Voluptatem ea perferendis veritatis, error eveniet sint nemo sit officiis natus soluta, aut quisquam?</p>
                    <Button variant='outline-danger' className=''>Sobre nosotros</Button>
                </article>
            </Container>
        </div>
    );
};

export default Nosotros;
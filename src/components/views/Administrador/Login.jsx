import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
const Login = () => {
    return (
        <div className='contenedorPrincipalLogin'>
            <Container>
                <Form data-aos="fade-up" className='text-light d-flex justify-content-center flex-column align-items-center'>
                    <h3>Iniciar sesion</h3>
                    <hr className="m-0 text-light my-4"/>
                    <Form.Group className="mb-3 w-50 formLogin" controlId="formBasicEmail">
                        <Form.Label>Usuario: </Form.Label>
                        <Form.Control type="email" placeholder="Ingrese aquí su nombre de usuario" />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 formLogin" controlId="formBasicPassword">
                        <Form.Label>Contraseña: </Form.Label>
                        <Form.Control type="password" placeholder="Ingrese aquí su contraseña" />
                    </Form.Group>
                    <Button variant="danger" type="submit" className='w-50 formLogin mt-4'>
                        Ingresar
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;
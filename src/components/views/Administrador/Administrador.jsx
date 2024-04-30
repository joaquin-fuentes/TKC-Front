import React from "react";
import { Container, Row, Col, Button, Nav, Table } from "react-bootstrap";
const Administrador = () => {
    return (
        <div>
            <div className="fondoAdmin">
                <Container className="pb-4">
                    <h2
                        data-aos="fade-up"
                        className="text-center text-light tituloSobreNosotros mb-4"
                    >
                        Panel de administrador
                    </h2>
                    <hr data-aos="fade-up" className="m-0 text-light mb-4" />
                    <Button data-aos="fade-up" className="mb-3 me-3" variant="outline-primary">Comentarios</Button>
                    <Button data-aos="fade-up" className="mb-3 me-3" variant="outline-success">Usuarios</Button>
                    <Button data-aos="fade-up" className="mb-3 me-3" variant="outline-warning">Servicios</Button>
                    <Button data-aos="fade-up" className="mb-3 me-3" variant="outline-secondary">Novedades</Button>
                    <Table
                        data-aos="fade-up"
                        striped
                        bordered
                        hover
                        responsive
                        size="sm"
                        variant="dark"
                        className="m-0"
                    >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className="email-col">Nombre</th>
                                <th className="email-col">Email</th>
                                <th className="mensaje-col">Mensaje</th>
                                <th className="fecha-col">Fecha</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Joaquin Fuentes</td>
                                <td className="email-col">joaquin.fuentes1327@gmail.com</td>
                                <td className="mensaje-col">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non facilis et culpa harum nobis ipsa deserunt illum voluptatibus.
                                </td>
                                <td>26/04/2024</td>
                                <td>
                                    <Button variant="danger">x</Button>
                                    <Button variant="primary">x</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Joaquin Fuentes</td>
                                <td className="email-col">joaquin.fuentes1327@gmail.com</td>
                                <td className="mensaje-col">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non facilis et culpa harum nobis ipsa deserunt illum voluptatibus.
                                </td>
                                <td>26/04/2024</td>
                                <td>
                                    <Button variant="danger">x</Button>
                                    <Button variant="primary">x</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Joaquin Fuentes</td>
                                <td className="email-col">joaquin.fuentes1327@gmail.com</td>
                                <td className="mensaje-col">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non facilis et culpa harum nobis ipsa deserunt illum voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non facilis et culpa harum nobis ipsa deserunt illum voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non facilis et culpa harum nobis ipsa deserunt illum voluptatibus.
                                </td>
                                <td>26/04/2024</td>
                                <td>
                                    <Button variant="danger">x</Button>
                                    <Button variant="primary">x</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>
    );
};

export default Administrador;

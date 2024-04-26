import React from "react";
import { Container, Row, Col, Button, Nav, Table } from "react-bootstrap";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
const Administrador = () => {
    return (
        <div>
            <Header></Header>
            <div className="fondoAdmin">
                <Container className="pb-4">
                    <h2
                        data-aos="fade-up"
                        className="text-center text-light tituloSobreNosotros mb-4"
                    >
                        Panel de administrador
                    </h2>
                    <hr className="m-0 text-light" />
                    <Button className="my-3 me-3" variant="outline-primary">Comentarios</Button>
                    <Button className="my-3 me-3" variant="outline-success">Usuarios</Button>
                    <Button className="my-3 me-3" variant="outline-warning">Servicios</Button>
                    <Button className="my-3 me-3" variant="outline-secondary">Novedades</Button>
                    <Table
                        striped
                        bordered
                        hover
                        size="sm"
                        variant="dark"
                        className="m-0"
                    >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Mensaje</th>
                                <th>Fecha</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Joaquin Fuentes</td>
                                <td>joaquin.fuentes1327@gmail.com</td>
                                <td>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                                    facilis et culpa harum nobis ipsa deserunt illum voluptatibus
                                    illo optio amet necessitatibus officiis ipsum sint temporibus,
                                    rerum odio dolorem corrupti. Nostrum ex vel accusantium,
                                    blanditiis nihil in repellendus! Adipisci, corporis.
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
                                <td>joaquin.fuentes1327@gmail.com</td>
                                <td>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                                    facilis et culpa harum nobis ipsa deserunt illum voluptatibus
                                    illo optio amet necessitatibus officiis ipsum sint temporibus,
                                    rerum odio dolorem corrupti. Nostrum ex vel accusantium,
                                    blanditiis nihil in repellendus! Adipisci, corporis.
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
                                <td>joaquin.fuentes1327@gmail.com</td>
                                <td>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                                    facilis et culpa harum nobis ipsa deserunt illum voluptatibus
                                    illo optio amet necessitatibus officiis ipsum sint temporibus,
                                    rerum odio dolorem corrupti. Nostrum ex vel accusantium,
                                    blanditiis nihil in repellendus! Adipisci, corporis.
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
            <Footer></Footer>
        </div>
    );
};

export default Administrador;

/* Este fragmento de código es un componente de React llamado "Administrador". Aquí hay un desglose de
lo que hace: */
import { Container, Row, Col, Button, Nav, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { obtenerMensajes } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import ItemMensaje from "./ItemMensaje";

const Administrador = () => {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    obtenerMensajes().then((respuesta) => {
      if (respuesta != null) {
        setMensajes(respuesta);
      } else {
        Swal.fire("Error", "No se pudo obtener los datos de la API", "error");
      }
    });
  }, []);

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
          <Button data-aos="fade-up" className="mb-3 me-3" variant="primary">
            Comentarios
          </Button>
          <Button
            data-aos="fade-up"
            className="mb-3 me-3"
            variant="outline-success"
          >
            Usuarios
          </Button>
          <Button
            data-aos="fade-up"
            className="mb-3 me-3"
            variant="outline-warning"
          >
            Servicios
          </Button>
          <Button
            data-aos="fade-up"
            className="mb-3 me-3"
            variant="outline-secondary"
          >
            Novedades
          </Button>
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
                {/* <th>#</th> */}
                <th className="email-col">Nombre</th>
                <th className="email-col">Email</th>
                <th className="mensaje-col">Mensaje</th>
                <th className="fecha-col">Fecha</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {mensajes.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    Aún no hay mensajes disponibles.
                  </td>
                </tr>
              ) : (
                mensajes.map((mensaje) => (
                  <ItemMensaje
                    mensaje={mensaje}
                    setMensajes={setMensajes}
                    key={mensaje._id}
                  />
                ))
              )}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default Administrador;

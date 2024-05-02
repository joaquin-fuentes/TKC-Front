import { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { obtenerMensaje } from "../../helpers/queries";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";




const DetalleMensaje = ({ mensaje, borrarMensaje }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Button onClick={handleShow} variant="primary" className=" m-1 d-flex justify-content-center align-items-center flex-column">
                <FaEye />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalle Mensaje</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p className="fw-bold">Nombre: <span className="fw-normal">{mensaje.nombre}</span></p>
                    <p className="fw-bold">Email: <span className="fw-normal">{mensaje.email}</span></p>
                    <p className="fw-bold">Mensaje: <span className="textMensajeModal fw-normal">{mensaje.comentario}</span></p>
                    <p className="fw-bold">Fecha: <span className="fw-normal">{mensaje.fecha}</span></p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Cerrar</Button>
                    <Button variant="danger" onClick={borrarMensaje} ><FaTrashAlt />
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
};

export default DetalleMensaje;
import { Button } from "react-bootstrap"
import Swal from "sweetalert2"
import { useState } from "react"
import { consultaBorrarMensaje, obtenerMensajes } from "../../helpers/queries"
import { FaTrashAlt } from "react-icons/fa";
import DetalleMensaje from "./DetalleMensaje"

const ItemMensaje = ({ mensaje, setMensajes }) => {

    const usuarioDelSessionStorage = JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {}
    const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioDelSessionStorage)

    const borrarMensaje = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Seguro que deseas eliminar el mensaje!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                if (usuarioLogueado.rol != "administrador") {
                    Swal.fire(
                        'Error!',
                        `Su usuario no tiene permisos para crear, borrar, o editar mensajes.`,
                        'warning'
                    )
                } else {
                    // aqui tengo que hacer la peticion DELETE 
                    consultaBorrarMensaje(mensaje.id).then((respuesta) => {
                        if (respuesta.status === 200) {
                            Swal.fire(
                                'Eliminado!',
                                `El mensaje fue eliminado`,
                                'success'
                            )
                            //actualizar el state mensaje del componente administrador
                            obtenerMensajes().then((respuesta) => { setMensajes(respuesta) })

                        } else {
                            Swal.fire("Se produjo un error", "Error, intentelo mas tarde ", "error")
                        }
                    })
                }
            }
        })
    }
    return (
        <tr >
            <td className="col-id">{mensaje.id}</td>
            <td className="col-nombre">{mensaje.nombre}</td>
            <td className="col-email">{mensaje.email}</td>
            <td className="col-mensaje">
                {mensaje.comentario}
            </td>
            <td className="col-fecha">{mensaje.fecha}</td>
            <td className="d-flex justify-content-center">
                <Button variant="danger" onClick={borrarMensaje} className=" m-1 d-flex justify-content-center align-items-center flex-column"><FaTrashAlt />
                </Button>
                <DetalleMensaje mensaje={mensaje} borrarMensaje={borrarMensaje}></DetalleMensaje>
               
            </td>
        </tr>
    );
};

export default ItemMensaje;
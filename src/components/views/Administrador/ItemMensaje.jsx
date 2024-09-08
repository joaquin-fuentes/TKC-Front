import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useState } from "react";
import { consultaBorrarMensaje, obtenerMensajes } from "../../helpers/queries";
import { FaTrashAlt, FaEye } from "react-icons/fa";
import DetalleMensaje from "./DetalleMensaje";

const ItemMensaje = ({ mensaje, setMensajes }) => {
  const usuarioDelSessionStorage =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {};
  const [usuarioLogueado] = useState(usuarioDelSessionStorage);

  const borrarMensaje = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Seguro que deseas eliminar el mensaje!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        if (usuarioLogueado.rol !== "administrador") {
          Swal.fire(
            "Error",
            "No tienes permisos para eliminar este mensaje.",
            "warning"
          );
        } else {
          consultaBorrarMensaje(mensaje._id).then((respuesta) => {
            if (respuesta.status === 200) {
              Swal.fire("¡Eliminado!", "El mensaje fue eliminado.", "success");
              obtenerMensajes().then((respuesta) => {
                setMensajes(respuesta);
              });
            } else {
              Swal.fire("Error", "No se pudo eliminar el mensaje.", "error");
            }
          });
        }
      }
    });
  };

  return (
    <tr className="border-b border-gray-200">
      <td className="px-4 py-2">{mensaje.nombre}</td>
      <td className="px-4 py-2">{mensaje.email}</td>
      <td className="px-4 py-2">{mensaje.comentario}</td>
      <td className="px-4 py-2">{mensaje.fecha}</td>
      <td className="px-4 py-2 flex justify-center space-x-2">
        {/* Botón Eliminar */}
        <Button
          variant="danger"
          onClick={borrarMensaje}
          className="flex justify-center items-center bg-transparent hover:bg-red-100 transition-colors"
        >
          <FaTrashAlt className="w-5 h-5 text-red-500 hover:text-red-600" />
        </Button>

        {/* Detalles del mensaje */}
        <DetalleMensaje mensaje={mensaje} borrarMensaje={borrarMensaje} />
      </td>
    </tr>
  );
};

export default ItemMensaje;

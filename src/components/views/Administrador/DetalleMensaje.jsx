import { useState } from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";

const DetalleMensaje = ({ mensaje, borrarMensaje }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Botón para abrir el modal */}
      <button
        onClick={handleShow}
        className="text-blue-500 flex justify-center items-center focus:outline-none hover:text-blue-600 transition duration-300 ease-in-out"
      >
        <FaEye className="w-5 h-5" />
      </button>

      {/* Modal */}
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-out"
            onClick={handleClose}
          ></div>

          {/* Modal content with fade-in animation */}
          <div className="bg-white p-6 rounded-lg shadow-lg z-50 w-full max-w-md transform transition-transform duration-300 ease-out scale-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Detalle del Mensaje
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={handleClose}
              >
                ✖
              </button>
            </div>

            <div className="mb-4">
              <p className="font-bold text-gray-800">
                Nombre: <span className="font-normal">{mensaje.nombre}</span>
              </p>
              <p className="font-bold text-gray-800">
                Email: <span className="font-normal">{mensaje.email}</span>
              </p>
              <p className="font-bold text-gray-800">
                Mensaje:{" "}
                <span className="font-normal">{mensaje.comentario}</span>
              </p>
              <p className="font-bold text-gray-800">
                Fecha: <span className="font-normal">{mensaje.fecha}</span>
              </p>
            </div>

            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300 ease-in-out"
                onClick={handleClose}
              >
                Cerrar
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 ease-in-out flex items-center"
                onClick={borrarMensaje}
              >
                <FaTrashAlt className="w-5 h-5 mr-2" />
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetalleMensaje;

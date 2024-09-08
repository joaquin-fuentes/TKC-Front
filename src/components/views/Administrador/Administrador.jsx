import { Table, Button } from "react-bootstrap";
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
    <main className="min-h-screen bg-red-900 py-24 z-50">
      <section className="container mx-auto px-6 bg-white rounded-lg shadow-lg p-8">
        {/* Título del panel de administrador */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
          Panel de Administrador
        </h2>
        <hr className="mb-6 border-gray-300" />

        {/* Botones de opciones */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Button
            data-aos="fade-up"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Comentarios
          </Button>
          <Button
            data-aos="fade-up"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Usuarios
          </Button>
          <Button
            data-aos="fade-up"
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Servicios
          </Button>
          <Button
            data-aos="fade-up"
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Novedades
          </Button>
        </div>

        {/* Tabla de mensajes */}
        <div className="overflow-x-auto">
          <Table
            striped
            bordered
            hover
            responsive="sm"
            size="sm"
            variant="dark"
            className="min-w-full"
          >
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Nombre</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Mensaje</th>
                <th className="px-4 py-2 text-left">Fecha</th>
                <th className="px-4 py-2 text-left">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {mensajes.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4">
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
        </div>
      </section>
    </main>
  );
};

export default Administrador;

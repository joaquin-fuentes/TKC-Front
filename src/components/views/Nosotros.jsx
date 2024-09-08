import React from "react";
import { Link } from "react-router-dom"; // Importamos Link de react-router-dom
import { MdKayaking } from "react-icons/md"; // Icono de kayak de React Icons

const Nosotros = () => {
  return (
    <section className="bg-gray-100 pt-8" id="nosotros">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Contenido principal */}
        <article
          data-aos="fade-up"
          className="text-center flex flex-col items-center mb-4"
        >
          {/* Icono de kayak */}
          <MdKayaking className="text-red-600 text-6xl mb-4" />

          {/* Título principal */}
          <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-6">
            Somos una empresa de Turismo Aventura ubicada en El Cadillal
          </h2>

          {/* Texto descriptivo */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Tucumán kayak club es una empresa con más de 15 años de experiencia
            en Turismo Activo y deportes alternativos. Su equipo altamente
            capacitado garantiza experiencias seguras y divertidas, respaldadas
            por certificaciones en primeros auxilios, seguridad y rescate. Con
            30 kayaks dobles de alta calidad y equipo completo para Rapel,
            ofrecen aventuras emocionantes. Están debidamente habilitados por el
            Ente Autárquico Tucumán Turismo, asegurando excursiones con todos
            los permisos y seguros necesarios. ¡Ven y únete a nosotros para
            vivir una experiencia inolvidable en la naturaleza!
          </p>

          {/* Botón con react-router-dom Link */}
          <Link
            to="/sobrenosotros"
            className="mt-6 w-full md:w-auto px-4 py-3 text-red-600 border-2 border-red-600 rounded-full hover:bg-red-600 hover:text-white transition duration-300 font-semibold text-center"
          >
            Sobre nosotros
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Nosotros;

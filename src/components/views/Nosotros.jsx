import React from "react";
import { MdKayaking } from "react-icons/md"; // Importa el icono de kayak de React Icons

const Nosotros = () => {
  return (
    <div className="bg-gray-100 p-4" id="nosotros">
      <div className="container mx-auto px-6">
        {/* Contenido principal */}
        <article
          data-aos="fade-up"
          className="text-center flex flex-col items-center mb-8"
        >
          <MdKayaking className="text-red-600 text-6xl mb-4" />
          {/* Icono de kayak más grande y con mejor margen */}
          <h1 className="text-red-600 text-4xl font-bold mb-6">
            Somos una empresa de Turismo Aventura ubicada en El Cadillal
          </h1>
          {/* Título con tipografía más grande y clara */}
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Tucumán kayak club es una empresa con más de 15 años de experiencia en Turismo Activo y deportes alternativos. 
            Su equipo altamente capacitado garantiza experiencias seguras y divertidas, respaldadas por certificaciones en 
            primeros auxilios, seguridad y rescate. Con 30 kayaks dobles de alta calidad y equipo completo para Rapel, 
            ofrecen aventuras emocionantes. Están debidamente habilitados por el Ente Autárquico Tucumán Turismo, 
            asegurando excursiones con todos los permisos y seguros necesarios. ¡Ven y únete a nosotros para vivir una 
            experiencia inolvidable en la naturaleza!
          </p>
          {/* Texto principal con una mejor legibilidad */}
          <a
            href="/sobrenosotros"
            className="mt-6 inline-block px-6 py-3 text-red-600 border-2 border-red-600 rounded-full hover:bg-red-600 hover:text-white transition duration-300 font-semibold"
          >
            Sobre nosotros
          </a>
          {/* Botón con estilos modernos, borde redondeado y efectos hover */}
        </article>
      </div>
    </div>
  );
};

export default Nosotros;

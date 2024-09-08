import React from "react";
import logoTransparente from "../../assets/logos/logoTransparente.webp";
import portada from "../../assets/imagenes/portada.webp";

const Portada = () => {
  return (
    <header
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${portada})`, // Ruta de la imagen
      }}
      id="inicio"
    >
      {/* Oscurecer la imagen de fondo para mejorar la visibilidad del contenido */}
      <div className="absolute inset-0 bg-black bg-opacity-50 h-full"></div>

      {/* Contenido de la portada */}
      <div className="relative z-10 text-center">
        {/* Título principal oculto para SEO, pero no visible */}
        <h1 className="sr-only">Bienvenidos a Tucumán Kayak Club</h1>

        {/* Logo de la empresa */}
        <img
          src={logoTransparente}
          alt="Logo de Tucumán Kayak Club"
          className="w-64 mx-auto mb-8 drop-shadow-xl"
        />

        {/* Botón con descripción accesible */}
        <a
          href="/#servicios"
          className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-500 transition duration-300 font-bold text-lg"
          aria-label="Ver nuestros servicios"
        >
          Nuestros Servicios
        </a>
      </div>
    </header>
  );
};

export default Portada;

import React from "react";
import logoTransparente from "../../assets/logos/logoTransparente.webp"; // Importa el logo transparente

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-red-600 z-100">
      <head>
        <title>Cargando...</title> {/* Meta tags para SEO */}
        <meta
          name="description"
          content="Esperando mientras la página carga..."
        />
      </head>
      {/* Contenedor centrado */}
      <div className="text-center">
        {/* Imagen del logo */}
        <img
          src={logoTransparente}
          alt="Logo Tucumán Kayak Club"
          aria-label="Logo de Tucumán Kayak Club"
          className="w-40 h-auto mx-auto animate-spin-slow" // Ajusta el tamaño y añade animación suave
        />
        {/* Mensaje de carga */}
        {/* <p className="text-white text-lg mt-4 animate-pulse">Cargando...</p> */}
      </div>
    </div>
  );
};

export default Loading;

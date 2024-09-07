import React from "react";
import logoTransparente from "../../assets/logos/logoTransparente.webp"; // Asegúrate de tener el logo aquí
import portada from "../../assets/imagenes/portada.webp";
const Portada = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-bottom flex flex-col justify-center items-center "
      style={{
        backgroundImage: `url(${portada})`, // Asegúrate de reemplazar portada con la ruta de tu imagen
      }}
      id="inicio"
    >
      {/* Oscurecer la imagen ligeramente para mejorar la visibilidad del contenido */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido de la portada */}
      <div className="relative z-10 text-center">
        <img
          src={logoTransparente}
          alt="Logo de TKC"
          className="w-64 mx-auto mb-8 drop-shadow-xl"
        />
        <a
          href="/#servicios"
          className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-500 transition duration-300 font-bold text-lg"
        >
          Nuestros Servicios
        </a>
      </div>
    </div>
  );
};

export default Portada;

import React from "react";
import { Link } from "react-router-dom";

// Importa las imágenes de los servicios
import excursiones from "../../assets/imagenes/alquilerkayak.webp";
import coaching from "../../assets/imagenes/coaching.webp";
import escuelita from "../../assets/imagenes/escuelita.webp";
import cumple from "../../assets/imagenes/grupo5.webp";
import quincho from "../../assets/imagenes/quincho6.webp";
import guarderia from "../../assets/imagenes/guarderia2.webp";
import alquiler from "../../assets/imagenes/grupo2.webp";
import estudiantiles from "../../assets/imagenes/portada3.webp";

// Importa los iconos de los servicios
import iconoAlquiler from "../../assets/iconos/kayakRojo.webp";
import iconoExcursion from "../../assets/iconos/kayakRojo3.webp";
import iconoCoaching from "../../assets/iconos/trekkingRojo2.webp";
import iconoEscuela from "../../assets/iconos/kayakRojo2.webp";
import iconoCumple from "../../assets/iconos/globosRojo.webp";
import iconoAsador from "../../assets/iconos/asadorRojo2.webp";
import iconoGuarderia from "../../assets/iconos/kayakRojo4.webp";
import iconoEstudiantiles from "../../assets/iconos/grupoRojo.webp";

const Servicios = () => {
  const servicios = [
    {
      img: alquiler,
      icono: iconoAlquiler,
      title: "Alquiler de kayaks",
      link: "/alquilerkayak",
    },
    {
      img: excursiones,
      icono: iconoExcursion,
      title: "Excursiones",
      link: "/excursiones",
    },
    {
      img: coaching,
      icono: iconoCoaching,
      title: "Team Building",
      link: "/coaching",
    },
    {
      img: escuelita,
      icono: iconoEscuela,
      title: "Escuela de kayaks",
      link: "/escuela",
    },
    {
      img: cumple,
      icono: iconoCumple,
      title: "Cumpleaños infantiles",
      link: "/cumpleaños",
    },
    {
      img: quincho,
      icono: iconoAsador,
      title: "Quincho para eventos",
      link: "/alquilerquincho",
    },
    {
      img: guarderia,
      icono: iconoGuarderia,
      title: "Guardería de Kayaks",
      link: "/guarderia",
    },
    {
      img: estudiantiles,
      icono: iconoEstudiantiles,
      title: "Estudiantiles",
      link: "/estudiantiles",
    },
  ];

  return (
    <section className="bg-red-600 mt-40 pb-16" id="servicios">
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h3 className="text-white text-4xl font-bold">Nuestros Servicios</h3>
        </div>

        {/* Grid de Servicios */}
        <div className="flex flex-wrap justify-center gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 transform hover:scale-105 w-full md:w-1/2 lg:w-1/4"
            >
              {/* Imagen del servicio */}
              <img
                src={servicio.img}
                alt={`imagen de ${servicio.title}`}
                className="w-full h-56 object-cover"
              />

              {/* Overlay oscuro sobre la imagen */}
              <div className="absolute inset-0 bg-black bg-opacity-25"></div>

              {/* Icono del servicio */}
              <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center bg-white bg-opacity-75 rounded-full">
                <img
                  src={servicio.icono}
                  alt={`icono de ${servicio.title}`}
                  className="w-8 h-8"
                />
              </div>

              {/* Título del servicio */}
              <h5 className="absolute inset-0 flex justify-center items-center text-white text-xl font-bold">
                {servicio.title}
              </h5>

              {/* Botón Ver más */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  to={servicio.link}
                  className="inline-block px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition duration-300"
                >
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;

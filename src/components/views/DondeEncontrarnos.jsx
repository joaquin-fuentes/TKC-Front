import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import carpatkc from "../../assets/imagenes/base.webp";

/**
 * Componente funcional que muestra la ubicación de Tucumán Kayak Club (TKC) y proporciona instrucciones para llegar.
 * Incluye un mapa interactivo de Google Maps y una imagen representativa.
 */
const DondeEncontrarnos = () => {
  return (
    <section className="pb-12 pt-8 bg-gray-100" id="dondeencontrarnos">
      <div className="container mx-auto px-4">
        {/* Encabezado con icono y título */}
        <article
          className="text-center flex flex-col items-center mb-4"
          data-aos="fade-up"
        >
          {/* Icono de ubicación */}
          <FaMapMarkerAlt className="text-red-600 text-6xl mb-4" />
          <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-6">
            Dónde encontrarnos
          </h2>
        </article>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 gap-12 items-start ">
          {/* Fila de texto descriptivo */}
          <div
            className="mb-2 text-center lg:text-left lg:col-span-2"
            data-aos="fade-up"
          >
            <p className="text-gray-700 text-center md:text-lg leading-relaxed">
              Nuestra ubicación se encuentra en El Cadillal, a tan solo 20 km al
              norte de San Miguel de Tucumán, específicamente en el dique
              Celestino Gelsi. Para llegar, desde la rotonda del Cadillal, deben
              tomar el primer desvío a la izquierda y luego, a 50 metros, girar
              a la derecha, por la calle que bordea un amplio espacio verde y
              una cancha de rugby. Al final de esta calle, encontrarán las
              playas del dique Celestino Gelsi y nuestra base operativa. ¡Los
              esperamos con ansias para vivir una experiencia inolvidable!
            </p>
          </div>

          {/* Fila con dos columnas (mapa e imagen) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mapa de Google Maps */}
            <div className="flex justify-center" data-aos="fade-up">
              <iframe
                title="Ubicación de Tucumán Kayak Club"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20176.22637576159!2d-65.2160793826423!3d-26.626489869886584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942265fafc14b407%3A0xab872a32ac3e22b4!2sTucum%C3%A1n%20Kayak%20Club%20(TKC)!5e0!3m2!1ses!2sar!4v1713450891823!5m2!1ses!2sar"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 md:h-96 rounded-lg shadow-lg max-w-lg"
              ></iframe>
            </div>

            {/* Imagen representativa */}
            <div className="flex justify-center" data-aos="fade-up">
              <img
                src={carpatkc}
                alt="Carpa de Tucumán Kayak Club en el dique"
                className="rounded-lg shadow-lg w-full object-cover h-64 md:h-96 max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DondeEncontrarnos;

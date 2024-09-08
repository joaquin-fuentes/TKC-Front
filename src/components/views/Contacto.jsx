import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import CrearMensaje from "./CrearMensaje";

const Contacto = () => {
  return (
    <section className="bg-red-600 py-4" id="contacto">
      <div className="container mx-auto px-6">
        {/* Título principal */}
        <h1 className="sr-only">Contacto - Tucumán Kayak Club</h1>

        {/* Encabezado con icono y título */}
        <div
          className="text-center flex flex-col items-center mb-8"
          data-aos="fade-up"
        >
          <RiContactsFill
            className="text-white text-6xl mb-4"
            aria-hidden="true"
          />
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Cómo contactarte con nosotros?
          </h2>
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Puedes contactarte con nosotros por WhatsApp o cualquiera de
            nuestras redes sociales haciendo clic en los siguientes íconos.
          </p>
        </div>

        {/* Redes sociales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaría hacer una consulta sobre los servicios de Tucumán Kayak Club"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white hover:text-yellow-400 transition"
            data-aos="fade-up"
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp className="text-6xl mb-2" aria-hidden="true" />
            <span className="text-lg">3816097754</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/tkcturismoaventura/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white hover:text-yellow-400 transition"
            data-aos="fade-up"
            aria-label="Visitar Facebook"
          >
            <FaFacebook className="text-6xl mb-2" aria-hidden="true" />
            <span className="text-lg">Tucumán Kayak Club</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/tucumankayakclub/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white hover:text-yellow-400 transition"
            data-aos="fade-up"
            aria-label="Visitar Instagram"
          >
            <FaInstagram className="text-6xl mb-2" aria-hidden="true" />
            <span className="text-lg">@TucumanKayakClub</span>
          </a>
        </div>

        {/* Crear mensaje (formulario) */}
        <div className="mt-12" data-aos="fade-up">
          <CrearMensaje />
        </div>
      </div>
    </section>
  );
};

export default Contacto;

import React, { useEffect } from "react";
import equipoTKC from "../../assets/imagenes/equipotkc.webp"; // Imagen del equipo TKC
import useScrollToTop from "../hooks/useScrollToTop";

const PaginaSobreNosotros = () => {
  useScrollToTop(); // Llama al hook para hacer scroll al inicio

  return (
    <section className="bg-red-600 text-white py-12 pt-24" id="sobre-nosotros">
      <div className="container mx-auto px-6">
        {/* Título de la página */}
        <header className="text-center mb-8">
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Sobre Nosotros
          </h1>
          <hr className="border-t-2 border-white w-24 mx-auto" />
        </header>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Imagen del equipo TKC */}
          <article data-aos="fade-up">
            <img
              src={equipoTKC}
              alt="Equipo de Tucumán Kayak Club"
              className="w-full rounded-lg shadow-lg"
            />
          </article>

          {/* Información textual */}
          <article data-aos="fade-up" className="leading-relaxed self-start">
            <p className="mb-6 text-white text-center md:text-start">
              ¡Bienvenidos a Tucumán Kayak Club (TKC), donde convertimos simples
              momentos en emocionantes aventuras! Con más de 15 años de
              experiencia en el Turismo Activo y los deportes alternativos, en
              TKC nos enorgullece ofrecer experiencias seguras y llenas de
              diversión para todos nuestros clientes.
            </p>
            <p className="mb-6 text-white text-center md:text-start">
              Nuestro equipo está conformado por profesionales con conocimientos
              especializados y una pasión inigualable por lo que hacemos. Hemos
              obtenido certificaciones en primeros auxilios, seguridad y
              rescate, tanto en aguas blancas como en entornos agrestes.
              También, contamos con una amplia experiencia en el manejo de
              grupos, garantizando una atención personalizada y adaptada.
            </p>
            <p className="mb-6 text-white text-center md:text-start">
              Contamos con una flota de 30 kayaks dobles, equipados con chalecos
              salvavidas y remos homologados. También disponemos del equipo
              necesario para la práctica de Rapel, como cuerdas, arneses y
              mosquetones.
            </p>
            <p className="text-white text-center md:text-start">
              Estamos habilitados por el Ente Autárquico Tucumán Turismo para
              realizar nuestras excursiones, cumpliendo con todos los requisitos
              legales, seguros e inscripciones necesarias. ¡Únete a nosotros y
              descubre un mundo de aventuras emocionantes!
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PaginaSobreNosotros;

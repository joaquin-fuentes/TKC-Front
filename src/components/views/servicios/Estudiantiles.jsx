import React, { useState, useEffect } from "react";
import imgEstudiantiles from "../../../assets/imagenes/grupo4.webp";
import imgEstudiantiles2 from "../../../assets/imagenes/grupo5.webp";
import imgEstudiantiles3 from "../../../assets/imagenes/grupo3.webp";
import imgEstudiantiles4 from "../../../assets/imagenes/portada3.webp";

import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg";
import Slider from "react-slick";
import useScrollToTop from "../../hooks/useScrollToTop";

const Estudiantiles = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  useScrollToTop(); // Hook para hacer scroll al inicio

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesToShow(1); // Pantallas pequeñas, 1 imagen
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2); // Pantallas medianas, 2 imágenes
      } else {
        setSlidesToShow(3); // Pantallas grandes, 3 imágenes
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Ajuste inicial

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <section
      className="bg-red-700 text-white py-12 pt-24"
      id="grupos-estudiantiles"
    >
      <div className="container mx-auto px-6">
        {/* Título de la sección */}
        <header className="text-center mb-8 md:mb-16">
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Grupos Estudiantiles
          </h1>
          <hr className="border-t-2 border-white w-24 mx-auto" />
        </header>

        {/* Descripción del servicio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen principal */}
          <article data-aos="fade-up" className="flex items-start">
            <img
              src={imgEstudiantiles}
              alt="Excursión de grupo estudiantil en kayak"
              className="w-full h-64 md:h-80 object-fill rounded-lg shadow-lg"
            />
          </article>

          {/* Texto descriptivo */}
          <article
            data-aos="fade-up"
            className="flex flex-col items-center md:items-start justify-start leading-relaxed space-y-6 text-center md:text-start"
          >
            <h5 className="text-2xl font-semibold">
              Excursiones Estudiantiles
            </h5>
            <p>
              Ofrecemos emocionantes excursiones para grupos estudiantiles.
              Sumérgete en aventuras inolvidables mientras exploras el dique con
              nuestras excursiones guiadas en kayak. Nuestros guías expertos te
              llevarán a descubrir los secretos de la naturaleza, y después
              podrás relajarte con un picnic en nuestras instalaciones.
            </p>
            <p>
              <span className="font-semibold">Disfruta de:</span> <br />
              Aventuras seguras en kayak, increíbles paisajes naturales, y
              momentos inolvidables con tus compañeros.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaría hacer una consulta sobre GRUPOS ESTUDIANTILES"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <img src={whatsapp} alt="WhatsApp" className="w-5 h-5 mr-2" />
              Enviar mensaje
            </a>
          </article>
        </div>

        {/* Galería de imágenes */}
        <div className="mt-12">
          <Slider {...settings}>
            {[
              imgEstudiantiles2,
              imgEstudiantiles3,
              imgEstudiantiles,
              imgEstudiantiles4,
            ].map((img, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="p-2 flex justify-center"
              >
                <img
                  src={img}
                  alt={`Imagen ${index + 1} de la excursión`}
                  className="w-full h-64 object-fill rounded-lg shadow-lg max-w-md"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Estudiantiles;

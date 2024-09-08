import React, { useState, useEffect } from "react";
import imgCumpleanios from "../../../assets/imagenes/grupo3.webp";
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg";
import Slider from "react-slick";

import imgGaleria from "../../../assets/imagenes/base.webp";
import imgGaleria2 from "../../../assets/imagenes/quincho.webp";
import imgGaleria11 from "../../../assets/imagenes/grupo.webp";
import imgGaleria3 from "../../../assets/imagenes/grupo5.webp";
import imgGaleria4 from "../../../assets/imagenes/quincho5.webp";
import imgGaleria5 from "../../../assets/imagenes/quincho6.webp";
import imgGaleria6 from "../../../assets/imagenes/baño1.webp";
import imgGaleria7 from "../../../assets/imagenes/baño2.webp";
import imgGaleria8 from "../../../assets/imagenes/baño3.webp";
import imgGaleria9 from "../../../assets/imagenes/portada3.webp";
import imgGaleria10 from "../../../assets/imagenes/base2.webp";
import useScrollToTop from "../../hooks/useScrollToTop";

const Cumpleanios = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  useScrollToTop(); // Llama al hook para hacer scroll al inicio


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesToShow(1); // Para pantallas pequeñas, 1 imagen
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2); // Para pantallas medianas, 2 imágenes
      } else {
        setSlidesToShow(3); // Para pantallas grandes, 3 imágenes
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
    <section className="bg-red-600 text-white py-12 pt-24" id="cumpleanios-infantiles">
      <div className="container mx-auto px-6">
        {/* Título de la sección */}
        <header className="text-center mb-8 md:mb-16">
          <h1 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4">
            Cumpleaños infantiles
          </h1>
          <hr className="border-t-2 border-white w-24 mx-auto" />
        </header>

        {/* Descripción del servicio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen principal */}
          <article data-aos="fade-up" className="flex items-start">
            <img
              src={imgCumpleanios}
              alt="Imagen de cumpleaños infantiles"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </article>

          {/* Texto descriptivo */}
          <article
            data-aos="fade-up"
            className="flex flex-col items-center md:items-start justify-start leading-relaxed space-y-6 text-center md:text-start"
          >
            <h5 className="text-2xl font-semibold">Cumpleaños infantiles</h5>
            <p>
              ¿Quieres celebrar el cumpleaños de tu hijo/a de una manera única y emocionante? ¡Te ofrecemos una experiencia inolvidable con una excursión en kayak por el dique, guiada por nuestros expertos, seguida de una deliciosa comida en nuestro quincho!
            </p>
            <p>
              Después de explorar el agua en nuestras embarcaciones, podrán disfrutar de una hamburguesada o del menú que prefieras. Además, contamos con un amplio espacio equipado con todo lo necesario para juegos y diversión. ¡No te pierdas esta oportunidad de hacer que su cumpleaños sea memorable!
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre CUMPLEAÑOS INFANTILES"
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
            {[imgGaleria, imgGaleria2, imgGaleria11, imgGaleria3, imgGaleria4, imgGaleria5, imgGaleria6, imgGaleria7, imgGaleria8, imgGaleria9, imgGaleria10].map((img, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="p-2 flex justify-center"
              >
                <img
                  src={img}
                  alt={`Imagen ${index + 1} de cumpleaños`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg max-w-md"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Cumpleanios;

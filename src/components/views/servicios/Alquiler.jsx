import React, { useState, useEffect } from "react";
import imgAlquiler from "../../../assets/imagenes/quincho3.webp";
import imgGaleria from "../../../assets/imagenes/quincho2.webp";
import imgGaleria2 from "../../../assets/imagenes/quincho.webp";
import imgGaleria3 from "../../../assets/imagenes/quincho4.webp";
import imgGaleria4 from "../../../assets/imagenes/quincho5.webp";
import imgGaleria5 from "../../../assets/imagenes/quincho6.webp";
import imgGaleria6 from "../../../assets/imagenes/baño1.webp";
import imgGaleria7 from "../../../assets/imagenes/baño2.webp";
import imgGaleria8 from "../../../assets/imagenes/baño3.webp";
import imgGaleria9 from "../../../assets/imagenes/base.webp";
import imgGaleria10 from "../../../assets/imagenes/base2.webp";
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg";
import Slider from "react-slick";
import useScrollToTop from "../../hooks/useScrollToTop";

const Alquiler = () => {
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
    <section className="bg-red-700 text-white py-12 pt-24" id="alquiler-quincho">
      <div className="container mx-auto px-6">
        {/* Título de la sección */}
        <header className="text-center mb-8 md:mb-16">
          <h1 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4">
            Alquiler de Quincho
          </h1>
          <hr className="border-t-2 border-white w-24 mx-auto" />
        </header>

        {/* Descripción del servicio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen principal */}
          <article data-aos="fade-up" className="flex items-start">
            <img
              src={imgAlquiler}
              alt="Imagen del quincho para eventos"
              className="w-full h-64 md:h-80 object-fill rounded-lg shadow-lg"
            />
          </article>

          {/* Texto descriptivo */}
          <article
            data-aos="fade-up"
            className="flex flex-col items-center md:items-start justify-start leading-relaxed space-y-6 text-center md:text-start"
          >
            <h5 className="text-2xl font-semibold">Alquiler de Quincho para Eventos</h5>
            <p>
              Nuestra base operativa cuenta con un quincho cubierto y un asador perfecto para organizar
              una amplia variedad de eventos, desde cumpleaños hasta eventos deportivos. Con capacidad
              para aproximadamente 60 personas, ofrece la mejor vista del dique y sus alrededores. 
              Además, cuenta con baños, mesas y sillas para mayor comodidad.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre el ALQUILER DE QUINCHO PARA EVENTOS"
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
            {[imgGaleria, imgGaleria2, imgGaleria3, imgGaleria4, imgGaleria5, imgGaleria6, imgGaleria7, imgGaleria8, imgGaleria9, imgGaleria10].map((img, index) => (
              <div key={index} data-aos="fade-up" className="p-2 flex justify-center">
                <img
                  src={img}
                  alt={`Imagen ${index + 1} del quincho`}
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

export default Alquiler;

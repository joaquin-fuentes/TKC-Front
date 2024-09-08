import React, { useState, useEffect } from "react";
import imgEscuela from "../../../assets/imagenes/portada2.webp";
import img1 from "../../../assets/imagenes/escuelita.webp";
import img2 from "../../../assets/imagenes/grupo4.webp";
import img3 from "../../../assets/imagenes/portada2.webp";
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg";
import Slider from "react-slick";
import useScrollToTop from "../../hooks/useScrollToTop";

const Escuela = () => {
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
    <section className="bg-red-700 text-white py-12 pt-24" id="escuela-kayak">
      <div className="container mx-auto px-6">
        {/* Título de la sección */}
        <header className="text-center mb-8 md:mb-16">
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Escuela de Kayak
          </h1>
          <hr className="border-t-2 border-white w-24 mx-auto" />
        </header>

        {/* Descripción del servicio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen principal */}
          <article data-aos="fade-up" className="flex items-start">
            <img
              src={imgEscuela}
              alt="Imagen de la escuela de kayak"
              className="w-full h-64 md:h-80 object-fill rounded-lg shadow-lg"
            />
          </article>

          {/* Texto descriptivo */}
          <article
            data-aos="fade-up"
            className="flex flex-col items-center md:items-start justify-start leading-relaxed space-y-6 text-center md:text-start"
          >
            <h5 className="text-2xl font-semibold">
              Escuela de Kayak para Adultos
            </h5>
            <p>
              La escuela de kayak ofrece clases para todas las edades y niveles,
              cubriendo técnicas de remo, seguridad, navegación y rescate.
              Además de enseñar habilidades básicas, promueve la conexión con la
              naturaleza y un estilo de vida activo.
            </p>
            <p>
              <span className="font-semibold">Días de entrenamiento:</span>{" "}
              <br />
              Miércoles de 16 a 18hs <br />
              Sábados de 11 a 13hs y de 16 a 18hs
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre la ESCUELA DE KAYAK DE TKC"
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
            {[img1, img2, img3].map((img, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="p-2 flex justify-center"
              >
                <img
                  src={img}
                  alt={`Imagen ${index + 1} de la escuela`}
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

export default Escuela;

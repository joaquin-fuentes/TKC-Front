import React from "react";
import canyonning from "../../../assets/imagenes/trekking.webp";
import kayakrio from "../../../assets/imagenes/fondokayak2.webp";
import kayakdique from "../../../assets/imagenes/remando.webp";
import rappeldique from "../../../assets/imagenes/rappel.webp";
import rappelaguaschiquitas from "../../../assets/imagenes/rappelac.webp";
import viaducto from "../../../assets/imagenes/viaducto2.webp";
import whatsapp from "../../../assets/imagenes/icons8-whatsapp.svg";
import useScrollToTop from "../../hooks/useScrollToTop";

const Excursiones = () => {
  useScrollToTop(); // Hook para hacer scroll al inicio

  const excursions = [
    {
      title: "Kayak en el Río Loro",
      imgSrc: kayakrio,
      description:
        "Nos encontramos en el Cadillal donde se encuentra el río Loro, ideal para iniciarse en este deporte. El río cuenta con una serie de rápidos clase 1 que nos ofrecerán adrenalina, pero al mismo tiempo, seguridad. Comenzaremos con un mini-curso instructivo a orillas del río para luego hacer un descenso de aproximadamente 1 y ½ hs.",
      horario: "09:00 o 14:00hs",
      incluye: "Guía, mini-curso instructivo, snack, todo el equipo necesario.",
      recorrido: "5km de río",
      duracion: "4hs",
      whatsappMsg: "KAYAK EN EL RIO LORO",
    },
    {
      title: "Kayak en el Dique",
      imgSrc: kayakdique,
      description:
        "Nos encontramos en El Cadillal para llegar a su gran espejo de agua, donde después de un curso instructivo remaremos en las mansas aguas del dique haciendo un recorrido por sus bahías y conociendo su hermosa naturaleza.",
      horario: "09:00 o 14:00hs",
      incluye: "Guía, curso instructivo, snack y todo el equipo necesario.",
      recorrido: "4km",
      duracion: "3hs",
      whatsappMsg: "KAYAK EN EL DIQUE",
    },
    {
      title: "Kayak en el Dique + Rappel",
      imgSrc: rappeldique,
      description:
        "Remaremos en las mansas aguas del dique haciendo un recorrido por sus bahías. Al llegar a la tercera, descenderemos una pared de 15 mts. de alto con sogas y arneses para sumarle adrenalina a nuestra aventura.",
      horario: "09:00 o 14:00hs",
      incluye: "Guía, curso instructivo, snack y todo el equipo necesario.",
      recorrido: "4km",
      duracion: "4hs",
      whatsappMsg: "KAYAK EN EL DIQUE + RAPPEL",
    },
    {
      title: "Canyoning en la Reserva Aguas Chiquitas",
      imgSrc: canyonning,
      description:
        "Comenzamos con un trekking ascendiendo por el cerro Medina hasta llegar al cañón de Aguas Chiquitas, donde cruzaremos piletones de agua, escalaremos rocas y conviviremos con un paisaje natural impresionante hasta llegar a una cascada de 50 mts. de alto.",
      horario: "09:00",
      incluye: "Guía, curso instructivo, snack y todo el equipo necesario.",
      recorrido: "8km en el río",
      duracion: "6hs",
      whatsappMsg: "CANYONING EN LA RESERVA AGUAS CHIQUITAS",
    },
    {
      title: "Canyoning Aguas Chiquitas + Rappel",
      imgSrc: rappelaguaschiquitas,
      description:
        "Después del trekking por el cañón de Aguas Chiquitas, subimos a una cascada de 50 mts y la descendemos en rappel para una experiencia más intensa y aventurera.",
      horario: "09:00",
      incluye: "Guía, curso instructivo, snack y todo el equipo necesario.",
      recorrido: "9km",
      duracion: "7hs",
      whatsappMsg: "CANYONING AGUAS CHIQUITAS + RAPPEL",
    },
    {
      title: "Rappel aéreo en el Viaducto El Saladillo",
      imgSrc: viaducto,
      description:
        "Desciende en rappel desde el Viaducto El Saladillo, una estructura imponente y moderna. Una experiencia emocionante y llena de adrenalina.",
      horario: "09:00 o 14:00hs",
      incluye: "Guía, curso instructivo, snack y todo el equipo necesario.",
      recorrido: "25 mts en descenso",
      duracion: "2hs",
      whatsappMsg: "RAPPEL AÉREO EN EL VIADUCTO EL SALADILLO",
    },
  ];

  return (
    <section className="bg-red-700 text-white py-12 pt-24" id="excursiones">
      <div className="container mx-auto px-6">
        {/* Título de la sección */}
        <header className="text-center mb-8 md:mb-16">
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Excursiones
          </h1>
          <hr
            data-aos="fade-up"
            className="border-t-2 border-white w-24 mx-auto"
          />
        </header>

        {/* Excursiones List */}
        {excursions.map((excursion, index) => (
          <div key={index} className="mb-12">
            {/* Título */}
            <h5
              data-aos="fade-up"
              className="text-2xl font-bold text-center mb-6"
            >
              {excursion.title}
            </h5>

            {/* Contenido: en dispositivos pequeños todo en una columna, en grandes dos columnas con imagen a la izquierda o derecha */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Imagen de la excursión */}
              <article data-aos="fade-up" className="flex items-start">
                <img
                  src={excursion.imgSrc}
                  alt={`Imagen de ${excursion.title}`}
                  className="w-full h-64 md:h-80 object-fill rounded-lg shadow-lg"
                />
              </article>

              {/* Detalles de la excursión */}
              <article
                data-aos="fade-up"
                className="flex flex-col items-center md:items-start justify-start leading-relaxed space-y-6 text-center md:text-start"
              >
                <p>{excursion.description}</p>
                <p>
                  <span className="font-bold">Horario de salida:</span>{" "}
                  {excursion.horario}
                </p>
                <p>
                  <span className="font-bold">Incluye:</span>{" "}
                  {excursion.incluye}
                </p>
                <p>
                  <span className="font-bold">Recorrido:</span>{" "}
                  {excursion.recorrido}
                </p>
                <p>
                  <span className="font-bold">Duración total:</span>{" "}
                  {excursion.duracion}
                </p>
                <a
                  href={`https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! me gustaria hacer una consulta sobre la excursion de ${excursion.whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <img src={whatsapp} alt="WhatsApp" className="w-5 h-5 mr-2" />
                  Enviar Mensaje
                </a>
              </article>
            </div>

            {/* Añadir un <hr> excepto en la última excursión */}
            {index !== excursions.length - 1 && (
              <hr
                data-aos="fade-up"
                className="border-t-2 border-white w-full my-8"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Excursiones;

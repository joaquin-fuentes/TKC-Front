/**
 * La función `CarouselExcursiones` muestra un carrusel de imágenes relacionadas con excursiones usando
 * React Bootstrap.
 * @returns Se está devolviendo el componente `CarouselExcursiones`. Es un componente funcional que
 * representa un componente "Carousel" de la biblioteca "react-bootstrap". El carrusel muestra imágenes
 * de diferentes excursiones, como kayak y rapel. El componente utiliza el estado para administrar el
 * índice activo del carrusel y una función de controlador para actualizar el índice cuando se
 * selecciona un nuevo elemento.
 */
import kayak1 from "../../../../assets/imagenes/alquilerkayak.jpg";
import kayak2 from "../../../../assets/imagenes/rappel.jpg";
import kayak3 from "../../../../assets/imagenes/remando.jpg";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CarouselExcursiones() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="carouselInicio"
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item className="h-100">
        <img className="imgCarousel p-2" src={kayak1} alt="imagen de banner" />
      </Carousel.Item>
      <Carousel.Item className="h-100">
        <img className="imgCarousel p-2" src={kayak1} alt="imagen de banner" />
      </Carousel.Item>
      <Carousel.Item className="h-100">
        <img className="imgCarousel p-2" src={kayak2} alt="imagen de banner" />
      </Carousel.Item>
      <Carousel.Item className="h-100">
        <img className="imgCarousel p-2" src={kayak3} alt="imagen de banner" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselExcursiones;

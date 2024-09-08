import { useNavigate, useLocation } from "react-router-dom";

const useHandleSmoothScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSmoothScroll = (e, id, page = null) => {
    e.preventDefault();

    if (page) {
      // Si estamos en otra página, navegamos a ella y luego hacemos scroll al ID.
      navigate(page, { replace: false });
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Esperamos un poco para asegurarnos de que la nueva página se cargue.
    } else {
      // Si estamos en la misma página, hacemos scroll directamente
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return handleSmoothScroll;
};

export default useHandleSmoothScroll;

import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Hace scroll al inicio de la página cuando el componente se monta
  }, []);
};

export default useScrollToTop;

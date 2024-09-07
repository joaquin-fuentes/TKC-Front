import { useCallback } from "react";

const useHandleSmoothScroll = () => {
  const handleSmoothScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  return handleSmoothScroll;
};

export default useHandleSmoothScroll;

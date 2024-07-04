import React from 'react';
import logoTransparente from "../../assets/logos/logoTransparente.png"; // Importa el logo transparente

const Loading = () => {
  return (
    <div className='fondoPaginaCarga'>
      <img src={logoTransparente} alt="Logo TKC" className='logoPaginaCarga' /> {/* Muestra el logo mientras carga */}
    </div>
  );
};

export default Loading;

// Loading.js
import React from 'react';
import cargando from "../../assets/imagenes/cargando-blanco.gif"
import logoTransparente from "../../assets/imagenes/logoTransparente.png"
import { Spinner } from 'react-bootstrap';


const Loading = () => {
  return (
    <div className='fondoPaginaCarga'>
      <img src={logoTransparente} alt="Logo TKC" className='logoPaginaCarga' />
      {/* <img src={cargando} alt="Loading..." className='iconoPaginaCarga' /> */}
      <h4 className='text-light fs-2'>¡BIENVENIDOS!</h4>
      <div>
        <Spinner className='mx-1' animation="grow" variant="light" />
        <Spinner className='mx-1' animation="grow" variant="light" />
        <Spinner className='mx-1' animation="grow" variant="light" />
      </div>

    </div>
  );
};

export default Loading;

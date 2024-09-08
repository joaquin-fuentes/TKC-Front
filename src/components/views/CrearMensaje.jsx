import React from "react";
import { useForm } from "react-hook-form";
import { consultaCrearMensaje } from "../helpers/queries";
import Swal from "sweetalert2";
import { IoMdMail, IoIosText } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";

const CrearMensaje = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const obtenerFechaHoy = () => {
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, "0");
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const anio = String(hoy.getFullYear()).slice(-2);
    return `${dia}/${mes}/${anio}`;
  };

  const onSubmit = (mensajeNuevo) => {
    const mensajeNuevoConFecha = { ...mensajeNuevo, fecha: obtenerFechaHoy() };
    consultaCrearMensaje(mensajeNuevoConFecha).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire("¡Enviado!", "Su mensaje fue enviado correctamente.", "success");
        reset();
      } else {
        Swal.fire("Error", "No se pudo procesar su petición.", "error");
      }
    });
  };

  return (
    <section className="pt-4  bg-red-600 text-white" id="contacto">
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-6">¡Déjanos tu mensaje!</h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" aria-label="Formulario de contacto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre Completo */}
            <div>
              <label htmlFor="nombre" className="block text-lg font-medium">
                <RiContactsFill className="inline-block text-xl text-white mr-2" />
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                placeholder="Ingrese su nombre completo"
                className="mt-1 block w-full px-4 py-2 border border-white bg-red-500 text-white placeholder-white rounded-md focus:ring focus:border-yellow-400"
                {...register("nombre", {
                  required: "El nombre es obligatorio.",
                  minLength: { value: 4, message: "Debe tener al menos 4 caracteres." },
                  maxLength: { value: 30, message: "Debe tener menos de 30 caracteres." },
                })}
              />
              {errors.nombre && <span className="text-yellow-300 text-sm">{errors.nombre.message}</span>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                <IoMdMail className="inline-block text-xl text-white mr-2" />
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                placeholder="Ingrese su email"
                className="mt-1 block w-full px-4 py-2 border border-white bg-red-500 text-white placeholder-white rounded-md focus:ring focus:border-yellow-400"
                {...register("email", {
                  required: "El email es obligatorio.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Debe ingresar un email válido.",
                  },
                })}
              />
              {errors.email && <span className="text-yellow-300 text-sm">{errors.email.message}</span>}
            </div>
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="comentario" className="block text-lg font-medium">
              <IoIosText className="inline-block text-xl text-white mr-2" />
              Mensaje
            </label>
            <textarea
              id="comentario"
              rows={5}
              placeholder="Ingrese aquí su mensaje"
              className="mt-1 block w-full px-4 py-2 border border-white bg-red-500 text-white placeholder-white rounded-md focus:ring focus:border-yellow-400"
              {...register("comentario", {
                required: "El mensaje es obligatorio.",
                minLength: { value: 4, message: "Debe tener al menos 4 caracteres." },
                maxLength: { value: 500, message: "Debe tener menos de 500 caracteres." },
              })}
            />
            {errors.comentario && <span className="text-yellow-300 text-sm">{errors.comentario.message}</span>}
          </div>

          {/* Botón Enviar */}
          <div className="text-center">
            <button
              type="submit"
              className=" bg-white text-red-600 px-6 py-3 rounded-full hover:bg-red-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CrearMensaje;

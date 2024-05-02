import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { consultaCrearMensaje } from "../helpers/queries";
import Swal from "sweetalert2";

const CrearMensaje = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    function obtenerFechaHoy() {
        const hoy = new Date();
        const dia = String(hoy.getDate()).padStart(2, '0'); // Día con dos dígitos
        const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Mes con dos dígitos (enero es 0)
        const anio = String(hoy.getFullYear()).slice(-2); // Últimos dos dígitos del año
      
        const fechaFormateada = `${dia}/${mes}/${anio}`; // Formato dd/mm/aa
        return fechaFormateada;
      }

    const onSubmit = (mensajeNuevo) => {
        console.log(mensajeNuevo)
        const mensajeNuevoNuevo = { ...mensajeNuevo, fecha:obtenerFechaHoy() }
        // realizar la peticion que agrega mensaje a la api
        consultaCrearMensaje(mensajeNuevoNuevo).then((respuesta) => {
            if (respuesta.status === 201) {
                Swal.fire(
                    'Enviado!',
                    `Su mensaje fue enviado correcamente`,
                    'success'
                )
                reset()
            } else {
                Swal.fire(
                    'Error!',
                    `No se pudo procesar su peticion`,
                    'error'
                )
            }
        })
    }
    

    return (
        <>
            <h3 data-aos="fade-up" className='text-center my-4  '>¡Dejanos tu mensaje!</h3>
            <Form  onSubmit={handleSubmit(onSubmit)} data-aos="fade-up" className='d-flex  flex-column'>
                <div className='d-md-flex'>
                    <Col md={6}>
                        <Form.Group className="mb-3 px-3" controlId="">
                            <Form.Label>Nombre Completo</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su nombre completo aqui" maxLength={40}
                                {...register("nombre", {
                                    required: "El nombre es obligatorio",
                                    minLength: {
                                        value: 4,
                                        message: "El nombre debe contener por lo menos 4 caracteres"
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "El nombre debe contener como maximo 30 caracteres"
                                    },
                                    pattern: {
                                        vaue: /^.{4,30}$/,
                                        message: "El nombre debe contener entre 4 y 30 caracteres."
                                    }
                                })} />
                            <Form.Text className="text-dark">
                                {errors.nombre?.message}
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3 px-3" controlId="">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese un email" maxLength={50} minLength={3} {
                                ...register('email', {
                                    //validaciones
                                    required: 'El email es obligatorio',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Debe ingresar un email válido"
                                    }
                                })
                            } />
                            <Form.Text className="text-dark">
                                {errors.email?.message}
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </div>
                <Col md={12}>
                    <Form.Group className="mb-3 px-3" controlId="">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder='Ingrese aquí su mensaje' {
                            ...register('comentario', {
                                //validaciones
                                required: 'El comentario es obligatorio',
                                pattern: {
                                    vaue: /^.{4,500}$/,
                                    message: "El nombre debe contener entre 4 y 500 caracteres."
                                }
                            })
                        } />
                        <Form.Text className="text-dark">
                                {errors.comentario?.message}
                            </Form.Text>
                    </Form.Group>
                    <div className="text-center w-100">
                        <Button type="submit" className='btn btn-enviar  mx-3 mt-3 w-25'>Enviar</Button>
                    </div>
                </Col>
            </Form>
        </>
    );
};

export default CrearMensaje;
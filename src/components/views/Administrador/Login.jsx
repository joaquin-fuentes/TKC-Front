import { Container, Form, Button } from "react-bootstrap";
import { login } from "../../helpers/queries.js";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Swal from "sweetalert2";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.nombreUsuario === "admin") {
      data.rol = "administrador";
    } else {
      data.rol = "mozo";
    }
    login(data).then((respuesta) => {
      if (respuesta) {
        sessionStorage.setItem("usuarioLogueado", JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        Swal.fire("Bienvenido", "Ha ingresado correctamente", "success");
        navigate("/administrador");
      } else {
        Swal.fire("Error", "Usuario o contraseña incorrecto", "error");
      }
    });
  };

  return (
    <main className="min-h-screen bg-red-800 flex items-center justify-center">
      <section className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Iniciar Sesión
        </h2>
        <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Nombre de usuario */}
          <Form.Group controlId="formBasicEmail" className="space-y-2">
            <Form.Label className="flex items-center text-gray-900">
              <FaUser className="mr-2" />
              Usuario:
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre de usuario"
              className={`w-full border ${
                errors.nombreUsuario ? "border-red-500" : "border-gray-300"
              } rounded-lg p-3 focus:ring-2 focus:ring-red-500`}
              {...register("nombreUsuario", {
                required: "El usuario es obligatorio",
                minLength: {
                  value: 4,
                  message: "Debe tener al menos 4 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "No puede exceder los 30 caracteres",
                },
              })}
            />
            {errors.nombreUsuario && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nombreUsuario.message}
              </p>
            )}
          </Form.Group>

          {/* Contraseña */}
          <Form.Group controlId="formBasicPassword" className="space-y-2">
            <Form.Label className="flex items-center text-gray-900">
              <RiLockPasswordFill className="mr-2" />
              Contraseña:
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              className={`w-full border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg p-3 focus:ring-2 focus:ring-red-500`}
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Debe tener al menos 6 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "No puede exceder los 20 caracteres",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </Form.Group>

          {/* Botón de inicio de sesión */}
          <Button
            variant="danger"
            type="submit"
            className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
          >
            Ingresar
          </Button>
        </Form>
      </section>
    </main>
  );
};

export default Login;

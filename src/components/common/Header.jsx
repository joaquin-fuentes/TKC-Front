import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import logoTransparente from "../../assets/logos/logoTransparente.webp";
import facebook from "../../assets/imagenes/icons8-facebook.svg";
import whatsapp from "../../assets/imagenes/icons8-whatsapp.svg";
import instagram from "../../assets/imagenes/icons8-instagram.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
        sessionStorage.removeItem("usuarioLogueado");
        setUsuarioLogueado({});
        Swal.fire("¡Listo!", "Sesión cerrada", "success");
      }
    });
  };

  const isHome = location.pathname === "/" || location.pathname === "/#inicio";

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled || menuOpen ? "bg-red-600 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/#inicio" className="flex items-center">
          <img
            src={logoTransparente}
            alt="Logo"
            className="w-20 filter drop-shadow-md"
          />
        </a>

        {/* Menú hamburguesa en móviles */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <IoClose className="text-white text-4xl cursor-pointer" />
          ) : (
            <GiHamburgerMenu className="text-white text-4xl cursor-pointer" />
          )}
        </div>

        {/* Links de navegación para pantallas grandes */}
        <nav
          className={`lg:flex items-center space-x-6 hidden ${
            menuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <a
            href="/#inicio"
            className="text-white hover:text-yellow-400 transition font-medium"
          >
            Inicio
          </a>
          <a
            href="/#nosotros"
            className="text-white hover:text-yellow-400 transition font-medium"
          >
            Nosotros
          </a>
          <a
            href="/#servicios"
            className="text-white hover:text-yellow-400 transition font-medium"
          >
            Servicios
          </a>
          <a
            href="/#dondeencontrarnos"
            className="text-white hover:text-yellow-400 transition font-medium"
          >
            Dónde encontrarnos
          </a>
          <a
            href="/#contacto"
            className="text-white hover:text-yellow-400 transition font-medium"
          >
            Contacto
          </a>

          {usuarioLogueado.rol === "administrador" && (
            <>
              <a
                href="/administrador"
                className="text-white hover:text-yellow-400 transition font-medium"
              >
                Administrador
              </a>
              <button
                onClick={logout}
                className="text-white hover:text-yellow-400 transition font-medium"
              >
                Cerrar sesión
              </button>
            </>
          )}
        </nav>

        {/* Redes sociales en pantallas grandes */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="https://www.facebook.com/tkcturismoaventura/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition"
          >
            <img
              src={facebook}
              alt="Facebook"
              className="w-7 h-7 filter drop-shadow-md hover:scale-110 transition duration-200"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=3816097754"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition"
          >
            <img
              src={whatsapp}
              alt="WhatsApp"
              className="w-7 h-7 filter drop-shadow-md hover:scale-110 transition duration-200"
            />
          </a>
          <a
            href="https://www.instagram.com/tucumankayakclub/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="w-7 h-7 filter drop-shadow-md hover:scale-110 transition duration-200"
            />
          </a>
        </div>
      </div>

      {/* Menú móvil con enlaces y redes sociales */}
      <nav
        className={`lg:hidden bg-red-600 transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
        style={{ transitionDelay: "100ms" }}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <a
              href="/#inicio"
              className="text-white hover:text-yellow-400 transition font-medium"
              onClick={toggleMenu}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/#nosotros"
              className="text-white hover:text-yellow-400 transition font-medium"
              onClick={toggleMenu}
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="/#servicios"
              className="text-white hover:text-yellow-400 transition font-medium"
              onClick={toggleMenu}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="/#dondeencontrarnos"
              className="text-white hover:text-yellow-400 transition font-medium"
              onClick={toggleMenu}
            >
              Dónde encontrarnos
            </a>
          </li>
          <li>
            <a
              href="/#contacto"
              className="text-white hover:text-yellow-400 transition font-medium"
              onClick={toggleMenu}
            >
              Contacto
            </a>
          </li>

          {/* Redes sociales en el menú móvil */}
          <li className="flex space-x-4">
            <a
              href="https://www.facebook.com/tkcturismoaventura/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="w-7 h-7 filter drop-shadow-md hover:scale-110 transition duration-200"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=3816097754"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
            >
              <img
                src={whatsapp}
                alt="WhatsApp"
                className="w-7 h-7 filter drop-shadow-md hover:scale-110 transition duration-200"
              />
            </a>
            <a
              href="https://www.instagram.com/tucumankayakclub/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="w-7 h-7 filter drop-shadow-md hover:scale-110 transition duration-200"
              />
            </a>
          </li>

          {usuarioLogueado.rol === "administrador" && (
            <>
              <li>
                <a
                  href="/administrador"
                  className="text-white hover:text-yellow-400 transition font-medium"
                  onClick={toggleMenu}
                >
                  Administrador
                </a>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="text-white hover:text-yellow-400 transition font-medium"
                >
                  Cerrar sesión
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

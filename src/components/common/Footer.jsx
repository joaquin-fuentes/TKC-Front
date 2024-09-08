import React from "react";
import { Link } from "react-router-dom";
import logoTransparente from "../../assets/logos/logoTransparente.webp";
import { FaFacebookSquare, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 pt-40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <section className="flex flex-col items-center justify-center">
            <Link to="/#inicio" aria-label="Volver al inicio">
              <img
                src={logoTransparente}
                alt="Logo Tucumán Kayak Club"
                className="w-32 mb-4"
              />
            </Link>
          </section>

          {/* Navegación */}
          <nav className="flex flex-col items-center justify-center text-center">
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#inicio"
                  title="Ir a la sección Inicio"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/#nosotros"
                  title="Ir a la sección Nosotros"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/#servicios"
                  title="Ir a la sección Servicios"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/#contacto"
                  title="Ir a la sección Contacto"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contacto */}
          <section className="flex flex-col items-center justify-center">
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-center">
              <li className="flex justify-center">
                <a
                  href="https://api.whatsapp.com/send?phone=3816097754"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Enviar mensaje por WhatsApp"
                  className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>3816097754</span>
                </a>
              </li>
              <li className="flex justify-center">
                <a
                  href="https://www.facebook.com/tkcturismoaventura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visítanos en Facebook"
                  className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
                >
                  <FaFacebookSquare className="text-xl" />
                  <span>Tucumán Kayak Club</span>
                </a>
              </li>
              <li className="flex justify-center">
                <a
                  href="https://www.instagram.com/tucumankayakclub/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visítanos en Instagram"
                  className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
                >
                  <FaInstagram className="text-xl" />
                  <span>@TucumánKayakClub</span>
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Política y derechos */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Tucumán Kayak Club. Todos los derechos
            reservados.
          </p>
          {/* <nav className="mt-2">
            <Link
              to="/privacidad"
              title="Ver nuestra Política de Privacidad"
              className="text-gray-400 hover:text-yellow-400 mx-2"
            >
              Política de Privacidad
            </Link>
            <Link
              to="/terminos"
              title="Ver nuestros Términos de Uso"
              className="text-gray-400 hover:text-yellow-400 mx-2"
            >
              Términos de Uso
            </Link>
          </nav> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

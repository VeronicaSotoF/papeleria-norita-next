import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Dirección del negocio</h3>
          <p>Calle Ejemplo 123, Centro, Sayula, Jalisco</p>
        </div>

        <div className="footer-section contact-info">
          <p>📞 &nbsp; 342 123 4567</p>
          <p>✉️ &nbsp; contacto@papelerianorita.com</p>
        </div>

        <div className="footer-section social-section">
          <h3>Síguenos</h3>

          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/523421234567"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

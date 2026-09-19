import Link from "next/link";
import {
  FiArrowRight,
  FiBookOpen,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const productos = [
  {
    nombre: "Cuaderno profesional",
    precio: "$45.00",
  },
  {
    nombre: "Pluma de gel",
    precio: "$18.00",
  },
  {
    nombre: "Colores de madera",
    precio: "$65.00",
  },
  {
    nombre: "Carpeta tamaño carta",
    precio: "$32.00",
  },
];

export default function Home() {
  return (
    <div className="site-container">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-content">
          <Link href="/" className="brand">
            <div className="brand-icon">
              <FiBookOpen />
            </div>

            <div className="brand-text">
              <span>PAPELERÍA</span>
              <strong>NORITA</strong>
            </div>
          </Link>

          <nav className="nav-links">
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>

          <div className="nav-actions">
            <button className="icon-button" aria-label="Buscar" type="button">
              <FiSearch />
            </button>

            <button
              className="icon-button cart-button"
              aria-label="Carrito"
              type="button"
            >
              <FiShoppingCart />
              <span className="cart-number">0</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-image placeholder-image">
            <span>Imagen principal</span>
          </div>

          <div className="hero-content">
            <span className="hero-label">PAPELERÍA NORITA</span>

            <h1>
              Todo lo que necesitas,
              <br />
              en un solo lugar
            </h1>

            <p>
              Encuentra útiles escolares, papelería y artículos de oficina al
              mejor precio.
            </p>

            <Link href="/tienda" className="primary-button">
              Ir a la tienda
              <FiArrowRight />
            </Link>
          </div>
        </section>

        {/* PRODUCTOS DESTACADOS */}
        <section className="featured-products">
          <div className="section-heading">
            <span>LO MÁS BUSCADO</span>
            <h2>Productos destacados</h2>
          </div>

          <div className="products-grid">
            {productos.map((producto) => (
              <article className="product-card" key={producto.nombre}>
                <div className="product-image placeholder-image">
                  <span>Imagen</span>
                </div>

                <div className="product-info">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.precio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dirección del negocio</h3>
            <p>Calle Ejemplo 123, Col. Centro</p>
          </div>

          <div className="footer-section contact-info">
            <p>📞 &nbsp; 55 1234 5678</p>
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
    </div>
  );
}

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

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
  );
}

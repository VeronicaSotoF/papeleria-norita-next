import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Slider from "../components/Slider";
import StarRating from "../components/StarRating";
import { productos } from "./data/productos";

const destacados = productos.slice(0, 4);

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <Slider />

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
          {destacados.map((producto) => (
            <article className="product-card" key={producto.id}>
              <Link
                href="/tienda"
                className="product-image product-image-button"
                aria-label={`Ver ${producto.nombre} en la tienda`}
              >
                <Image
                  src={producto.imagen}
                  alt={producto.alt}
                  width={800}
                  height={800}
                />
              </Link>

              <div className="product-info">
                <h3>{producto.nombre}</h3>
                <p>
                  {producto.precio.toLocaleString("es-MX", {
                    style: "currency",
                    currency: "MXN",
                  })}
                </p>
                <StarRating id={`producto-${producto.id}`} soloLectura />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi";
import StarRating from "./StarRating";

function formatoPrecio(valor) {
  return valor.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
  });
}

export default function ProductGallery({ productos }) {
  // null = lightbox cerrado; número = índice del producto abierto
  const [indice, setIndice] = useState(null);
  const abierto = indice !== null;
  const total = productos.length;

  const cerrar = () => setIndice(null);
  const siguiente = () => setIndice((i) => (i + 1) % total);
  const anterior = () => setIndice((i) => (i - 1 + total) % total);

  // Teclado y bloqueo de scroll mientras el lightbox está abierto
  useEffect(() => {
    if (!abierto) return;

    const alPresionar = (e) => {
      if (e.key === "Escape") setIndice(null);
      if (e.key === "ArrowRight") setIndice((i) => (i + 1) % total);
      if (e.key === "ArrowLeft") setIndice((i) => (i - 1 + total) % total);
    };

    document.addEventListener("keydown", alPresionar);
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", alPresionar);
      document.body.style.overflow = overflowAnterior;
    };
  }, [abierto, total]);

  const actual = abierto ? productos[indice] : null;

  return (
    <>
      <div className="products-grid">
        {productos.map((producto, i) => (
          <article className="product-card" key={producto.id}>
            <button
              type="button"
              className="product-image product-image-button"
              onClick={() => setIndice(i)}
              aria-label={`Ver ${producto.nombre} en grande`}
            >
              <Image
                src={producto.imagen}
                alt={producto.alt}
                width={800}
                height={800}
              />
              <span className="product-zoom">
                <FiZoomIn />
              </span>
            </button>

            <div className="product-info">
              <h3>{producto.nombre}</h3>
              <p>{formatoPrecio(producto.precio)}</p>
              <StarRating id={`producto-${producto.id}`} />
            </div>
          </article>
        ))}
      </div>

      {actual && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto de ${actual.nombre}`}
          onClick={cerrar}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={cerrar}
            aria-label="Cerrar"
          >
            <FiX />
          </button>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              anterior();
            }}
            aria-label="Producto anterior"
          >
            <FiChevronLeft />
          </button>

          <figure
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={actual.imagen}
              alt={actual.alt}
              width={800}
              height={800}
              className="lightbox-image"
            />
            <figcaption>
              <strong>{actual.nombre}</strong>
              <span>{formatoPrecio(actual.precio)}</span>
              <small>
                {indice + 1} de {total}
              </small>
            </figcaption>
          </figure>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              siguiente();
            }}
            aria-label="Producto siguiente"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </>
  );
}

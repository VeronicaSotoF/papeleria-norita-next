"use client";

import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const imagenes = [
  { src: "/papeleria-1.jpg", alt: "Útiles escolares de Papelería Norita" },
  { src: "/papeleria-2.jpg", alt: "Artículos de oficina de Papelería Norita" },
  { src: "/papeleria-3.jpg", alt: "Papelería variada en Papelería Norita" },
];

export default function Slider() {
  const [actual, setActual] = useState(0);
  const [pausado, setPausado] = useState(false);

  const siguiente = () => setActual((a) => (a + 1) % imagenes.length);
  const anterior = () =>
    setActual((a) => (a - 1 + imagenes.length) % imagenes.length);

  useEffect(() => {
    if (pausado) return;

    // Al depender de "actual", el temporizador se reinicia en cada cambio manual
    const intervalo = setInterval(siguiente, 4000);
    return () => clearInterval(intervalo);
  }, [actual, pausado]);

  return (
    <div
      className="hero-image carousel-image"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
    >
      <img src={imagenes[actual].src} alt={imagenes[actual].alt} />

      <button
        type="button"
        className="carousel-arrow carousel-arrow-left"
        onClick={anterior}
        aria-label="Imagen anterior"
      >
        <FiChevronLeft />
      </button>

      <button
        type="button"
        className="carousel-arrow carousel-arrow-right"
        onClick={siguiente}
        aria-label="Imagen siguiente"
      >
        <FiChevronRight />
      </button>

      <div className="carousel-indicators">
        {imagenes.map((imagen, indice) => (
          <button
            key={imagen.src}
            type="button"
            className={
              actual === indice ? "carousel-dot active" : "carousel-dot"
            }
            onClick={() => setActual(indice)}
            aria-label={`Mostrar imagen ${indice + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

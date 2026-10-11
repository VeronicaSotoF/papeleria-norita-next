"use client";

import { useState, useEffect } from "react";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

// id: identificador único del producto o página (ej. "cuaderno-profesional")
// soloLectura: true para solo mostrar estrellas (ej. en Inicio)
export default function StarRating({
  id,
  soloLectura = false,
  grande = false,
}) {
  const [votos, setVotos] = useState({ suma: 0, cantidad: 0 });
  const [miVoto, setMiVoto] = useState(0);
  const [hover, setHover] = useState(0);

  // Cargar datos guardados
  useEffect(() => {
    try {
      const guardado = JSON.parse(localStorage.getItem(`rating-${id}`));
      if (guardado) {
        setVotos({ suma: guardado.suma, cantidad: guardado.cantidad });
        setMiVoto(guardado.miVoto || 0);
      }
    } catch {
      // si localStorage no está disponible, se ignora
    }
  }, [id]);

  const calificar = (valor) => {
    if (soloLectura) return;

    // Si ya había votado, se reemplaza su voto anterior
    const nuevaSuma = votos.suma - miVoto + valor;
    const nuevaCantidad = miVoto ? votos.cantidad : votos.cantidad + 1;

    setVotos({ suma: nuevaSuma, cantidad: nuevaCantidad });
    setMiVoto(valor);

    try {
      localStorage.setItem(
        `rating-${id}`,
        JSON.stringify({
          suma: nuevaSuma,
          cantidad: nuevaCantidad,
          miVoto: valor,
        }),
      );
    } catch {}
  };

  const promedio = votos.cantidad ? votos.suma / votos.cantidad : 0;
  const mostrar = hover || Math.round(promedio);

  return (
    <div className={grande ? "rating rating-large" : "rating"}>
      <div className="rating-stars" onMouseLeave={() => setHover(0)}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            className={`rating-star ${n <= mostrar ? "filled" : ""}`}
            onClick={() => calificar(n)}
            onMouseEnter={() => !soloLectura && setHover(n)}
            disabled={soloLectura}
            aria-label={`Calificar con ${n} ${n === 1 ? "estrella" : "estrellas"}`}
          >
            {n <= mostrar ? <FaStar /> : <FiStar />}
          </button>
        ))}
      </div>

      <span className="rating-text">
        {votos.cantidad
          ? `${promedio.toFixed(1)} (${votos.cantidad})`
          : "Sin valoraciones"}
      </span>

      {miVoto > 0 && !soloLectura && (
        <span className="rating-thanks">¡Gracias por tu valoración!</span>
      )}
    </div>
  );
}

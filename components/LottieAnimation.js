"use client";

import { useEffect, useRef } from "react";

// src: ruta del JSON dentro de /public (ej. "/animations/notebook.json")
export default function LottieAnimation({
  src,
  ancho = 280,
  loop = true,
  descripcion = "Animación decorativa",
}) {
  const contenedor = useRef(null);

  useEffect(() => {
    let animacion;
    let cancelado = false;

    async function cargar() {
      try {
        const [modulo, respuesta] = await Promise.all([
          import("lottie-web"),
          fetch(src),
        ]);
        const lottie = modulo.default ?? modulo;
        const datos = await respuesta.json();

        if (cancelado || !contenedor.current) return;

        // Respeta a quien tiene activado "reducir movimiento" en su sistema
        const reducirMovimiento = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        animacion = lottie.loadAnimation({
          container: contenedor.current,
          renderer: "svg",
          loop: loop && !reducirMovimiento,
          autoplay: !reducirMovimiento,
          animationData: datos,
        });
      } catch {
        // si falla la carga, simplemente no se muestra la animación
      }
    }

    cargar();

    return () => {
      cancelado = true;
      if (animacion) animacion.destroy();
    };
  }, [src, loop]);

  return (
    <div
      ref={contenedor}
      className="lottie-box"
      style={{ width: ancho, maxWidth: "100%" }}
      role="img"
      aria-label={descripcion}
    />
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import { useCart } from "./CartContext";

export default function AddToCartButton({ producto }) {
  const { agregar } = useCart();
  const [agregado, setAgregado] = useState(false);
  const temporizador = useRef(null);

  useEffect(() => {
    return () => clearTimeout(temporizador.current);
  }, []);

  function alAgregar() {
    agregar(producto);
    setAgregado(true);

    clearTimeout(temporizador.current);
    temporizador.current = setTimeout(() => setAgregado(false), 1400);
  }

  return (
    <button
      type="button"
      className={`add-to-cart ${agregado ? "added" : ""}`}
      onClick={alAgregar}
      aria-live="polite"
    >
      <span className="add-to-cart-icon" key={agregado ? "ok" : "carrito"}>
        {agregado ? <FiCheck /> : <FiShoppingCart />}
      </span>
      <span>{agregado ? "¡Agregado!" : "Agregar al carrito"}</span>
    </button>
  );
}

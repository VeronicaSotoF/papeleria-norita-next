"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const preguntas = [
  {
    pregunta: "¿Cuál es el horario de atención?",
    respuesta:
      "Atendemos de lunes a sábado, de 9:00 a. m. a 8:00 p. m. Los domingos permanecemos cerrados.",
  },
  {
    pregunta: "¿Manejan ventas por mayoreo?",
    respuesta:
      "Sí, contamos con precios especiales para escuelas, oficinas y compras en volumen. Escríbenos por WhatsApp o al correo de contacto para más información.",
  },
  {
    pregunta: "¿Hacen envíos a domicilio?",
    respuesta:
      "Por ahora solo atendemos ventas en el establecimiento. Estamos trabajando para habilitar envíos a domicilio próximamente.",
  },
  {
    pregunta: "¿Puedo apartar un producto?",
    respuesta:
      "Sí, puedes apartar tu producto llamando o escribiendo por WhatsApp, y recogerlo en tienda el mismo día.",
  },
  {
    pregunta: "¿Aceptan tarjeta de crédito o débito?",
    respuesta:
      "Aceptamos efectivo, tarjeta de crédito, débito y transferencia.",
  },
];

export default function Faq() {
  const [abierta, setAbierta] = useState(null);

  function alternar(indice) {
    setAbierta(abierta === indice ? null : indice);
  }

  return (
    <div className="faq-list">
      {preguntas.map((item, indice) => {
        const estaAbierta = abierta === indice;

        return (
          <div className="faq-item" key={item.pregunta}>
            <button
              className="faq-question"
              type="button"
              onClick={() => alternar(indice)}
              aria-expanded={estaAbierta}
              aria-controls={`faq-respuesta-${indice}`}
            >
              <span>{item.pregunta}</span>
              <FiChevronDown
                className={`faq-icon ${estaAbierta ? "open" : ""}`}
              />
            </button>

            {estaAbierta && (
              <p className="faq-answer" id={`faq-respuesta-${indice}`}>
                {item.respuesta}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

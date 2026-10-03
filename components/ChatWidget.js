"use client";

import { useState, useRef, useEffect } from "react";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";

const respuestasAutomaticas = [
  {
    palabras: ["horario", "hora", "abren", "cierran"],
    respuesta:
      "Nuestro horario es de lunes a sábado, de 9:00 a. m. a 8:00 p. m.",
  },
  {
    palabras: ["ubicacion", "ubicación", "direccion", "dirección", "donde"],
    respuesta: "Nos encontramos en Calle Ejemplo 123, Centro, Sayula, Jalisco.",
  },
  {
    palabras: ["precio", "precios", "costo", "cuanto", "cuánto"],
    respuesta:
      "Puedes consultar los precios de nuestros productos en la sección Tienda.",
  },
  {
    palabras: ["envio", "envío", "domicilio", "entrega"],
    respuesta:
      "Por ahora solo atendemos ventas en el establecimiento. Pronto habilitaremos envíos a domicilio.",
  },
  {
    palabras: ["contacto", "telefono", "teléfono", "whatsapp", "correo"],
    respuesta:
      "Puedes escribirnos al 342 123 4567 o encontrar nuestros datos en la página de Contacto.",
  },
  {
    palabras: ["hola", "buenas", "buenos"],
    respuesta: "¡Hola! Bienvenido a Papelería Norita, ¿en qué puedo ayudarte?",
  },
  {
    palabras: ["gracias"],
    respuesta: "¡Con gusto! Cualquier otra duda, aquí estoy.",
  },
];

function generarRespuesta(mensaje) {
  const texto = mensaje.toLowerCase();

  const coincidencia = respuestasAutomaticas.find((item) =>
    item.palabras.some((palabra) => texto.includes(palabra)),
  );

  if (coincidencia) {
    return coincidencia.respuesta;
  }

  return "Gracias por tu mensaje. Un miembro de nuestro equipo te responderá pronto. Mientras tanto, puedes preguntarme por horario, ubicación, precios o contacto.";
}

export default function ChatWidget() {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState([
    {
      autor: "bot",
      texto:
        "¡Hola! Soy el asistente de Papelería Norita. ¿En qué puedo ayudarte?",
    },
  ]);
  const [entrada, setEntrada] = useState("");
  const finMensajes = useRef(null);

  useEffect(() => {
    if (abierto) {
      finMensajes.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [mensajes, abierto]);

  function enviarMensaje(evento) {
    evento.preventDefault();

    const texto = entrada.trim();
    if (!texto) return;

    const mensajeUsuario = { autor: "usuario", texto };
    const respuestaBot = { autor: "bot", texto: generarRespuesta(texto) };

    setMensajes((actuales) => [...actuales, mensajeUsuario]);
    setEntrada("");

    setTimeout(() => {
      setMensajes((actuales) => [...actuales, respuestaBot]);
    }, 500);
  }

  return (
    <div className="chat-widget">
      {abierto && (
        <div className="chat-window" role="dialog" aria-label="Chat de ayuda">
          <div className="chat-header">
            <span>Papelería Norita</span>

            <button
              className="chat-close"
              aria-label="Cerrar chat"
              type="button"
              onClick={() => setAbierto(false)}
            >
              <FiX />
            </button>
          </div>

          <div className="chat-messages">
            {mensajes.map((mensaje, indice) => (
              <div key={indice} className={`chat-bubble ${mensaje.autor}`}>
                {mensaje.texto}
              </div>
            ))}
            <div ref={finMensajes} />
          </div>

          <form className="chat-form" onSubmit={enviarMensaje}>
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={entrada}
              onChange={(evento) => setEntrada(evento.target.value)}
              aria-label="Mensaje"
            />

            <button type="submit" aria-label="Enviar mensaje">
              <FiSend />
            </button>
          </form>
        </div>
      )}

      <button
        className="chat-toggle"
        aria-label={abierto ? "Cerrar chat" : "Abrir chat"}
        type="button"
        onClick={() => setAbierto(!abierto)}
      >
        {abierto ? <FiX /> : <FiMessageCircle />}
      </button>
    </div>
  );
}

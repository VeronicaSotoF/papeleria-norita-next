"use client";

import { useState } from "react";

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  function manejarEnvio(e) {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();
  }

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <div className="contact-image">
          <img src="/Hero.jpg" alt="Tienda Papelería Norita" />
        </div>

        <div className="contact-form-content">
          <h1 className="Form" >Contáctanos</h1>
          <p>Cuéntanos tus dudas y te ayudaremos a la brevedad.</p>

          <form onSubmit={manejarEnvio}>
            <div className="contact-fields">
              <div className="contact-field">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
              </div>

              <div className="contact-field">
                <label htmlFor="apellido">Apellido</label>
                <input id="apellido" name="apellido" type="text" placeholder="Tu apellido" required />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="correo">Correo electrónico</label>
              <input id="correo" name="correo" type="email" placeholder="ejemplo@correo.com" required />
            </div>

            <div className="contact-field">
              <label htmlFor="whatsapp">WhatsApp</label>
              <input id="whatsapp" name="whatsapp" type="tel" placeholder="Tu número de teléfono" pattern="[0-9+() -]{10,20}" required />
            </div>

            <div className="contact-field">
              <label htmlFor="motivo">Motivo de contacto</label>
              <select id="motivo" name="motivo" defaultValue="" required>
                <option value="" disabled>
                  Selecciona un motivo
                </option>
                <option value="Productos">Información de productos</option>
                <option value="Pedidos">Pedidos</option>
                <option value="Mayoreo">Compras de mayoreo</option>
                <option value="Existencias">Existencia de productos</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje..."rows="4" required />
            </div>

            <label className="contact-consent">
              <input type="checkbox" required />
              <span>
                Acepto ser contactado por atención a clientes de Papelería
                Norita.
              </span>
            </label>

            <button type="submit" className="contact-submit">
              Enviar
            </button>

            {enviado && (
              <p className="contact-success">
                ¡Gracias por contactarnos! Tu formulario fue validado.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

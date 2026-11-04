import ContactForm from "../../components/ContactForm";
import LocationMap from "../../components/LocationMap";
import Faq from "../../components/Faq";
import StarRating from "../../components/StarRating";

export const metadata = {
  title: "Contacto",
};

export default function Contacto() {
  return (
    <main>
      <ContactForm />

      <LocationMap />

      <section className="faq-section">
        <div className="section-heading">
          <span>DUDAS COMUNES</span>
          <h2>Preguntas frecuentes</h2>
        </div>

        <Faq />
      </section>

      <section className="rating-section">
        <h2>¿Qué te pareció la atención de Norita?</h2>
        <p>Tu opinión nos ayuda a mejorar. Selecciona de 1 a 5 estrellas.</p>
        <StarRating id="atencion-norita" grande />
      </section>
    </main>
  );
}

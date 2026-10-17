import { FiTarget, FiEye } from "react-icons/fi";
import VideoEmbed from "../../components/VideoEmbed";

export const metadata = {
  title: "Nosotros",
};

export default function Nosotros() {
  return (
    <main>
      <section className="about">
        <div className="about-video">
          <VideoEmbed
            id="mxEou10KHrA"
            titulo="Haul de útiles escolares para el ciclo escolar 2026-2027"
          />
          <p className="video-caption">
            Video de apoyo: ¡así se prepara el regreso a clases! Material de un
            tercero, con fines ilustrativos.
          </p>
        </div>

        <div className="about-content">
          <h1>Sobre nosotros</h1>

          <p className="about-intro">
            Somos una papelería con más de 20 años de experiencia ofreciendo
            productos de calidad y el mejor servicio a nuestros clientes.
          </p>

          <div className="about-item">
            <div className="about-icon">
              <FiTarget />
            </div>

            <div>
              <h2>Misión</h2>
              <p>
                Brindar productos de papelería y oficina de calidad, con
                atención personalizada y precios accesibles.
              </p>
            </div>
          </div>

          <div className="about-item">
            <div className="about-icon">
              <FiEye />
            </div>

            <div>
              <h2>Visión</h2>
              <p>
                Ser la papelería preferida por nuestros clientes, reconocida por
                nuestra variedad, calidad y servicio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

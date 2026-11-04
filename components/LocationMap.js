import {
  FiMapPin,
  FiClock,
  FiPhone,
  FiMail,
  FiNavigation,
} from "react-icons/fi";

const datos = [
  {
    Icono: FiMapPin,
    titulo: "Dirección",
    lineas: ["Calle Ejemplo 123, Centro", "Sayula, Jalisco"],
  },
  {
    Icono: FiClock,
    titulo: "Horario",
    lineas: ["Lunes a sábado: 9:00 a. m. a 8:00 p. m.", "Domingos: cerrado"],
  },
  {
    Icono: FiPhone,
    titulo: "Teléfono",
    lineas: ["342 123 4567"],
  },
  {
    Icono: FiMail,
    titulo: "Correo",
    lineas: ["contacto@papelerianorita.com"],
  },
];

const columnas = [
  { x: 20, w: 120 },
  { x: 170, w: 110 },
  { x: 320, w: 110 },
  { x: 460, w: 120 },
];

const filas = [
  { y: 20, h: 85 },
  { y: 135, h: 70 },
  { y: 245, h: 80 },
  { y: 355, h: 45 },
];

export default function LocationMap() {
  return (
    <section className="location-section" aria-labelledby="ubicacion-titulo">
      <div className="section-heading">
        <span>UBICACIÓN</span>
        <h2 id="ubicacion-titulo">Dónde encontrarnos</h2>
      </div>

      <div className="location-grid">
        <div className="location-info">
          <ul className="location-list">
            {datos.map(({ Icono, titulo, lineas }) => (
              <li className="location-item" key={titulo}>
                <span className="location-icon">
                  <Icono />
                </span>
                <div>
                  <h3>{titulo}</h3>
                  {lineas.map((linea) => (
                    <p key={linea}>{linea}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <a
            className="primary-button"
            href="https://www.google.com/maps/search/?api=1&query=Sayula+Jalisco+Mexico"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiNavigation />
            Cómo llegar
          </a>
        </div>

        <figure className="location-map">
          <svg
            viewBox="0 0 600 420"
            role="img"
            aria-label="Mapa ilustrativo: Papelería Norita se encuentra en Calle Ejemplo 123, Centro, Sayula, Jalisco"
          >
            {/* Fondo = calles */}
            <rect width="600" height="420" className="map-bg" />

            {/* Manzanas */}
            {filas.map((fila, f) =>
              columnas.map((col, c) => {
                const esParque = f === 1 && c === 1;
                const esTienda = f === 2 && c === 2;
                const clase = esParque
                  ? "map-park"
                  : esTienda
                    ? "map-store-block"
                    : "map-block";

                return (
                  <rect
                    key={`${f}-${c}`}
                    x={col.x}
                    y={fila.y}
                    width={col.w}
                    height={fila.h}
                    rx="6"
                    className={clase}
                  />
                );
              }),
            )}

            {/* Nombres de calles */}
            <text
              x="110"
              y="230"
              textAnchor="middle"
              className="map-street-label"
            >
              AV. PRINCIPAL
            </text>
            <text
              x="500"
              y="125"
              textAnchor="middle"
              className="map-street-label"
            >
              CALLE MORELOS
            </text>
            <text
              transform="translate(304 85) rotate(-90)"
              textAnchor="middle"
              className="map-street-label"
            >
              CALLE EJEMPLO
            </text>
            <text
              transform="translate(159 300) rotate(-90)"
              textAnchor="middle"
              className="map-street-label"
            >
              CALLE HIDALGO
            </text>

            {/* Parque */}
            <text
              x="225"
              y="175"
              textAnchor="middle"
              className="map-park-label"
            >
              Jardín
            </text>

            {/* Brújula */}
            <g transform="translate(548 52)">
              <circle r="20" className="map-compass" />
              <path
                d="M0,-12 L6,6 L0,2 L-6,6 Z"
                className="map-compass-arrow"
              />
              <text y="-26" textAnchor="middle" className="map-street-label">
                N
              </text>
            </g>

            {/* Marcador de la papelería */}
            <g transform="translate(375 285)">
              <ellipse rx="12" ry="5" className="map-pulse" />
              <ellipse rx="9" ry="3.5" className="map-pin-shadow" />
              <path
                d="M0,0 C-10,-14 -16,-22 -16,-30 A16,16 0 1,1 16,-30 C16,-22 10,-14 0,0 Z"
                className="map-pin"
              />
              <circle cy="-30" r="6" className="map-pin-dot" />

              <rect
                x="26"
                y="-70"
                width="170"
                height="48"
                rx="8"
                className="map-label-box"
              />
              <text x="38" y="-46" className="map-label-title">
                Papelería Norita
              </text>
              <text x="38" y="-28" className="map-label-sub">
                Calle Ejemplo 123
              </text>
            </g>
          </svg>

          <figcaption>Mapa ilustrativo. La dirección es de ejemplo.</figcaption>
        </figure>
      </div>
    </section>
  );
}

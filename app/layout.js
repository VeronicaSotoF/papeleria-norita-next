import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Papelería Norita",
    template: "%s | Papelería Norita",
  },
  description:
    "Útiles escolares, papelería y artículos de oficina al mejor precio en Sayula, Jalisco.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="site-container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

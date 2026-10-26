import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";
import { CartProvider } from "../components/CartContext";
import CartDrawer from "../components/CartDrawer";

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
        <CartProvider>
          <div className="site-container">
            <Navbar />
            {children}
            <Footer />
          </div>
          <CartDrawer />
          <ChatWidget />
        </CartProvider>
      </body>
    </html>
  );
}

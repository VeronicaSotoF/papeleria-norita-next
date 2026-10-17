import ProductGallery from "../../components/ProductGallery";
import { productos } from "../data/productos";

export const metadata = {
  title: "Tienda",
};

export default function Tienda() {
  return (
    <main>
      <section className="featured-products">
        <div className="section-heading">
          <span>NUESTROS PRODUCTOS</span>
          <h1>Tienda</h1>
        </div>

        <ProductGallery productos={productos} />
      </section>
    </main>
  );
}

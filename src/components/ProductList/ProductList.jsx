import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({ products, onAddToCart, onViewDetails }) {
  const guitarras = products.filter(
    (product) => product.category === "guitarra",
  );
  const baterias = products.filter((product) => product.category === "bateria");
  const pianos = products.filter((product) => product.category === "piano");

  return (
    <section className="product-list">
      <div id="guitarras" className="category-section">
        <div className="category-header">
          <span className="category-icon">🎸</span>
          <h2 className="category-title">Guitarras</h2>
        </div>
        <p className="category-description">
          Explora nuestra colección de guitarras eléctricas, acústicas y
          clásicas
        </p>
        <div className="products-grid">
          {guitarras.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>

      <div id="baterias" className="category-section">
        <div className="category-header">
          <span className="category-icon">🥁</span>
          <h2 className="category-title">Baterías</h2>
        </div>
        <p className="category-description">
          Descubre sets completos de batería acústica y electrónica
        </p>
        <div className="products-grid">
          {baterias.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>

      <div id="pianos" className="category-section">
        <div className="category-header">
          <span className="category-icon">🎹</span>
          <h2 className="category-title">Pianos y Teclados</h2>
        </div>
        <p className="category-description">
          Encuentra pianos digitales, sintetizadores y controladores MIDI
        </p>
        <div className="products-grid">
          {pianos.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;

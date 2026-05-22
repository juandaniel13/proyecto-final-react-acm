import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product, onAddToCart, onViewDetails }) {
  const { name, price, image, description } = product;

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleViewDetails = () => {
    onViewDetails(product);
  };

  /**
   * @param {number} value
   * @returns {string}
   */
  const formatPrice = (value) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "COP",
    }).format(value);
  };

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" loading="lazy" />
        <div className="product-overlay" onClick={handleViewDetails}>
          <span className="view-details">Ver detalles</span>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>

        <div className="product-footer">
          <span className="product-price">{formatPrice(price)}</span>

          <button
            className={`add-to-cart-btn ${isAdded ? "added" : ""}`}
            onClick={handleAddToCart}
            disabled={isAdded}
          >
            {isAdded ? "¡Agregado! ✓" : "Agregar al carrito"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

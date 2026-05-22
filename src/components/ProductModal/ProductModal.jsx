import { useEffect } from "react";
import "./ProductModal.css";

function ProductModal({ product, onClose, onAddToCart }) {
  const { name, price, image, category } = product;

  const extendedDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`;

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // Cerrar al hacer click en el overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Formatear precio
  const formatPrice = (value) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  const getCategoryLabel = (cat) => {
    const labels = {
      guitarras: "Guitarra",
      baterias: "Bateria",
      pianos: "Piano / Teclado",
    };
    return labels[cat] || cat;
  };

  return (
    <div className="product-modal-overlay" onClick={handleOverlayClick}>
      <div className="product-modal">
        {/* Boton cerrar */}
        <button className="product-modal-close" onClick={onClose}>
          &times;
        </button>

        <div className="product-modal-content">
          <div className="product-modal-image-container">
            <img src={image} alt={name} className="product-modal-image" />
            <span className="product-modal-category">
              {getCategoryLabel(category)}
            </span>
          </div>

          <div className="product-modal-info">
            <h2 className="product-modal-name">{name}</h2>
            <p className="product-modal-price">{formatPrice(price)}</p>

            <div className="product-modal-description">
              <h3 className="description-title">Descripcion del Producto</h3>
              <p className="description-text">{extendedDescription}</p>
            </div>

            <div className="product-modal-features">
              <h3 className="features-title">Caracteristicas</h3>
              <ul className="features-list">
                <li>Alta calidad de sonido profesional</li>
                <li>Materiales premium seleccionados</li>
                <li>Garantia de 2 años incluida</li>
                <li>Envio gratis a todo el pais</li>
              </ul>
            </div>

            <button className="product-modal-add-btn" onClick={handleAddToCart}>
              Agregar al Carrito - {formatPrice(price)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;

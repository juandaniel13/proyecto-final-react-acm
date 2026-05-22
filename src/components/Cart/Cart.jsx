import CartItem from "../CartItem/CartItem";
import "./Cart.css";

function Cart({
  items,
  isOpen,
  onClose,
  onRemove,
  onIncrement,
  onDecrement,
  total,
  onCheckout,
}) {
  const formatPrice = (value) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      />

      <aside className={`cart ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2 className="cart-title">
            <span className="cart-title-icon">🛒</span>
            Tu Carrito
          </h2>
          <button className="cart-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="cart-empty">
              <span className="cart-empty-icon">🎵</span>
              <p className="cart-empty-text">Tu carrito está vacío</p>
              <p className="cart-empty-subtext">
                ¡Agrega instrumentos increíbles!
              </p>
            </div>
          ) : (
            <ul className="cart-items">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={onRemove}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                />
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span className="total-label">Total:</span>
              <span className="total-amount">{formatPrice(total)}</span>
            </div>
            <button className="checkout-btn" onClick={onCheckout}>
              Finalizar Compra
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

export default Cart;

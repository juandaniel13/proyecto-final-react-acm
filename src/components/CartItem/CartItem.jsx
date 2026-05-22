import "./CartItem.css";

function CartItem({ item, onRemove, onIncrement, onDecrement }) {
  const { id, name, price, image, quantity } = item;

  const formatPrice = (value) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <li className="cart-item">
      <img src={image} alt={name} className="cart-item-image" />

      <div className="cart-item-info">
        <h4 className="cart-item-name">{name}</h4>
        <p className="cart-item-price">{formatPrice(price)}</p>

        <div className="cart-item-controls">
          <div className="quantity-controls">
            <button
              className="quantity-btn"
              onClick={() => onDecrement(id)}
              aria-label="Decrementar cantidad"
            >
              −
            </button>
            <span className="quantity-value">{quantity}</span>
            <button
              className="quantity-btn"
              onClick={() => onIncrement(id)}
              aria-label="Incrementar cantidad"
            >
              +
            </button>
          </div>

          <span className="cart-item-subtotal">
            {formatPrice(price * quantity)}
          </span>
        </div>
      </div>

      <button
        className="cart-item-remove"
        onClick={() => onRemove(id)}
        aria-label="Eliminar producto"
      >
        🗑️
      </button>
    </li>
  );
}

export default CartItem;

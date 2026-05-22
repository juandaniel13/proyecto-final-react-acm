import "./Header.css";

function Header({ totalItems, onCartClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <span className="logo-icon">🎸</span>
          <h1 className="logo-text">MusicShop</h1>
        </div>

        <nav className="header-nav">
          <a href="#guitarras" className="nav-link">
            Guitarras
          </a>
          <a href="#baterias" className="nav-link">
            Baterías
          </a>
          <a href="#pianos" className="nav-link">
            Pianos
          </a>
        </nav>

        <button className="cart-button" onClick={onCartClick}>
          <span className="cart-icon">🛒</span>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>
      </div>
    </header>
  );
}

export default Header;

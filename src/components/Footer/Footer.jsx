import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">🎸</span>
            <span className="footer-logo-text">MusicShop</span>
          </div>
          <p className="footer-description">
            Tu tienda de instrumentos musicales de confianza. Ofrecemos los
            mejores productos para músicos profesionales y aficionados.
          </p>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Categorías</h4>
          <ul className="footer-list">
            <li>
              <a href="#guitarras">Guitarras</a>
            </li>
            <li>
              <a href="#baterias">Baterías</a>
            </li>
            <li>
              <a href="#pianos">Pianos</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-title">Contacto</h4>
          <p>📧juadrodriguezh@udistrital.edu.co</p>
          <p>📍 Bogotá, COL</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} MusicShop. Todos los derechos reservados.</p>
        <p className="footer-credit">
          Hecho por juadrodriguezh@udistrital.edu.co
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import { useEffect } from "react";
import "./SuccessModal.css";

function SuccessModal({ onClose }) {
  useEffect(() => {
    // Función para manejar la tecla Escape
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="success-icon">
          <span className="checkmark">✓</span>
        </div>

        <h2 className="modal-title">¡Compra Exitosa!</h2>
        <p className="modal-message">
          Gracias por tu compra. Tu pedido ha sido procesado correctamente.
        </p>
        <p className="modal-submessage">
          Recibirás un correo de confirmación con los detalles de tu pedido.
        </p>

        <button className="modal-btn" onClick={onClose}>
          Continuar Comprando
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;

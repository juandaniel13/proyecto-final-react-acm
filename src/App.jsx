import { useState } from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import SuccessModal from "./components/SuccessModal/SuccessModal";
import ProductModal from "./components/ProductModal/ProductModal";
import { products } from "./data/products";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  /**
   *
   * @param {Object} product
   */
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  /**
   *
   * @param {number} productId -
   */
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  };

  /**
   *
   * @param {number} productId -
   */
  const incrementQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  /**
   * @param {number} productId
   */
  const decrementQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    setShowSuccessModal(true);
    setCartItems([]);
    setIsCartOpen(false);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const viewProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <Header totalItems={getTotalItems()} onCartClick={toggleCart} />

      <main className="main-content">
        <ProductList
          products={products}
          onAddToCart={addToCart}
          onViewDetails={viewProductDetails}
        />

        <Cart
          items={cartItems}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onRemove={removeFromCart}
          onIncrement={incrementQuantity}
          onDecrement={decrementQuantity}
          total={calculateTotal()}
          onCheckout={handleCheckout}
        />
      </main>

      <Footer />

      {showSuccessModal && <SuccessModal onClose={closeSuccessModal} />}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeProductModal}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
}

export default App;

import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CheckOutForm from "./components/CheckOut/CheckOutForm";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showFormHandler = () => {
    setCartIsShown(false);
    setShowCheckOut(true);
  };

  const hideFormHandler = () => {
    setShowCheckOut(false);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onClose={hideCartHandler} onShowForm={showFormHandler} />
      )}
      {showCheckOut && <CheckOutForm onClose={hideFormHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

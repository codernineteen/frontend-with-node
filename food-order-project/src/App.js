import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const modalHandler = (boolean) => {
    setIsClicked(boolean);
  };
  return (
    <CartProvider>
      {isClicked === true && <Cart onModalVisible={modalHandler} />}
      <Header onModalVisible={modalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

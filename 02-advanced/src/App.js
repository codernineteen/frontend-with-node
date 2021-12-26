import React, { useState, useCallback } from "react";
import Demo from "./components/UI/Button/Demo/Demo";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const click = useCallback(() => {
    setShow((prevBool) => {
      return !prevBool;
    });
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={show}></Demo>
      <button onClick={click}>click</button>
    </div>
  );
}

export default App;

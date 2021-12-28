import { useState } from "react";

const useInput = (type = "", validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [touched, setTouched] = useState(false);

  const valid = validateValue(enteredValue);
  let hasError = !valid && touched;
  let validForEmail;
  if (type === "email") {
    validForEmail = enteredValue
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    hasError = (!validForEmail || !valid) && touched;
  }

  const inputHandler = (evt) => {
    setEnteredValue(evt.target.value);
  };
  const inputBlurHandler = (evt) => {
    setTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valid,
    hasError,
    validForEmail,
    inputHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

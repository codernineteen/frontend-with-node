import { useState } from "react";

const useForm = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [touched, setTouched] = useState(false);

  const valid = validate(enteredValue);
  const hasError = !valid && touched;

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
    enteredValue,
    valid,
    hasError,
    inputHandler,
    inputBlurHandler,
    reset,
  };
};

export default useForm;

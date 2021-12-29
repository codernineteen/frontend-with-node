import { useState } from "react";

const useForm = (validate) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const validInput = validate(value);
  const invalidInput = !validInput && touched;

  const inputChangeHandler = (evt) => {
    setValue(evt.target.value);
  };
  const inputBlurHandler = () => {
    setTouched(true);
  };

  return {
    value,
    validInput,
    invalidInput,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useForm;

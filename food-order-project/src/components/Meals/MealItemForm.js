import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const inputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (evt) => {
    evt.preventDefault();
    const amount = inputRef.current.value;
    const amountNum = +amount;
    if (amount.trim().length === 0 || amountNum < 1 || amountNum > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(amountNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={inputRef}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1~5)</p>}
    </form>
  );
};

export default MealItemForm;

import React, { useState } from "react";
import "./ExpensForm.css";

const ExpesneForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [booleanState, setBooleanState] = useState(false);

  const titleChangeHandler = (evt) => {
    setEnteredTitle(evt.target.value);
  };

  const amountChangeHandler = (evt) => {
    setEnteredAmount(evt.target.value);
  };

  const dateChangeHandler = (evt) => {
    setEnteredDate(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const changeBooleanHandler = () => {
    if (booleanState === false) {
      setBooleanState(true);
    } else {
      setBooleanState(false);
    }
  };

  if (!booleanState) {
    return <button onClick={changeBooleanHandler}>Add new expense</button>;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={changeBooleanHandler}>cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpesneForm;

import React from "react";
import "./NewExpense.css";
import ExpesneForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onCreateNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpesneForm onSaveExpenseData={saveExpenseDataHandler}></ExpesneForm>
    </div>
  );
};

export default NewExpense;

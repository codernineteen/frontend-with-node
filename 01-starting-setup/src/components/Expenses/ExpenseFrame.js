import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseFrame.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function ExpensesFrame(props) {
  const [filteredYear, setFilteredDate] = useState("2022");

  const filterDateHandler = (year) => {
    setFilteredDate(year);
  };
  const filteredList = props.data.filter(
    (el) => el.date.getFullYear() === Number(filteredYear)
  );

  let expensesContent = <p>No expenditures found</p>;
  if (filteredList.length > 0) {
    expensesContent = filteredList.map((el) => (
      <ExpenseItem
        key={el.id}
        title={el.title}
        amount={el.amount}
        date={el.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterDate={filterDateHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default ExpensesFrame;

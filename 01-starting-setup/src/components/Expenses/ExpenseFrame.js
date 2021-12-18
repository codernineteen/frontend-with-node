import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./ExpenseFrame.css";
import Card from "../UI/Card";

function ExpensesFrame(props) {
  const [filteredYear, setFilteredDate] = useState("2022");

  const filterDateHandler = (year) => {
    setFilteredDate(year);
  };
  const filteredList = props.data.filter(
    (el) => el.date.getFullYear() === Number(filteredYear)
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterDate={filterDateHandler}
        />
        <ExpensesChart expenses={filteredList} />
        <ExpensesList data={filteredList}></ExpensesList>
      </Card>
    </li>
  );
}

export default ExpensesFrame;

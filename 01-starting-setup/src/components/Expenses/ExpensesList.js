import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.data.length === 0) {
    return <h2 className="expense-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expensse-list">
      {props.data.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

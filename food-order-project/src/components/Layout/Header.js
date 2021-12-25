import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const modalHandler = (bool) => {
    props.onModalVisible(bool);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onModalVisible={modalHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="delicious foods" />
      </div>
    </Fragment>
  );
};

export default Header;

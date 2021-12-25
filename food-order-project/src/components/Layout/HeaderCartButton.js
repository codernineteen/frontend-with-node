import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const [btnNeedAnimation, setBtnNeedAnimation] = useState(false);
  const cartCtx = useContext(CartContext);
  let btnClasses = `${classes.button} ${btnNeedAnimation ? classes.bump : ""}`;
  const { items } = cartCtx;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnNeedAnimation(true);
    const bumpEffect = setTimeout(() => {
      setBtnNeedAnimation(false);
    }, 300);
    return () => {
      clearTimeout(bumpEffect);
    };
  }, [items]);

  const numOfCartItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const modalHandler = () => {
    props.onModalVisible(true);
  };

  return (
    <button className={btnClasses} onClick={modalHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;

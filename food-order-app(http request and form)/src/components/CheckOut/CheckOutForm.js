import Modal from "../UI/Modal";
import classes from "./CheckOutForm.module.css";
import useForm from "../../hooks/use-form";

const CheckOutForm = (props) => {
  const {
    value: nameValue,
    validInput: validName,
    invalidInput: invalidName,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useForm((value) => value.trim() !== "");

  const {
    value: addressValue,
    validInput: validAddress,
    invalidInput: invalidAddress,
    inputChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
  } = useForm((value) => value.trim() !== "");

  const submitFormHandler = async (evt) => {
    evt.preventDefault();
    if (!validName || !validAddress) {
      return alert("Form submit denied");
    }
    const response = await fetch(
      "https://react-http-975ab-default-rtdb.firebaseio.com/user.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: nameValue, address: addressValue }),
      }
    );
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error("Request denied");
    } else {
      alert("submit completed");
    }
  };

  const nameClass = invalidName
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];
  const addressClass = invalidAddress
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitFormHandler}>
        <div className={nameClass}>
          <div className="input-name">
            <label htmlFor="name">Name</label>
            <input
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              type="text"
              id="name"
            />
          </div>
          {invalidName && (
            <p className={classes["error-text"]}>Name must not be empty</p>
          )}
        </div>
        <div className={addressClass}>
          <div className="input-address">
            <label htmlFor="address">Address</label>
            <input
              value={addressValue}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
              type="text"
              id="adress"
            />
          </div>
          {invalidAddress && (
            <p className={classes["error-text"]}>Address must not be empty</p>
          )}
        </div>

        <div className={classes.actions}>
          <button className={classes.button}>Submit</button>
        </div>
      </form>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default CheckOutForm;

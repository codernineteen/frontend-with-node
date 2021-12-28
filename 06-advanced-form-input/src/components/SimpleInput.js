import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: validName,
    hasError: nameInputIsInvalid,
    inputHandler: nameInputHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput("common", (value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: nonEmptyEmail,
    hasError: emailInputIsInvalid,
    validForEmail: validEmail,
    inputHandler: emailInputHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput("email", (value) => value.trim() !== "");

  let formIsValid = false;
  if (validName && validEmail && nonEmptyEmail) {
    formIsValid = true;
  }

  const submitHandler = (evt) => {
    evt.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    nameReset();
    emailReset();
  };
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email input is invalid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

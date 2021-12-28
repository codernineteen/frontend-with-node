import useForm from "../hooks/use-form";

const BasicForm = (props) => {
  const {
    enteredValue: firstName,
    hasError: isFirstNameInvalid,
    inputHandler: firstNameHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: fR,
  } = useForm((value) => value.trim() !== "");

  const {
    enteredValue: lastName,
    hasError: isLastNameInvalid,
    inputHandler: lastNameHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lR,
  } = useForm((value) => value.trim() !== "");
  const {
    enteredValue: email,
    hasError: isEmailInvalid,
    inputHandler: emailHandler,
    inputBlurHandler: emailBlurHandler,
    reset: eR,
  } = useForm(
    (value) =>
      value.trim() !== "" &&
      value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
  );

  const submitHandler = (evt) => {
    evt.preventDefault();
    if (isFirstNameInvalid || isLastNameInvalid) {
      alert("You cannot submit this form");
      return;
    }
    console.log(firstName);
    fR();
    lR();
    eR();
  };

  const dynamicClassFirstName = isFirstNameInvalid
    ? "form-control invalid"
    : "form-control";

  const dynamicClassLastName = isLastNameInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={dynamicClassFirstName}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={firstNameHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
        </div>
        <div className={dynamicClassLastName}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={lastNameHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
      </div>

      {isFirstNameInvalid && (
        <p className="error-text">First name is invalid</p>
      )}
      {isLastNameInvalid && <p className="error-text">Last name is invalid</p>}
      {isEmailInvalid && <p className="error-text">Email is invalid</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

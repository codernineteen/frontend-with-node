import { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const userInputHandler = (evt) => {
    setUsername(evt.target.value);
  };
  const ageInputHandler = (evt) => {
    setAge(evt.target.value);
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const newUser = {
      name: username,
      age: Number(age),
    };
    props.onCreateUser(newUser);
    evt.target[0].value = "";
    evt.target[1].value = "";
    // setIsValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Username</label>
        <input
          type="text"
          className="form-input-username"
          onChange={userInputHandler}
        />
        <label>Age (Years)</label>
        <input
          type="number"
          className="form-input-age"
          min="1"
          max="100"
          onChange={ageInputHandler}
        />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserForm;

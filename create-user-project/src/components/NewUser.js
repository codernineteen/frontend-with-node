import { useState } from "react";
import "./NewUser.css";
import UserForm from "./UserForm";

const UserResults = (props) => {
  const [isValid, setIsValid] = useState(true);

  const createUserHandler = (userData) => {
    const userObj = {
      ...userData,
      id: Math.random().toString(),
    };
    console.log(userObj);
    if (userObj.name === "" || userObj.age === 0) {
      setIsValid((prevBoolean) => !prevBoolean);
      props.onIsValid(isValid);
    } else {
      props.onGetUserData(userObj);
    }
  };

  return (
    <div>
      <UserForm onCreateUser={createUserHandler}></UserForm>
    </div>
  );
};

export default UserResults;

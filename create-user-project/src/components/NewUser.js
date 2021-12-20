// import { useState } from "react";
import "./NewUser.css";
import UserForm from "./UserForm";

const UserResults = (props) => {
  const createUserHandler = (userData) => {
    const userObj = {
      ...userData,
      id: Math.random().toString(),
    };

    props.onGetUserData(userObj);
  };

  const isInvalidHandler = (bool, content) => {
    props.onIsValid(bool, content);
  };

  return (
    <div>
      <UserForm
        onCreateUser={createUserHandler}
        onIsValid={isInvalidHandler}
      ></UserForm>
    </div>
  );
};

export default UserResults;

// import { useState } from "react";
import "./UserResults.css";

const UserResults = (props) => {
  return (
    <div className="form-result-item">
      <p>
        {props.name} ({props.age} years old)
      </p>
    </div>
  );
};

export default UserResults;

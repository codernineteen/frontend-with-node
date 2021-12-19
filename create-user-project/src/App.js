import { useState } from "react";
import "./App.css";
import NewUser from "./components/NewUser";
import UserResults from "./components/UserResults";

function App() {
  const [userList, setUserList] = useState([]);

  const getUserDataHandler = (newUser) => {
    setUserList((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  const getIsValid = (boolean) => {
    console.log(boolean);
  };

  let userContent = <div></div>;
  if (userList.length > 0) {
    userContent = (
      <section className="form-result">
        {userList.map((el) => {
          return <UserResults key={el.id} name={el.name} age={el.age} />;
        })}
      </section>
    );
  }

  return (
    <div className="App">
      <section className="form-user">
        <NewUser onGetUserData={getUserDataHandler} onIsValid={getIsValid} />
      </section>
      {userContent}
    </div>
  );
}

export default App;

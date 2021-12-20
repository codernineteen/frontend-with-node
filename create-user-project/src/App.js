import { useState } from "react";
import "./App.css";
import NewUser from "./components/NewUser";
import UserResults from "./components/UserResults";
import Modal from "./components/Modals/Modal";

function App() {
  const [userList, setUserList] = useState([]);
  const [valid, setValid] = useState(true);
  const [content, setContent] = useState("");

  const getUserDataHandler = (newUser) => {
    setUserList((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  const getIsValid = (boolean, content) => {
    setValid(boolean);
    setContent(content);
  };

  let invalidModal;
  if (!valid) {
    invalidModal = <Modal content={content} onIsValid={getIsValid}></Modal>;
  }

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
      {invalidModal}
      <section className="form-user">
        <NewUser onGetUserData={getUserDataHandler} onIsValid={getIsValid} />
      </section>
      {userContent}
    </div>
  );
}

export default App;

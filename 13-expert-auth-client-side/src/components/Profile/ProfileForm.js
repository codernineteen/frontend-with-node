import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import AuthContext from "../../store/AuthContext";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const history = useHistory();
  const newPassword = useRef();
  const authCtx = useContext(AuthContext);
  const submit = (evt) => {
    evt.preventDefault();
    const enteredNewPassword = newPassword.current.value;

    // add validation
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAxDyp7iwevSJXo87dSbPP7m5CXCUO8pLE",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      alert("password changed!");
      history.push("/");
    });
  };
  return (
    <form onSubmit={submit} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPassword}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;

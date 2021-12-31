import React, { useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateTime = (expiration) => {
  const currentTime = new Date().getTime();
  const adjExpiration = new Date(expiration).getTime();

  const duration = adjExpiration - currentTime;
  return duration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expiresIn");

  const remainingTime = calculateTime(storedExpirationDate);
  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }
};

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };
  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expiresIn", expirationTime);
    const remainingTime = calculateTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

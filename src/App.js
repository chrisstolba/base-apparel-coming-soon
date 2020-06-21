import React from "react";
import { useState } from "react";
import "./css/reset.css";
import "./css/main.css";

import CallToAction from "./components/CallToAction";

import desktopBackgroundImage from "./images/hero-desktop.jpg";

let App = () => {
  let [userEmail, setUserEmail] = useState(null);
  let [inputError, setInputError] = useState(false);

  let handleEmailChange = (evt) => {
    console.log(evt.target.value);
    setUserEmail(evt.target.value);
  };

  let handleEmailSubmit = (evt) => {
    let emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRE.test(userEmail)) {
      setUserEmail(null);
      evt.target.value = "";
      setInputError(false);
    } else {
      setInputError(true);
      evt.preventDefault();
    }
  };

  return (
    <div className="App">
      <header className="mobileLogoWrapper"></header>
      <CallToAction
        handleEmailSubmit={handleEmailSubmit}
        inputValue={userEmail}
        handleEmailChange={handleEmailChange}
        inputError={inputError}
      />
      <img
        className="backgroundImageWrapper"
        src={desktopBackgroundImage}
        alt="Background Image"
      />
    </div>
  );
};

export default App;

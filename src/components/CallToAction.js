import React from "react";

let CallToAction = (props) => {
  let { handleEmailSubmit, handleEmailChange, userEmail, inputError } = props;

  let errorStyle = {
    border: "1px solid red",
  };

  let inputErrorMessage = {
    visibility: "visible",
  };

  return (
    <main className="callToActionWrapper">
      <div className="callToActionContainer">
        <div className="desktopLogoWrapper"></div>
        <div className="bannerWrapper">
          <h1 className="bannerText">{`WE'RE`}</h1>
          <h1 className="bannerText bold">COMING</h1>
          <h1 className="bannerText bold">SOON</h1>
          <p className="bannerDescription">{`Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.`}</p>
        </div>
        <form className="emailWrapper" onSubmit={handleEmailSubmit}>
          <input
            type="text"
            id="emailInput"
            name="emailInput"
            title="emailInput"
            value={userEmail}
            placeholder="Email Address"
            onChange={handleEmailChange}
            style={inputError ? errorStyle : null}
          />
          <button
            title="submitButton"
            type="submit"
            className="emailSubmitButton"
          >
            <div className="arrowIcon"></div>
          </button>
          <p
            className="inputError"
            style={inputError ? inputErrorMessage : null}
          >
            Please provide a valid email
          </p>
        </form>
      </div>
    </main>
  );
};

export default CallToAction;

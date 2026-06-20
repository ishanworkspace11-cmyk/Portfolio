import React, { useState } from "react";
import "./Error.css";

const ErrorPage = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Inline styles override index.css completely
  const themeStyles = {
    backgroundColor: theme === "dark" ? "#050505" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
  };

  return (
    <main className="error-page" style={themeStyles}>
      <div className="container">
        <div className="eyes">
          <div className="eye">
            <div className="eye__pupil eye__pupil--left"></div>
          </div>
          <div className="eye">
            <div className="eye__pupil eye__pupil--right"></div>
          </div>
        </div>

        <div className="error-page__heading">
          <h1 className="error-page__heading-title">Looks like you're lost</h1>
          <p className="error-page__heading-desciption">404 error</p>
        </div>

        <a
          className="error-page__button"
          href="/"
          aria-label="back to home"
          title="back to home"
        >
          back to home
        </a>
      </div>

      <button
        className="color-switcher"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </main>
  );
};

export default ErrorPage;
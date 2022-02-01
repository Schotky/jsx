import React from "react";
import ReactDOM from "react-dom";

const buttonText = { text: "Click me" };
const labelText = "Enter name: ";

const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

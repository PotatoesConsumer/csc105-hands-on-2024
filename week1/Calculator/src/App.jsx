import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(0);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const add = () => {
    setNum(num + Number(input));
  };

  const subtract = () => {
    setNum(num - Number(input));
  };

  const multiply = () => {
    setNum(num * Number(input));
  };

  const divide = () => {
    if (Number(input) === 0) {
      alert("Cannot divide by zero!");
      return;
    }
    setNum(num / Number(input));
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="title">Simple Calculator</h1>
        <p className="result">Result: {num}</p>
        <input
          type="text"
          className="input-field"
          placeholder="Enter number"
          value={input}
          onChange={handleChange}
        />
        <div className="button-group">
          <button className="btn blue" onClick={add}>Add</button>
          <button className="btn blue" onClick={subtract}>Subtract</button>
          <button className="btn blue" onClick={multiply}>Multiply</button>
          <button className="btn blue" onClick={divide}>Divide</button>
        </div>
        <div className="button-group">
          <button className="btn red" onClick={() => setInput("")}>Reset Input</button>
          <button className="btn red" onClick={() => setNum(0)}>Reset Result</button>
        </div>
      </div>
    </div>
  );
};

export default App;
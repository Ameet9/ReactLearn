import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  //setText = "setting Text";
  const handleUpClick = () => {
    //we can access text
    setText(text.toUpperCase());
  };
  const handleLowerClick = () => {
    //we can access text
    setText(text.toLowerCase());
  };
  const handleUpChange = (event) => {
    setText(event.target.value);
  };
  const clearText = (event) => {
    if (text === "Enter text here") {
      setText("");
    }
  };
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleUpChange}
            onClick={clearText}
          ></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary m-1" onClick={handleLowerClick}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container my-2">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

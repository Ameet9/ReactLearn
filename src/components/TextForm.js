import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  //setText = "setting Text";
  const handleUpClick = () => {
    //we can access text
    setText(text.toUpperCase());
  };
  const handleUpChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleUpChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
    </div>
  );
}

import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const [cvowel, setCvowel] = useState(0);
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
  const clearText = () => {
    if (text === "Enter text here") {
      setText("");
    }
  };
  const clearAllText = () => {
    setText("");
    setCvowel(0);
  };
  const updateSentence = () => {
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      let w = newText[i].split("");
      w[0] = w[0].toUpperCase();
      newText[i] = w.join("");
    }
    newText = newText.join(" ");
    setText(newText);
  };
  const textToSpeech = () => {
    const s = new SpeechSynthesisUtterance();
    const message = document.getElementById("myBox").value;
    s.lang = "hi-IN";
    s.text = message;
    window.speechSynthesis.speak(s);
  };
  const countVowels = () => {
    let c = 0;
    let n = text;
    n.split("").forEach((e) => {
      if (
        e.toLowerCase() === "a" ||
        e.toLowerCase() === "e" ||
        e.toLowerCase() === "i" ||
        e.toLowerCase() === "o" ||
        e.toLowerCase() === "u"
      ) {
        c++;
      }
    });
    setCvowel(c);
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
        <button className="btn btn-primary m-1" onClick={updateSentence}>
          Make all Letters of word Uppercase
        </button>
        <button className="btn btn-primary m-1" onClick={countVowels}>
          Count Vowels
        </button>
        <button className="btn btn-primary m-1" onClick={textToSpeech}>
          Text to Speech
        </button>
        <button className="btn btn-primary m-1" onClick={clearAllText}>
          Clear All Text
        </button>
      </div>
      <div className="container my-2">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
        <h2>No of Vowels</h2>
        <p>{cvowel}</p>
      </div>
    </>
  );
}

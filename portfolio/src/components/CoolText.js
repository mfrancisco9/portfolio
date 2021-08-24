import React, { useState } from 'react';
import '../css/cooltext.css';

export default function CoolText() {
    const [coolText, setCoolText] = useState("cool text");
    const [coolTextOccurences, setCoolTextOccurences] = useState(3);

    if (coolTextOccurences > 5) {
        setCoolTextOccurences(5)
    }

    const [coolColor, setCoolColor] = useState("182, 30, 22")
  
    if(document.getElementById("the-text")) {
    if (coolText.length < 10) { 
      document.getElementById("the-text").style["font-size"] = "7vw"
      document.getElementById("the-text").style["line-height"] = "6.5vw"
    } else if (coolText.length >= 10 && coolText.length < 20) {
      document.getElementById("the-text").style["font-size"] = "6vw"
      document.getElementById("the-text").style["line-height"] = "5.5vw"
  
    } else {
      document.getElementById("the-text").style["font-size"] = "4.5vw"
      document.getElementById("the-text").style["line-height"] = "4vw"
  
    }
  }

    const colorChange = (color) => {
        var colorRGB = "";
        switch (color) {
          case "blob-red":
            colorRGB = "182, 30, 22";
            break;
          case "blob-orange":
            colorRGB = "238, 102, 68";
            break;
          case "blob-yellow":
            colorRGB = "247, 181, 56";
            break;
          case "blob-green":
            colorRGB = "112, 163, 127";
            break;
          case "blob-blue":
            colorRGB = "0, 146, 204";
            break;
          case "blob-indigo":
            colorRGB = "52, 89, 149";
            break;
          case "blob-violet":
            colorRGB = "141, 107, 148";
        }
        setCoolColor(colorRGB);
        document.documentElement.style.setProperty('--coolcolor', colorRGB)
      };

    const makeText = () => {
    
        let divs = [];
        for (let i = 0; i < coolTextOccurences; i++) {
          divs.push(<div className="cool-text-text">{coolText}</div>);
        }
        return divs
      };

  return (
    <div className="misc-div" id="cool-text">
      <a name="cooltext"/>
      <div id="cool-text-main">
        <div id="cool-text-options">
          <input
            autoComplete="off"
            id="cool-text-input"
            type="text"
            maxLength="30"
            placeholder="your text here (max 30char)"
            onChange={(e) => setCoolText(e.target.value.toLowerCase())}
          ></input>
          <input
            id="cool-text-occurences"
            type="number"
            min="1"
            max="5"
            placeholder="3"
            onChange={(e) => setCoolTextOccurences(e.target.value)}
          ></input>
          <div id="blob-row">
            <div
              className="cool-text-color-blob"
              id="blob-red"
              onClick={(e) => colorChange(e.target.id)}
            ></div>
            <div
              className="cool-text-color-blob"
              id="blob-orange"
              onClick={(e) => colorChange(e.target.id)}
            ></div>
            <div
              className="cool-text-color-blob"
              id="blob-yellow"
              onClick={(e) => colorChange(e.target.id)}
            ></div>
            <div
              className="cool-text-color-blob"
              id="blob-green"
              onClick={(e) => colorChange(e.target.id)}
            ></div>
            <div
              className="cool-text-color-blob"
              id="blob-blue"
              onClick={(e) => colorChange(e.target.id)}
            ></div>
            <div
              className="cool-text-color-blob"
              id="blob-indigo"
              onClick={(e) => colorChange(e.target.id)}
            ></div>
            <div
              className="cool-text-color-blob"
              id="blob-violet"
              onClick={(e) => colorChange(e.target.id)}
            ></div>
          </div>
        </div>
        <div id="the-text">
          <div>{makeText()}</div>
        </div>
      </div>
    </div>
  );
}

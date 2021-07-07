import React, { useState } from "react";
import "./App.css";
// components
import Header from "./components/Header";
import MainBox from "./components/MainBox";
import Projects from "./components/Projects";
import ContactBox from "./components/ContactBox";
import Rightbox from "./components/RightBox";

function App() {
  const [hover, setCircle] = useState({
    url: "https://i.imgur.com/qhRmXhk.jpg",
  });

function changeCircle(url) {
  setCircle({
    ...hover, 
    url})
}

  return (
    <div>
      <Header />
      <div id="main-container">
        <div id="left">
          <div
            onMouseEnter={() => {
              setCircle({ url: "https://i.imgur.com/qhRmXhk.jpg" });
            }}
          >
            <MainBox />
          </div>

      
            <Projects changeCircle={changeCircle} />
          
          <ContactBox />
        </div>

        <div id="right">
          <Rightbox props={hover} />
        </div>
      </div>
    </div>
  );
}

export default App;

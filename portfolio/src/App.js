import React, { useState } from "react";
import "./App.css";
// components
import Header from "./components/Header";
import MainBox from "./components/MainBox";
import Projects from "./components/Projects";
import ContactBox from "./components/ContactBox";
import Rightbox from "./components/RightBox";
import Misc from "./components/Misc"
import { BrowserRouter as Router, Route } from "react-router-dom"

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
      <Router basename={process.env.PUBLIC_URL}>
      <Header />


      <Route exact path="/"
      render={(props) => ( <div>
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

)} />
<Route exact path="/misc" 
render={(props) => (
  <Misc/>
)}
/>
</Router>
<div className="diagonal-bg">
		<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><line x1='100%' y1='0' x2='1' y2='100%' stroke='#F2F7F6' strokeWidth='25%'/></svg>
	</div>
</div>

  );
}

export default App;

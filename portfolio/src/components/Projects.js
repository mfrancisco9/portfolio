import React from "react";
import "../css/projects.css";
import { Link } from 'react-router-dom';

// images
import Flashcards from "../css/images/flashcards.jpg"
import Stagecoach from "../css/images/stagecoach.jpg"
import Misc from "../css/images/misc.jpg"
import Moviego from "../css/images/moviego.jpg"
import Spotify from "../css/images/spotify.jpg"
import Coffee from "../css/images/coffee.jpg"

export default function Projects({ changeCircle }) {
  return (
    <div className="container-fluid main-box" id="projects">
      <div id="projects-box">
        <h3>Projects</h3>

        <div className="projects-col" onMouseEnter={()=> changeCircle(Flashcards)}>
            <a href="https://arabic-flashcards-react.herokuapp.com/" className="project-title">Arabic Flashcards</a> | <a href="hhttps://github.com/mfrancisco9/arabic-flashcards">GitHub</a>
            <div className="project-description">
              Single-page application created to gain initial experience using the Arabic alphabet in the browser and SQL. Built with React, Express, and Sequelize. Deployed on Heroku with JawsDB. 
            </div>
          </div>

        <div className="projects-col" onMouseEnter={()=> changeCircle(Stagecoach)}>
            <a href="https://northwestern-stagecoach.herokuapp.com/" className="project-title">Stagecoach</a> | <a href="https://github.com/mfrancisco9/StageCoach">GitHub</a>
            <div className="project-description">
              Final project for Northwestern's coding bootcamp. A theoretical
              platform that allows small artists and venues to create profiles
              and book concerts. Utilizes React, SQL, and Express.
            </div>
          </div>

          <div className="projects-col" onMouseEnter={()=> changeCircle(Spotify)}>
            <a href="https://spotify-community.herokuapp.com/" className="project-title">Spotify Playlist Project</a> | <a href="https://github.com/loveliiivelaugh/spotify-community">GitHub</a>
            <div className="project-description">
            Second project for Northwestern's coding bootcamp. Uses Spotify's API to give users greater control of music discovery and playlist generation. Technologies used include SQL, OAuth, Express, and Spotify Dev Tools.
            </div>
          </div>

          <div className="projects-col" onMouseEnter={()=> changeCircle(Moviego)}>
            <a href="https://melanieuhrich.github.io/MovieGO/" className="project-title">MovieGo</a> | <a href="https://github.com/mfrancisco9/MovieGO">GitHub</a>
            <div className="project-description">
            First project for Northwestern's coding bootcamp. Utilizes basic HTML, CSS, and Javascript to create customized movie recommendations using the TMDb API.
            </div>
          </div>

          <div className="projects-col" onMouseEnter={()=> changeCircle(Coffee)}>
            <a href="https://mfrancisco9.github.io/coffee-dialer/" className="project-title">Coffee Dialer</a> | <a href="https://github.com/mfrancisco9/coffee-dialer">GitHub</a>
            <div className="project-description">
              A simple dashboard for coffee brewing created with React. Saves past entries in local storage and provides recommendations for a better cup.
            </div>
          </div>

          <div className="projects-col" onMouseEnter={()=> changeCircle(Misc)}>
            <Link to="/misc" className="project-title">Odds and Ends</Link> 
            <div className="project-description">
              Various single-page works, created quickly with an emphasis on design.
            </div>
          </div>
      </div>
    </div>
  );
}

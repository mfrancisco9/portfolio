import React from "react";
import "../css/projects.css";

export default function Projects({ changeCircle }) {
  return (
    <div className="container-fluid main-box" id="projects">
      <div id="projects-box">
        <h3>Projects</h3>

        <div className="projects-col" onMouseEnter={()=> changeCircle("https://i.imgur.com/0pQr5ha.jpg")}>
            <a href="https://northwestern-stagecoach.herokuapp.com/" className="project-title">Stagecoach</a> | <a href="https://github.com/mfrancisco9/StageCoach">GitHub</a>
            <div className="project-description">
              Final project for Northwestern's coding bootcamp. A theoretical
              platform that allows small artists and venues to create profiles
              and book concerts. Utilizes React, SQL, and Express.
            </div>
          </div>

          <div className="projects-col" onMouseEnter={()=> changeCircle("https://i.imgur.com/mty71zZ.jpg")}>
            <a href="https://spotify-community.herokuapp.com/" className="project-title">Spotify Playlist Project</a> | <a href="https://github.com/loveliiivelaugh/spotify-community">GitHub</a>
            <div className="project-description">
            Second project for Northwestern's coding bootcamp. Uses Spotify's API to give users greater control of music discovery and playlist generation. Technologies used include SQL, OAuth, Express, and Spotify Dev Tools.
            </div>
          </div>

          <div className="projects-col" onMouseEnter={()=> changeCircle("https://i.imgur.com/W5fd8Dq.jpg")}>
            <a href="https://melanieuhrich.github.io/MovieGO/" className="project-title">MovieGo</a> | <a href="https://github.com/mfrancisco9/MovieGO">GitHub</a>
            <div className="project-description">
            First project for Northwestern's coding bootcamp. Utilizes basic HTML, CSS, and Javascript to create customized movie recommendations using the TMDb API.
            </div>
          </div>

          <div className="projects-col" onMouseEnter={()=> changeCircle("https://i.imgur.com/KSrceNz.jpg")}>
            <a href="https://mfrancisco9.github.io/coffee-dialer/" className="project-title">Coffee Dialer</a> | <a href="https://github.com/mfrancisco9/coffee-dialer">GitHub</a>
            <div className="project-description">
              A simple dashboard for coffee brewing created with React. Saves past entries in local storage and provides recommendations for a better cup.
            </div>
          </div>
      </div>
    </div>
  );
}

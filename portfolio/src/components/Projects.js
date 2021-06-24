import React from 'react'
import '../css/projects.css'

export default function Projects() {
    return (
        <div className="container-fluid main-box" id="projects">
            <div id="box-content">

                <a id="main-project" className="row" href="https://northwestern-stagecoach.herokuapp.com/">
                    <span>Stagecoach</span>
                    <div className="main-project-box col-12" id="stagecoach">
                        <div className="project-description">Final project for Northwestern's coding bootcamp. A theoretical platform that allows small artists and venues to create profiles and book concerts.</div>
                    </div>
                </a>

                <div className="row" id="other-projects-row">
                    <a className="other-projects col-4" href="https://github.com/loveliiivelaugh/spotify-community"><span>Spotify Playlist Project</span>
                        <div className="sub-project" id="spotifyproject">
                            <div className="project-description">Second project for Northwestern's coding bootcamp. Uses Spotify's API to give users greater control of music discovery and playlist generation.</div>
                        </div>
                    </a>

                    <a className="other-projects col-4" href="https://melanieuhrich.github.io/MovieGO/"><span>MovieGo</span>
                        <div className="sub-project" id="moviego">
                            <div className="project-description">First project for Northwestern's coding bootcamp. Utilizes basic HTML, CSS, and Javascript to create customized movie recommendations using the TMDb API.</div>
                        </div>
                    </a>

                    <a className="other-projects col-4" href="https://github.com/mfrancisco9?tab=repositories">Homework, smaller projects, works in progress
                        <div className="sub-project">
                            <div className="project-description">Additional work can be found on GitHub.</div>
                        </div>
                    </a>

                </div>

            </div>
        </div>
    )
}
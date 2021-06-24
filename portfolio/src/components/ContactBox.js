import React from 'react'
import '../css/contactbox.css'


export default function ContactBox(props) {
    return (
        <div className="container-fluid main-box" id="contact">
            <div id="box-content">
                <h1>Contact</h1>
                <div id="contact-boxes" className="row">

                    <div className="contact-box col-3" id="email">
                        <div className="sub-box">
                            <h3>Email:</h3>
                            <a href="javascript:location='mailto:\u006d\u002e\u0066\u0072\u0061\u006e\u0063\u0069\u0073\u0063\u006f\u0039\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">
                                <img src="./files/images/gmail.png" />
                            </a>
                            <div className="contact-text">Shoot me an email about employment opportunities, collaboration, recipes, recommendations, anything you like.</div>
                        </div>
                    </div>

                    <div className="contact-box col-3" id="github">
                        <div className="sub-box">
                            <h3>GitHub:</h3>
                            <a href="https://github.com/mfrancisco9">
                                <img src="./files/images/github.png" />
                            </a>
                            <div className="contact-text">All of the projects and bootcamp work I've done can be found in my GitHub repositories.</div>
                        </div>
                    </div>
                    <div className="contact-box col-3" id="linkedin">
                        <div className="sub-box">
                            <h3>LinkedIn:</h3>
                            <a href="https://www.linkedin.com/in/michael-francisco-99200368/">
                                <img src="./files/images/linkedin.png" />
                            </a>
                            <div className="contact-text">Endorse my skills, offer me work, whatever it is people do on LinkedIn.</div>

                        </div>
                    </div>
                    <div className="contact-box col-3" id="spotify">
                        <div className="sub-box">
                            <h3>Spotify:</h3>
                            <a href="https://open.spotify.com/user/121384212">
                                <img src="./files/images/spotify.png" />
                            </a>
                            <div className="contact-text">I'm fascinated by playing around with Spotify's developer tools. I put together monthly playlists of what I've been interested in and inspired by. </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
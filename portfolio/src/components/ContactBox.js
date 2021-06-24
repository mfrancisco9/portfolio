import React from 'react'
import '../css/contactbox.css'


export default function ContactBox(props) {
    return (
        <div className="container-fluid main-box" id="contact">
            <div id="box-content">
                <h1>Contact</h1>
                <div id="contact-boxes" className="row">

                    <a className="contact-box col-3" id="email" href="javascript:location='mailto:\u006d\u002e\u0066\u0072\u0061\u006e\u0063\u0069\u0073\u0063\u006f\u0039\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">
                        <div className="sub-box">
                            <h3>Email:</h3>
                                <img src="./files/images/gmail.png" />
                            <div className="contact-text">Shoot me an email about employment opportunities, collaboration, recipes, recommendations, anything you like.</div>
                        </div>
                    </a>

                    <a className="contact-box col-3" id="github" href="https://github.com/mfrancisco9">
                        <div className="sub-box">
                            <h3>GitHub:</h3>
                                <img src="./files/images/github.png" />
                            <div className="contact-text">All of the projects and bootcamp work I've done can be found in my GitHub repositories.</div>
                        </div>
                    </a>
                    <a className="contact-box col-3" id="linkedin" href="https://www.linkedin.com/in/michael-francisco-99200368/">
                        <div className="sub-box">
                            <h3>LinkedIn:</h3>
                                <img src="./files/images/linkedin.png" />
                            <div className="contact-text">Endorse my skills, offer me work, whatever it is people do on LinkedIn.</div>

                        </div>
                    </a>
                    <a className="contact-box col-3" id="spotify" href="https://open.spotify.com/user/121384212">
                        <div className="sub-box">
                            <h3>Spotify:</h3>
                                <img src="./files/images/spotify.png" />
                            <div className="contact-text">I'm fascinated by playing around with Spotify's developer tools. I put together monthly playlists of what I've been interested in and inspired by. </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
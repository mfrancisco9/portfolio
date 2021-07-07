import React from 'react'
import '../css/contactbox.css'


export default function ContactBox(props) {
    return (
        <div className="container-fluid main-box" id="contact">
            <div id="box-content">
                <h1>Contact</h1>
                <div id="contact-boxes" className="row">

                    <a className="contact-box col-4" id="email" href="javascript:location='mailto:\u006d\u002e\u0066\u0072\u0061\u006e\u0063\u0069\u0073\u0063\u006f\u0039\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">
                        <div className="sub-box">
                            <h3>Email:</h3>
                            <div className="contact-text">Shoot me an email about employment opportunities, collaboration, recipes, recommendations, anything you like.</div>
                        </div>
                    </a>

                    <a className="contact-box col-4" id="github" href="https://github.com/mfrancisco9">
                        <div className="sub-box">
                            <h3>GitHub:</h3>
                            <div className="contact-text">All of the projects and bootcamp work I've done can be found in my GitHub repositories.</div>
                        </div>
                    </a>
                    <a className="contact-box col-4" id="linkedin" href="https://www.linkedin.com/in/michael-francisco-99200368/">
                        <div className="sub-box">
                            <h3>LinkedIn:</h3>
                            <div className="contact-text">Connect with me, check out my skills, talk to me about work opportunities.</div>

                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
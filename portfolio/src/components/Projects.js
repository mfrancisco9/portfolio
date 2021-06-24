import React from 'react'
import '../css/projects.css'

export default function Projects() {
    return (
        <div className="container-fluid main-box" id="projects">
            <div id="box-content">

                <div id="main-project" className="row">
                    main project goes here
                    <div className="main-project-box col-12">img</div>
                </div>

                <div className="row" id="other-projects-row">
                    <div className="other-projects col-4">spotify
                        <div className="sub-project">img and description</div>
                    </div>

                    <div className="other-projects col-4">moviego
                        <div className="sub-project">img and description</div>
                    </div>

                    <div className="other-projects col-4">some homework
                        <div className="sub-project">img and description</div>
                    </div>

                </div>

            </div>
        </div>
    )
}
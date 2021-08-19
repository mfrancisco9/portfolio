import React from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
            <Link className="navbar-brand" id="name-title" to="/">Michael Francisco</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/#about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/#projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/#contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/misc">Misc.</Link>
                    </li>

                </ul>

            </div>

        </nav>
    )
}
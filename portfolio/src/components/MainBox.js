import React from 'react'
import '../css/mainbox.css'


export default function MainBox(props) {
    return (
        <div className="container-fluid main-box">
            <div id="box-content">
                {props.Title ? <h1>{props.Title}</h1> : null}
                {props.Content ? <p>{props.Content}</p> : null}
            </div>
        </div>
    )
}
import React from 'react'
import '../css/rightbox.css'


export default function Rightbox(props) {
    console.log(props.props.url)
    return (
        <div id="circle">
            <img id="circle-img" src={props.props.url}/>
            </div>
    )
}
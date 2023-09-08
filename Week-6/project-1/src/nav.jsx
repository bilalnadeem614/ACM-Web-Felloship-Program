import React from "react"
import reactIcon from './images/react-icon.png'
import './App.css'

export default function NavBar () {
    return (
        <>
        <nav>
            <img src={reactIcon} alt="React-JS Logo" className="nav--icon"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
        
        </>
    )
}

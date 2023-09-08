import React from "react"
import reactLargeIcon from './images/react-icon-large.png'
import './App.css'
import NavBar from './nav'

export default function App() {

  return (
    <>
      <NavBar />
      <main>
        <h1 className="main--title">Fun Facts about React</h1>
        <ul  className="main--facts">
          <li>Was first released in 2013</li>
          <li>Was orignally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousnds of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </>
  )
}



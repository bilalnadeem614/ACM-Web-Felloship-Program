import React from 'react'
import airbnblogo from './images/airbnb-logo.png'
import './App.css'


export default function Navbar() {

    return (
        <>
            <nav className='nav-bar'>
                <img src={airbnblogo} alt='airbnb-logo' className='nav--logo' />
            </nav>

        </>
    )
}
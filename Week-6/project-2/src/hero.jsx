import React from 'react'
import './App.css'
import photogrid from './images/photo-grid.png'

export default function Hero() {
    return (
        <>
            <section className='hero'>
                <img src={photogrid} alt='Photos' className='hero-photo' />
                <h1 className='hero-header'>Online Experiences</h1>
                <p className='hero-text'>Join unique interactive activities led by<br /> one-of-a-kind hosts—all without leaving home.</p>
            </section>
        </>
    )
}
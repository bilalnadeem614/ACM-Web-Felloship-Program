import React from 'react'
import data from './data'
import './App.css'
import star from './images/star.png'

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    } 

    return (
        <>
            <div className="card">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={props.coverImg} alt='Imageof Katie Zaferes' className='card-image' />
                <div className='card-stats'>
                    <img src={star} alt='Iamge of star for rating' className='card-star' />
                    <span>{props.stats.rating}</span>
                    <span className="gray">({props.stats.reviewCount}) • </span>
                    <span className="gray">{props.location}</span>
                </div>
                <p className='card-title'>{props.title}</p>
                <p className='card-price'><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </>
    )
}
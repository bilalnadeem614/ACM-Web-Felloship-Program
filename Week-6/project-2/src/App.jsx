import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Card from './card'
import data from './data'
import cardImage from './images/cardImage-1.png'
import './App.css'

export default function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </>
  )
}


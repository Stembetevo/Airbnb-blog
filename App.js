import React from "react"
import Navbar from "./Airbnb blog/src/components/Navbar"
import Hero from "./Airbnb blog/src/components/Hero"
import Card from "./Airbnb blog/src/components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
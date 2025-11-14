import React from 'react';
import { cardData } from "../../data"
import Card from './Card';

function Home() {
    return <section id="home">
        <div className="container">
            <div className="home-header">
                <span>Join Us</span>
                <h1>Best learning opportunities</h1>
                <p>we know how large objects will act, but things on a small scale just do not act that way.</p>
                <a href="#" className="btn btn-red">
                    Get Quote Now
                </a>
                <a href="#" className="btn btn-transparent">
                    Learn More
                </a>
            </div>
            <div className="card-container">
                {
                    cardData.map(card => {
                        const { title, id, bgColor, color, description, img } = card
                        return <Card key={id} title={title} bgColor={bgColor} color={color} desc={description} img={img}/>
                    })
                }
            </div>
        </div>
    </section>
}

export default Home;
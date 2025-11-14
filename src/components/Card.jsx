import React from 'react';

function Card({img, title, desc, color, bgColor}) {
    return <div className='card'>
        <span className="icon" style={{color, backgroundColor: bgColor}}>
            {img}
        </span>
        <h2>{title}</h2>
        <span className="line"></span>
        <p>{desc}</p>
    </div>
}

export default Card;
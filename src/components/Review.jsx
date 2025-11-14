import React from 'react';

function Review({stars, desc, img, name, job}) {
    return <div className="rating">
        <span className="stars">{stars}</span>
        <p className="desc">{desc}</p>
        <div className="person">
            <img src={img} alt={name} />
            <div>
                <h3 className="text-primary">{name}</h3>
                <p>{job}</p>
            </div>
        </div>
    </div>
}

export default Review;
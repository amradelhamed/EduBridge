import React from 'react';
import SectionHeader from './SectionHeader';
import { ratingData } from '../../data';
import Review from './Review';

function Reviews() {
    return <section id="reviews">
        <div className="container">
            <SectionHeader 
                title="Each and every client is important"
                desc="
                    Discover what our students are saying in the reviews section! Real
                    feedback from learners who have experienced and benefited from our
                    courses.
                "
            />
            <div className="ratings">
                {ratingData.map(rating => {
                    const {id, desc, img, job, name, stars} = rating
                    return <Review key={id} desc={desc} img={img} job={job} name={name} stars={stars}/>
                })}
            </div>
        </div>
    </section>
}

export default Reviews;
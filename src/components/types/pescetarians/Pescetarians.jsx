import React from 'react'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch'
import Welcome from './../../Welcome';
import { Link } from 'react-router-dom';

export default function Pescetarians() {
    return (
        <div className='container mt-5'>
            <div className="row typeContent">
                <h2 className="heading">Ominivores</h2>
                <p className="text">An omnivore is a person who eats all types of food.  The word omnivore literally translates to “all devour.” 

These eaters do not discriminate against any individual food group and will eat pretty much anything that is served to them.</p>
                <Breakfast />
                <Lunch />
                <Dinner />
                <div className="btns">
                    <Link to className="btn">Diet Calender</Link>
                    <a href='' className="btn">Watch</a>
                </div>
            </div>
        </div>
    )
}

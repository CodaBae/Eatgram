import React from 'react'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch'
import Welcome from './../../Welcome';
import { Link } from 'react-router-dom';

export default function Ominivore() {
    return (
        <div className='container'>
            <div className="row">
                <Welcome />
                <div className="box">
                    <h2 className="heading">Ominivores</h2>
                    <p className="text">An omnivore is a person who eats all types of food.  The word omnivore literally translates to “all devour.” </p>
                    <p className='text'> These eaters do not discriminate against any individual food group and will eat pretty much anything that is served to them.</p>
                    <p className="text">Most people consider themselves to be omnivores and say they eat pretty much everything. The reality is, humans tend to be creatures of habit and often rotate through the same foods. Many lean towards certain types of meats or have some sort of dietary restriction (i.e. food allergy, medical/religious restriction, or personal preference).</p>
                    <Breakfast />
                    <Lunch />
                    <Dinner />
                    <div className="btns">
                        <Link to className="btn">Food cal</Link>
                        <a href='' className="btn">Watch</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

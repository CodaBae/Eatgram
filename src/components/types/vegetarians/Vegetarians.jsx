import React from 'react'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch'
import { Link } from 'react-router-dom';

export default function Vegetarians() {
    return (
        <div className='container mt-5'>
            <div className="row typeContent">
                <h2 className="heading">Vegertarians</h2>
                <p className="text">A vegetarian (a.k.a. herbivore) is a person who does not eat any type of meat and eats a plant-based diet instead.</p>
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

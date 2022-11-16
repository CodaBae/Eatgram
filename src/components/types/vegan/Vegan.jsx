import React from 'react'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch'
import { Link } from 'react-router-dom';

export default function Vegan() {
    return (
        <div className='container mt-5'>
            <div className="row typeContent">
                <h2 className="heading">Vegan</h2>
                <p className="text">A vegan is a person who does not eat any animal products or by-products and strictly adheres to a plant-based diet. This is commonly due to ethical or environmental reasons.</p>
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

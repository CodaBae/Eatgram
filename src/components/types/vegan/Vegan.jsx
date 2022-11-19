import React from 'react'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch'
import { Link } from 'react-router-dom';
import Welcome from './../../Welcome';

export default function Vegan() {
    return (
        <div className='container'>
            <Welcome />
            <div className="row typeContent">
                <h2 className="heading">Vegan</h2>
                <p className="text">A vegan is a person who does not eat any animal products or by-products and strictly adheres to a plant-based diet. This is commonly due to ethical or environmental reasons.</p>
                <Breakfast />
                <Lunch />
                <Dinner />
                <div className="btns">
                    <Link to='/calender' className="btn">Diet Plan</Link>
                    <Link to="/watch" className="btn">Watch</Link>
                </div>
            </div>
        </div>
    )
}

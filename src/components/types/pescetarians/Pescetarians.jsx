import React from 'react'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch'
import { Link } from 'react-router-dom';

export default function Pescetarians() {
    return (
        <div className='container mt-5'>
            <div className="row typeContent">
                <h2 className="heading">Pescetarians</h2>
                <p className="text">A pescetarian is a person who primarily eats fish and seafood, as well as vegetables and other non-animal meat foods. “Pesce” means “fish” in Italian and “pesca” means “fishing” in Catalan and Spanish.</p>
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


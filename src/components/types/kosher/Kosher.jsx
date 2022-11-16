import React from 'react'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch';
import { Link } from 'react-router-dom';

export default function Kosher() {
    return (
        <div className='container mt-5'>
            <div className="row typeContent">
                <h2 className="heading">Kosher</h2>
                <p className="text">People who eat Kosher follow a strict set of Jewish dietary laws. The word “Kosher” means pure or fit for consumption.</p>
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

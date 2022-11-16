import React from 'react'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch';
import { Link } from 'react-router-dom';

export default function Halal() {
    return (
        <div className='container mt-5'>
            <div className="row typeContent">
                <h2 className="heading">Halal</h2>
                <p className="text">Foods are considered halal if they are prepared, made and stored according to Islamic law and do not have specific contents prohibited by Islamic law.</p>
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
import React from 'react'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch'
import Welcome from '../../Welcome';
import { Link } from 'react-router-dom';

export default function Carnivore() {
    return (
        <div className='container mt-5'>
            <div className="row typeContent">
                <h2 className="heading">Carnivores</h2>
                <p className="text">A carnivore (a.k.a. meatatarian or meat-eater) is a person who predominantly eats red meat, which includes: pork, beef, veal and lamb. The word carnivore literally translates to “meat devourer.”</p>
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

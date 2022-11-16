import React from 'react'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch'
import Welcome from '../../Welcome';
import { Link } from 'react-router-dom';

export default function Pollotarians() {
    return (
        <div className='container mt-5'>
            <div className="row typeContent">
                <h2 className="heading">Pollotarianss</h2>
                <p className="text">A pollotarian is a person who primarily eats poultry instead of red meat. The prefix “pollo” is the Spanish word for “chicken.” However, pollotarians eat any type of bird including: chicken, turkey, duck, quail or hen.</p>
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

import React from 'react'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch'
import { Link } from 'react-router-dom';
import Welcome from '../../Welcome';

export default function Pollotarians() {
    return (
        <div className='container'>
            <Welcome />
            <div className="row typeContent">
                <h2 className="heading">Pollotarians</h2>
                <p className="text">A pollotarian is a person who primarily eats poultry instead of red meat. The prefix “pollo” is the Spanish word for “chicken.” However, pollotarians eat any type of bird including: chicken, turkey, duck, quail or hen.</p>
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

import React from 'react'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch'
import Welcome from '../../Welcome';
import { Link } from 'react-router-dom';

export default function Pollotarians() {
    return (
        <div className='container'>
            <div className="row">
                <Welcome />
                <div className="box">
                    <h2 className="heading">Pollotarianss</h2>
                    <p className="text">A pollotarian is a person who primarily eats poultry instead of red meat. The prefix “pollo” is the Spanish word for “chicken.” However, pollotarians eat any type of bird including: chicken, turkey, duck, quail or hen.</p>
                    <p className="text">Pesce-pollotarians: A pesce-pollotarian is a type of pollotarian who occasionally eats fish and seafood.</p>
                    <p className="text">Do you end up eating some variation of chicken nearly all the time? Congrats on your newly-discovered pollotarian status.</p>
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

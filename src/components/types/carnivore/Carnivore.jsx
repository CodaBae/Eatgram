import React from 'react'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch'
import Welcome from '../../Welcome';
import { Link } from 'react-router-dom';

export default function Carnivore() {
    return (
        <div className='container'>
            <div className="row">
                <Welcome />
                <div className="box">
                    <h2 className="heading">Carnivores</h2>
                    <p className="text">A carnivore (a.k.a. meatatarian or meat-eater) is a person who predominantly eats red meat, which includes: pork, beef, veal and lamb. The word carnivore literally translates to “meat devourer.”</p>
                    <p className="text">Those who follow the popular Paleo diet often consider themselves carnivores since they regularly eat various forms of red meat (along with fish, fruits, nuts and seeds).</p>
                    <p className="text">If you find yourself always eating traditional burgers, steaks, meatballs and other red meats, it may be more accurate to call yourself a carnivore than an omnivore.</p>
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

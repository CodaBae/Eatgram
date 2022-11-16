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
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione error voluptatum dolorum numquam mollitia doloribus quas, nam ipsum libero blanditiis voluptatem, possimus sit voluptatibus laudantium maxime nemo, hic cum dicta?</p>
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

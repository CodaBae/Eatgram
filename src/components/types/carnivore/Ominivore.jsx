import React from 'react'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch'
import Welcome from './../../Welcome';

export default function Carnivore() {
    return (
        <div className='container'>
            <div className="row">
                <Welcome />
                <h2 className="heading">Carnivores</h2>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione error voluptatum dolorum numquam mollitia doloribus quas, nam ipsum libero blanditiis voluptatem, possimus sit voluptatibus laudantium maxime nemo, hic cum dicta?</p>
                <Breakfast />
                <Lunch />
                <Dinner />
            </div>
        </div>
    )
}

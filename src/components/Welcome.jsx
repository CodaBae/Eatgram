import React from 'react'
import TabGroup from './TabGroup'

export default function Welcome() {
    return (
        <div className='container'>
            <h1 className="main-heading heading">Hello and welcome to <span style={{color:'#249644'}}>EatGram🥘</span></h1>
            <p className="about">
                EatGram is a social media platform where different types of eaters can learn, network, follow a diet plan, and watch food-related videos.</p>

            <TabGroup />
        </div>
    )
}

import React from 'react'
import TabGroup from './TabGroup'
import Logo from '../assets/EatGramHorizontalLogo.png'

export default function Welcome() {
    return (
        <div className='container'>
            <p className="et-logo"><a href='/' aria-label='EatGram'><img src={Logo} alt='EatGram logo' width="500" /></a></p>
            <h1 className="main-heading heading">Hello and Welcome!</h1>
            <p className="about">
                EatGram is a social media platform where different types of eaters can learn, network, follow a diet plan, and watch food-related videos.</p>
            <TabGroup />
        </div>
    )
}

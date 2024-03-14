import React from 'react'
import './Hero.scss'
import hand_icon from '../../Assets/hand_icon.png'
import arrow from '../../Assets/arrow.png'
import hero_image from '../../Assets/hero_image.png'

function Hero() {
  return (
    <div className='hero-conatiner'>
        <div className="left-part-data">
            <p>Find you best Product</p>
            <h1>New <img src={hand_icon}/> Collections for Everyone</h1>
            <button>Latest Collection <img src={arrow}/></button>
        </div>
        <div className="right-part-data">
            <img src={hero_image}/>
        </div>
    </div>
  )
}

export default Hero
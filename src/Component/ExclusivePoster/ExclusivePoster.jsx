import React from 'react'
import './ExclusivePoster.scss'
import ExclusiveImg from '../../Assets/exclusive_image.png'

function ExclusivePoster() {
    return (
        <div className='exclusive_poster'>
            <div className="left-exclusive-poster">
                <h1> Exclusive <br /> Offer for you</h1>
                <p>only on beat seller products</p>
                <button>Check Now</button>
            </div>
           <div className="right-exclusive-poster">
            <img src={ExclusiveImg}/>
           </div>
        </div>
    )
}

export default ExclusivePoster
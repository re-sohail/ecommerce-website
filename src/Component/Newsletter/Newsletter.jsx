import React from 'react'
import './Newsletter.scss'

function Newsletter() {
  return (
    <div className='newsletter-container'>
        <h1>Get Exclusive offer on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="newsletter">
            <input type="email" id="email" placeholder='Enter your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
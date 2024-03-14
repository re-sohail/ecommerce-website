import React from 'react'
import './Footer.scss'
import logo from '../../Assets/logo.png'
import Instagram from '../../Assets/instagram_icon.png'
import Pinterst from '../../Assets/pintester_icon.png'
import whatsapp from '../../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <div className="logo-data">
        <img src={logo}/>
        <h1>Grabbly</h1>
      </div>
      <div className="footer-list">
        <ul>
          <li>Company</li>
          <li>Product</li>
          <li>Office</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="social-media">
        <Link to='https://www.instagram.com/re_sohail/' target='_blank'><img src={Instagram}/></Link>
        <Link to='https://www.pinterest.com/re_sohail/' target='_blank'><img src={Pinterst}/></Link>
        <Link to='https://wa.me/+923116379423' target='_blank'><img src={whatsapp}/></Link>
      </div>
      <hr />
      <p>Copyright © 2024: All Right Reserved</p>
    </div>
  )
}

export default Footer
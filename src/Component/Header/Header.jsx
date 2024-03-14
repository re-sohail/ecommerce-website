import React, { useState } from 'react'
import "./Header.scss"
import logo from '../../Assets/logo.png'
import cart from '../../Assets/cart_icon.png'
import { Link } from 'react-router-dom';


function Header() {
  let [active, setActive] = useState('shop')
  return (
    <div className='header-container'>
      <Link to='/' style={{textDecoration: 'none', color:'#000'}} onClick={() => { setActive('shop') }}><div className="logo">
        <img src={logo} />
        <h1>Grabbly</h1>
      </div></Link>

      <div className="header-list">
        <ul>
          <li onClick={() => { setActive('shop') }}><Link style={{ textDecoration: 'none', color: "#000" }} to='/'>Shop</Link> {active === 'shop' ? <hr /> : ""}</li>
          <li onClick={() => { setActive('mens') }}><Link style={{ textDecoration: 'none', color: "#000" }} to='/mens'>Men</Link > {active === 'mens' ? <hr /> : ""}</li>
          <li onClick={() => { setActive('womens') }}><Link style={{ textDecoration: 'none', color: "#000" }} to='/womens'>Women</Link > {active === 'womens' ? <hr /> : ""}</li>
          <li onClick={() => { setActive('kids') }}><Link style={{ textDecoration: 'none', color: "#000" }} to='/kids'>Kid</Link > {active === 'kids' ? <hr /> : ""}</li>
        </ul>
      </div>
      <div className="header-btn">
        <Link to={'/account'}><button onClick={() => { setActive('login') }}>Login</button></Link>
        <Link to={'/cart'}><img onClick={() => { setActive('cart') }} src={cart} /></Link>
        <div className="cart-counter">0</div>
      </div>
    </div>
  )
}

export default Header
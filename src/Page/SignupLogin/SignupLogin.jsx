import React from 'react'
import './SignupLogin.scss'
import { Link } from 'react-router-dom'

function SignupLogin() {
  return (
    <div className='signup-container'>
      <div className="signup-part">
        <h1>Sign up</h1>
        <form action="">
          <input type="text" id="username" placeholder='Enter Your username'/>
          <input type="email" id="email" placeholder='Enter Your Email'/>
          <input type="password" id="password" placeholder='Enter Your Password'/>
          <input type="submit" value="Sign up" />
        </form>
        <p>if You have already an account, please <Link to ='/Login'>Login</Link>.</p>
      </div>
    </div>
  )
}

export default SignupLogin
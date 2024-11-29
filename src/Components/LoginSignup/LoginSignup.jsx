import React, { act, useState } from 'react'
import './LoginSignup.css'
import user from '../Assets/person.png'
import email from '../Assets/email.png'
import password from '../Assets/password.png'

const LoginSignup = () => {

   const[action,setaction]=useState("Login")
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
      <div className="inputs">
      {action==="Login"?<div></div>:
      <div className="input">
      <img src={user} alt=""/>
      <input type="text" placeholder='Name'/>
  </div>}
        
        <div className="input">
            <img src={email} alt=""/>
            <input type="email" placeholder='Email'/>
        </div>
        <div className="input">
            <img src={password} alt=""/>
            <input type="password" placeholder='Password'/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setaction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setaction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup

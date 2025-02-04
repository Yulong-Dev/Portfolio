import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="first-foot">
            <h1>George<span>.</span></h1>
          </div>
          <p>I am a fullstack developer from, Nigeria with 5years of experience in multiple companies like JengaTech, Billpoint and Fairmoney.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email'/>
          </div>
          <a href="https://youtube.com/@george-godwin?si=hsdj2_xX8T6DtIBQ"><div className="footer-subscribe">Subscribe</div></a>
        </div>
      </div>
      <hr className='dash' />
      <div className="footer-bottom">
        <p className="footer-bottom-left"> © 2025 George Godwin. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <a href="https://linkedin.com/in/gowinstar55555"><p className='blue'>Connect with me</p></a>
        </div>
      </div>
        
    </div>
  )
}

export default Footer


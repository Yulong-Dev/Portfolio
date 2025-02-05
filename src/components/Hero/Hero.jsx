import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';

const Hero = () => {
  return (
    <div>
        <div className="hero">
            <img src={profile_img} alt="" />
            <h1><span>I'm George Godwin,</span> fullstack developer based in Nigeria.</h1>
            <p>I am a fullstack developer from Imo state, Nigeria, with 5years of experience in multiple companies like JengaTech, Billpoint and Fairmoney. </p>
            <div className="hero-action">
            <a href="https://linkedin.com/in/gowinstar55555"><div className="hero-connect"> Connect with me</div></a>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero

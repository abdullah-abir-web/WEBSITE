import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
        {/* <img src="/public/hero.png" width={180} alt="" /> */}
        <h1><span>I'm Abir,</span> frontend developer based in BD.</h1>
        <p>I am a frontend developer from bd, BD with 2 years of experience.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
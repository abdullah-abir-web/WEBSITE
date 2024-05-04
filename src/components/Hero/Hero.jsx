import React, { useRef } from "react";
import "./Hero.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  const gsapRef = useRef();

  useGSAP(() => {
    gsap.from(gsapRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });
  });
  return (
    <div id="home" className="hero">
      {/* <img src="/public/hero.png" width={180} alt="" /> */}
      <h1 ref={gsapRef}>
        <span ref={gsapRef}>I'm Abir,</span> frontend developer based in BD.
      </h1>
      <p>I am a frontend developer from bd, BD with 2 years of experience.</p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me{" "}
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;

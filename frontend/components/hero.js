import React from "react";
import Script from 'next/script';
import Rellax from '../node_modules/rellax/'

const Hero = ({ image, imgWidth, imgHeight, title }) => {
  return (
    <>
      <div className="heroimage">
       
        <video className="paralaxVideo" autoPlay muted loop>
          <source src="media/Hero.m4v" type="video/mp4" />
        </video>

        <Script src="/scripts/videoParallax.js" />
        
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Hero;

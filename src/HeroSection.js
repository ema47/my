import React from 'react';
import './HeroSection.css';
import { Button } from './Button';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>CONVIERTETE EN UN GAMER</h1>
      <p>Escoge un Team</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          INTEL
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          AMD  
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

import React from 'react';
import Cards from './Cards';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Presentation from './Presentation';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Presentation/>
      <Footer />
    </>
  );
}

export default Home;

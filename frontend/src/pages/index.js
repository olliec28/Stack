import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';


const Home = () => {
  return (
    <div id='home'>
      <Hero />
      <About />
      <Projects />
      
    </div>
  );
};

export default Home;
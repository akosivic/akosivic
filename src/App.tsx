import React, { useRef } from 'react';
import './App.css';
import Header from './components/header';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import AboutMe from './routes/aboutme';
import Skills from './routes/skills';
import Experience from './routes/experience';
import Contact from './routes/contact';

function App() {
  const parallax = useRef<IParallax>(null!);
  const scrollTo = (page: number) => {
    parallax.current.scrollTo(page);
  };
  return (
    <div className="App">
      <Header scrollTo={scrollTo} />
      <AboutMe  />
      <Skills />
      <Experience />
      <Contact />
    </div >
  );
}

export default App;

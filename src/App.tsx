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
      <Parallax ref={parallax} pages={5} style={{ top: '0', left: '0', backgroundColor: "#151D28" }} >
        <ParallaxLayer offset={0} speed={2.5}>
          <Header scrollTo={scrollTo} />
          <div className="WelcomePage">
            {/* <img className="avatar" src="" alt="Avatar" /> */}
            <div className="right">
              <div className="left">
                <h1>hello</h1><div className="square bounce-7"></div>
              </div>
              <p className="description left">I'm Vic Salak</p>
              <p className="description left">Software Engineer | Team Leader | Manager </p>
              <p className="Social-Media">
                <a href="https://github.com/akosivic" rel="noopener noreferrer" target="_BLANK">
                  <i className="fab fa-github">
                  </i>
                </a>
              </p>
            </div>
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: 'red' }} />` */}
        <ParallaxLayer
          offset={1}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
          <AboutMe />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: 'blue' }} /> */}
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            // backgroundColor: 'blue'
          }}>
          <Skills />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={3} speed={2} style={{ }} /> */}
        <ParallaxLayer
          offset={3}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            // backgroundColor: 'blue'
          }}>
          <Experience />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={4} speed={2} style={{ }} /> */}
        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            // backgroundColor: 'blue'
          }}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div >
  );
}

export default App;

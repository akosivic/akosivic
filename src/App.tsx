
import './App.css';
import Header from './components/header';
import AboutMe from './routes/aboutme';
import Skills from './routes/skills';
import Experience from './routes/experience';
import Contact from './routes/contact';

function App() {
  return (
    <div className="App">
      {/* <Container> */}
        <Header />
        <AboutMe />
        <Skills />
        <Experience />
        <Contact />
      {/* </Container> */}

    </div >
  );
}

export default App;

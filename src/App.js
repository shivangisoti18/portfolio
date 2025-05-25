import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Social from './components/Social';
import Projects from './components/Projects';
import About from './components/About';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section id="home" title="Welcome">
          <Home />
        </Section>

        <Section id="about" title="About Me">
          <About />
        </Section>

        <Section id="projects" title="Projects">
          <Projects />
        </Section>

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="experience" title="Experience">
          <Experience />
        </Section>

        <Section id="contact" title="Contact">
          <Contact />
        </Section>

        <Section id="social" title="Social">
          <Social />
        </Section>
      </main>
    </div>
  );
}

export default App; 
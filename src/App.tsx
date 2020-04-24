import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HeroBox from "./Components/HeroBox/HeroBox";
import ParticleBackground from "./Components/Particle Background/ParticleBackground";
import Skills from "./Components/Skills/Skills";
import { Parallax, ParallaxProvider } from "react-scroll-parallax/cjs";
import Projects from "./Containers/Projects/Projects";

function App() {
  return (
    <ParallaxProvider>
      <Parallax y={[-30, 30]} tagOuter="figure">
        <ParticleBackground />
        <NavBar />
        <HeroBox />
      </Parallax>
      <Skills />
      <Projects />
      <div className="test" />
    </ParallaxProvider>
  );
}

export default App;

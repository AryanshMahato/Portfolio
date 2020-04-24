import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HeroBox from "./Components/HeroBox/HeroBox";
import ParticleBackground from "./Components/Particle Background/ParticleBackground";
import Skills from "./Components/Skills/Skills";
import { Parallax, ParallaxProvider } from "react-scroll-parallax/cjs";

function App() {
  return (
    <ParallaxProvider>
      <Parallax y={[-30, 30]} tagOuter="figure">
        <ParticleBackground />
        <NavBar />
        <HeroBox />
      </Parallax>
      <Skills />
      <div className="test" />
    </ParallaxProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HeroBox from "./Components/HeroBox/HeroBox";
import ParticleBackground from "./Components/Particle Background/ParticleBackground";
import Skills from "./Components/Skills/Skills";
import { Parallax, ParallaxProvider } from "react-scroll-parallax/cjs";
import Projects from "./Containers/Projects/Projects";
import Background from "./Global/Background/Background";

function App() {
  console.log("Please Refresh the browser while checking responsiveness");
  return (
    <ParallaxProvider>
      <Parallax y={[-30, 30]} tagOuter="figure">
        <ParticleBackground />
        <NavBar />
        <HeroBox />
      </Parallax>
      <Background>
        <Skills />
        <Projects />
      </Background>
      <div className="test" />
    </ParallaxProvider>
  );
}

export default App;

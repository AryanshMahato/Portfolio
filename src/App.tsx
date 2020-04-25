import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HeroBox from "./Components/HeroBox/HeroBox";
import ParticleBackground from "./Components/Particle Background/ParticleBackground";
import Skills from "./Components/Skills/Skills";
import Projects from "./Containers/Projects/Projects";
import Background from "./Global/Background/Background";
import ContactUs from "./Containers/Contact Us/ContactUs";
import Footer from "./Containers/Footer/Footer";
import About from "./Containers/About/About";

function App() {
  console.error("Please Refresh the browser while checking responsiveness");
  return (
    <>
      <ParticleBackground />
      <NavBar />
      <HeroBox />
      <Background>
        <About />
        <Skills />
        <Projects />
      </Background>
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;

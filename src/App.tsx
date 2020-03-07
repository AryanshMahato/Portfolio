import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import HeroBox from './Components/HeroBox/HeroBox';
import ParticleBackground from './Components/Particle Background/ParticleBackground';
import Skills from './Components/Skills/Skills';

function App() {
	return (
		<>
			<ParticleBackground />
			<NavBar />
			<HeroBox />
			<Skills />
			<div className='test'></div>
		</>
	);
}

export default App;

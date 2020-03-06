import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import HeroBox from './Components/HeroBox/HeroBox';
import ParticleBackground from './Components/Particle Background/ParticleBackground';

function App() {
	return (
		<>
			<ParticleBackground />
			<NavBar />
			<HeroBox />
			<div className={'test'}></div>
		</>
	);
}

export default App;

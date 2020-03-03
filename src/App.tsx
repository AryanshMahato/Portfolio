import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HeroBox from "./Components/HeroBox/HeroBox";

function App() {
  return (
    <>
      <NavBar />
      <HeroBox />
      <div className={"test"}></div>
    </>
  );
}

export default App;

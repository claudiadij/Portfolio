import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Aboutme from "./components/aboutme/Aboutme";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";


function App() {
  const [menuOpen, setMenuOpen] =useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Aboutme/>
        <Experience />
        <Skills/>
        {/* <Portfolio/> */}
        <Contact/>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import "./vars.css"; 
import Impressum from './components/Impressum/impressum';


function App() {
  const [theme, setTheme] = useState('classic');

  const changeTheme = (newTheme) => {
    document.documentElement.className = newTheme;
    setTheme(newTheme);
  };

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Impressum />
      <button onClick={() => changeTheme('classic')}>Classic</button>
      <button onClick={() => changeTheme('dark')}>Dark</button>      
    </div>
  );
}

export default App;
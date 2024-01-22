import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home.tsx'
import AboutMe from './pages/about me/AboutMe.tsx'
import Projects from './pages/projects/Projects.tsx'
import ContactMe from './pages/contact me/ContactMe.tsx'

function App() {

  return (
    <>
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home.tsx'
import AboutMe from './pages/about me/AboutMe.tsx'
import Projects from './pages/projects/Projects.tsx'

function App() {

  return (
    <>
      <Home />
      <AboutMe />
      <Projects />
    </>
  )
}

export default App

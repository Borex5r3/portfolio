import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home.tsx'
import ContactMe from './pages/contact me/ContactMe.tsx'

function App() {

  return (
    <>
      <Home />
      <ContactMe />
    </>
  )
}

export default App

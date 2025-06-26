import { useState } from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import './App.css'
import About from './components/about'
import Projects from './components/projects'
import Footer from './components/footer'


function App() {
  

  return (
    <div className='bg-[#171d32] h-auto  w-full overflow-hidden'>
    
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Footer/>
    </div>
  )
   
  }
export default App

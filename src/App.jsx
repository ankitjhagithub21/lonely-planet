import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import VideoSection from './components/VideoSection'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Destinations/>
    <VideoSection/>
    <About/>
    <Footer/>
    </>
  )
}

export default App
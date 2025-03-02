import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import VideoSection from './components/VideoSection'
import About from './components/About'
import Footer from './components/Footer'
import Stories from './components/Stories'
import Form from './components/Form'
import "./App.css"
import Books from './components/Books'
import Places from './components/Places'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Destinations/>
    <VideoSection/>
    <About/>
    <Stories/>
    <Form/>
    <Books/>
    <Places/>
    <Footer/>
    </>
  )
}

export default App
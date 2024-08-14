import './App.css'
import { motion } from "framer-motion"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Headroom from 'react-headroom'
import About from './components/About'
import Modal from './components/Modal'
import Experience from './components/Experience'

function App(){

  return (
    
    <div className='bg-slate-950 font-space text-slate-300 flex flex-col scroll-smooth'>
      
        <Headroom style={{
          height: '88px', 
          zIndex: '999', 
          transition: 'all 1s ease-in-out',
          webkitTransition: 'all .5s ease-in-out',
          mozTransition: 'all .5s ease-in-out',
          oTransition: 'all .5s ease-in-out',
          }}>
          <Navbar />
        </Headroom>

        <div id="home">
          <Hero />
        </div>

        <div id='about-me'>
          <About />
        </div>

        <div id='experiences'>
          <Experience />
        </div>

        <Modal />
    </div>
  )

}

export default App

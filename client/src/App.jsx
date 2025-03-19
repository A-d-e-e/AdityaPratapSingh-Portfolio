import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Router>
  )
}
{/*
export default function App() {
    return (
      <Router>
        <div className="font-sans">
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Experience /> 
          <Skills />
          <Projects />
          <Contact />
        </div>
      </Router>
    )
  }
  */}
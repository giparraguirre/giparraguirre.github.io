import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Inventory from './components/Inventory'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Inventory />
      <Contact />
    </div>
  )
}

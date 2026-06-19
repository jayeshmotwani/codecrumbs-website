import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

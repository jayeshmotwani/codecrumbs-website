import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Process from './components/Process'
import Projects from './components/Projects'
import Footer from './components/Footer'
import LeadModal from './components/LeadModal'

export default function App() {
  const [isLeadModalOpen, setLeadModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Nav onOpenLeadModal={() => setLeadModalOpen(true)} />
      <Hero onOpenLeadModal={() => setLeadModalOpen(true)} />
      <About />
      <Expertise />
      <Process onOpenLeadModal={() => setLeadModalOpen(true)} />
      <Projects />
      <Footer />
      <LeadModal isOpen={isLeadModalOpen} onClose={() => setLeadModalOpen(false)} />
    </div>
  )
}

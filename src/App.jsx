import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Process from './components/Process'
import Projects from './components/Projects'
import Footer from './components/Footer'
import LeadModal from './components/LeadModal'
import LegalModal from './components/LegalModal'

export default function App() {
  const [isLeadModalOpen, setLeadModalOpen] = useState(false)
  const [legalModalType, setLegalModalType] = useState(null) // null | 'privacy' | 'terms'

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Nav onOpenLeadModal={() => setLeadModalOpen(true)} />
      <Hero onOpenLeadModal={() => setLeadModalOpen(true)} />
      <About />
      <Expertise />
      <Process onOpenLeadModal={() => setLeadModalOpen(true)} />
      <Projects />
      <Footer onOpenLegalModal={setLegalModalType} />
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        onOpenPrivacy={() => setLegalModalType('privacy')}
      />
      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </div>
  )
}

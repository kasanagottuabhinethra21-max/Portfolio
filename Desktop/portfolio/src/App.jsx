import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import ParticleBackground from './components/ui/ParticleBackground'
import CursorGlow from './components/ui/CursorGlow'

const About = lazy(() => import('./components/sections/About'))
const Education = lazy(() => import('./components/sections/Education'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Achievements = lazy(() => import('./components/sections/Achievements'))
const Certifications = lazy(() => import('./components/sections/Certifications'))
const CodingProfiles = lazy(() => import('./components/sections/CodingProfiles'))
const Contact = lazy(() => import('./components/sections/Contact'))

function SectionLoader() {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500/30 border-t-cyan-400" />
    </div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen cyber-grid">
      <ParticleBackground />
      <CursorGlow />

      <div className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />

          <Suspense fallback={<SectionLoader />}>
            <About />
            <Education />
            <Skills />
            <Projects />
            <Achievements />
            <Certifications />
            <CodingProfiles />
            <Contact />
          </Suspense>
        </main>

        <Footer />
      </div>

      <motion.a
        href="#home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 backdrop-blur-sm transition-all hover:border-cyan-400/40 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] no-print"
        aria-label="Back to top"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </motion.a>
    </div>
  )
}

export default App

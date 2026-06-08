import { useEffect, useState } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function LoadingScreen({ done }) {
  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050810] transition-opacity duration-700 ${done ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center">
        <div className="font-mono text-5xl font-bold text-cyan-400 text-glow mb-4 animate-pulse">AS</div>
        <div className="font-mono text-xs text-slate-600 tracking-widest">INITIALIZING...</div>
        <div className="mt-4 w-32 h-px bg-[#1a2540] mx-auto overflow-hidden rounded-full">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-400 animate-[loading_1.2s_ease_forwards]" />
        </div>
      </div>
      <style>{`@keyframes loading { from{width:0} to{width:100%} }`}</style>
    </div>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="noise">
      <LoadingScreen done={loaded} />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Differentials from './components/Differentials'
import About from './components/About'
import CTA from './components/CTA'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">P<span>.</span>L</div>
      <div className="footer-copy">© {new Date().getFullYear()} — Desenvolvido com foco em resultado</div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    // Pequeno delay para garantir que todos os componentes já montaram no DOM
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
      )
      document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Differentials />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
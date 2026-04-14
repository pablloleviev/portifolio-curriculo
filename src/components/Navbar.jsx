import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">P<span>.</span>L</div>

      <ul className="navbar-links">
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#sobre">Sobre</a></li>
      </ul>

      <a href="#contato" className="navbar-cta">Fale comigo</a>
    </nav>
  )
}
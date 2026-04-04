import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { NavigationContext } from './context/NavigationContext'
import './index.css'

const BASE = import.meta.env.BASE_URL // '/SIA-CFS/'

function getInitialPage() {
  const path = window.location.pathname
  const rel  = path.replace(BASE, '').replace(/^\//, '')
  return rel === 'contato' ? 'contact' : 'home'
}

function App() {
  const [page, setPage]   = useState(getInitialPage)
  const pendingHashRef     = useRef(null)

  /* ── Função de navegação centralizada ── */
  const navigate = (target, hash = '') => {
    if (target === 'contact') {
      window.history.pushState({}, '', `${BASE}contato`)
      setPage('contact')
    } else {
      const url = hash ? `${BASE}${hash}` : BASE
      window.history.pushState({}, '', url)
      pendingHashRef.current = hash || null
      setPage('home')
    }
  }

  /* Scroll após mudança de página */
  useEffect(() => {
    if (page === 'home' && pendingHashRef.current) {
      const hash = pendingHashRef.current
      pendingHashRef.current = null
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [page])

  /* Botão Voltar/Avançar do navegador */
  useEffect(() => {
    const handlePop = () => setPage(getInitialPage())
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [])

  return (
    <NavigationContext.Provider value={{ page, navigate }}>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {page === 'home' ? (
          <>
            <Hero />
            <About />
            <Services />
          </>
        ) : (
          <Contact />
        )}
      </main>
      <Footer />
    </NavigationContext.Provider>
  )
}

export default App

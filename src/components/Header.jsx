import { useState, useEffect, useRef } from 'react'
import styles from './Header.module.css'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#atuacao', label: 'Áreas de Atuação' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const menuRef                   = useRef(null)
  const hamburgerRef              = useRef(null)

  /* Detecta scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Fecha menu com Escape */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [menuOpen])

  /* Fecha menu ao clicar fora */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  /* Impede scroll do body quando menu está aberto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      role="banner"
      ref={menuRef}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo} aria-label="Dra. Celia Francisco da Silva — Página inicial">
          <img
            src={`${import.meta.env.BASE_URL}images/logos/logo.png`}
            alt=""
            aria-hidden="true"
            className={styles.logoImg}
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
          <span className={styles.logoFallback}>
            <span className={styles.logoName}>Dra. Celia Francisco da Silva</span>
            <span className={styles.logoSub}>Sociedade Individual de Advocacia</span>
          </span>
        </a>

        {/* Navegação Desktop */}
        <nav className={styles.nav} aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <a href="#contato" className={styles.ctaBtn}>
            Fale Conosco
          </a>
        </nav>

        {/* Hamburger */}
        <button
          ref={hamburgerRef}
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Menu Mobile
          inert={!menuOpen || undefined}:
            – menu fechado  → inert=true  → elemento e filhos inacessíveis por teclado/AT
            – menu aberto   → inert=undefined → atributo removido do DOM
          Compatível com React 19 (atributo booleano nativo do HTML). */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}
        aria-label="Navegação mobile"
        aria-hidden={!menuOpen}
        inert={!menuOpen || undefined}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contato"
          className={styles.mobileCta}
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
        >
          Fale Conosco
        </a>
      </nav>
    </header>
  )
}

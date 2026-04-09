import { useState, useRef, useCallback, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Services.module.css'
import { useNavigation } from '../context/NavigationContext'

const services = [
  {
    id: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Direito de Família',
    short: 'Divórcio, guarda, pensão alimentícia e inventários.',
    description:
      'Atuamos em todas as questões que envolvem relações familiares: divórcio consensual e litigioso, guarda de filhos, regulamentação de visitas, pensão alimentícia, partilha de bens e inventários.',
  },
  {
    id: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Direito Trabalhista',
    short: 'Rescisões, horas extras, assédio e direitos do trabalhador.',
    description:
      'Defesa dos direitos do trabalhador e empregador em demandas trabalhistas: rescisão de contrato, verbas rescisórias, horas extras, assédio moral e sexual, acidente de trabalho e muito mais.',
  },
  {
    id: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Direito Imobiliário',
    short: 'Compra, venda, locação e regularização de imóveis.',
    description:
      'Assessoria completa em negócios imobiliários: análise e elaboração de contratos de compra e venda, locação, usucapião, regularização de imóveis e resolução de conflitos condominiais.',
  },
  {
    id: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Direito do Consumidor',
    short: 'Defesa contra práticas abusivas e indenizações.',
    description:
      'Atuação em casos de relações de consumo: cobranças indevidas, negativação indevida, produtos com defeito, descumprimento de contratos e indenizações por danos materiais e morais.',
  },
]

/* Conteúdo do painel — reutilizado no desktop e no accordion mobile */
function PanelContent({ s, navigate }) {
  return (
    <>
      <div className={styles.detailIcon}>{s.icon}</div>
      <div className={styles.detailNum} aria-hidden="true">{s.id}</div>
      <h3 className={styles.detailTitle}>{s.title}</h3>
      <p className={styles.detailDesc}>{s.description}</p>
      <a
        href="#contato"
        className={styles.detailCta}
        onClick={(e) => { e.preventDefault(); navigate('contact') }}
      >
        Consultar sobre este assunto
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </>
  )
}

export default function Services() {
  const [active, setActive]        = useState(0)
  const [headerRef, headerVisible] = useScrollReveal(0.1)
  const [gridRef,   gridVisible]   = useScrollReveal(0.05)
  const tabRefs                    = useRef([])
  const { navigate }               = useNavigation()

  /* ── Escuta o evento customizado disparado pelo Footer ── */
  useEffect(() => {
    const handleOpenService = (e) => {
      setActive(e.detail.index)
    }
    window.addEventListener('openService', handleOpenService)

    const stored = sessionStorage.getItem('openServiceIndex')
    if (stored !== null) {
      setActive(parseInt(stored, 10))
      sessionStorage.removeItem('openServiceIndex')
    }

    return () => window.removeEventListener('openService', handleOpenService)
  }, [])

  /* Navegação por teclado — padrão ARIA Tablist */
  const handleKeyDown = useCallback((e, idx) => {
    let next = -1
    if (e.key === 'ArrowDown'  || e.key === 'ArrowRight') next = (idx + 1) % services.length
    if (e.key === 'ArrowUp'    || e.key === 'ArrowLeft')  next = (idx - 1 + services.length) % services.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End')  next = services.length - 1

    if (next >= 0) {
      e.preventDefault()
      setActive(next)
      tabRefs.current[next]?.focus()
    }
  }, [])

  /* Toggle accordion no mobile: clique no item ativo fecha */
  const handleClick = (i) => {
    setActive(prev => prev === i ? -1 : i)
  }

  return (
    <section id="atuacao" className={styles.services} aria-labelledby="services-heading">
      <div className={styles.container}>
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className={`${styles.header} ${headerVisible ? styles.reveal : styles.hidden}`}
        >
          <span className={styles.sectionTag} aria-hidden="true">Áreas de Atuação</span>
          <h2 id="services-heading" className={styles.title}>
            Como posso
            <em className={styles.titleAccent}> te ajudar?</em>
          </h2>
          <p className={styles.subtitle}>
            Especialização em diversas áreas do Direito para oferecer
            a melhor solução para o seu caso.
          </p>
        </div>

        {/* Grid de serviços */}
        <div
          ref={gridRef}
          className={`${styles.grid} ${gridVisible ? styles.reveal : styles.hidden}`}
        >
          {/* Lista — tablist acessível */}
          <div
            role="tablist"
            aria-label="Áreas de atuação"
            className={styles.list}
          >
            {services.map((s, i) => (
              <div key={s.id} className={styles.listItem}>
                <button
                  role="tab"
                  id={`tab-${s.id}`}
                  aria-selected={active === i}
                  aria-controls={`panel-${s.id}`}
                  aria-expanded={active === i}
                  ref={(el) => (tabRefs.current[i] = el)}
                  className={`${styles.item} ${active === i ? styles.itemActive : ''}`}
                  onClick={() => handleClick(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  tabIndex={active === i ? 0 : -1}
                >
                  <span className={styles.itemNum} aria-hidden="true">{s.id}</span>
                  <div className={styles.itemText}>
                    <span className={styles.itemTitle}>{s.title}</span>
                    <span className={styles.itemShort}>{s.short}</span>
                  </div>
                  {/* Seta: chevron no mobile, → no desktop */}
                  <span className={styles.itemArrowDesktop} aria-hidden="true">→</span>
                  <svg
                    className={`${styles.itemChevron} ${active === i ? styles.itemChevronOpen : ''}`}
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Painel inline — visível apenas no mobile via CSS */}
                <div
                  id={`panel-${s.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${s.id}`}
                  className={`${styles.inlinePanel} ${active === i ? styles.inlinePanelOpen : ''}`}
                >
                  <div className={styles.inlinePanelInner}>
                    <PanelContent s={s} navigate={navigate} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Painel de detalhes — visível apenas no desktop via CSS */}
          {services.map((s, i) => (
            <div
              key={s.id}
              role="tabpanel"
              id={`panel-desktop-${s.id}`}
              aria-labelledby={`tab-${s.id}`}
              className={`${styles.detail} ${active === i ? styles.detailVisible : styles.detailHidden}`}
              hidden={active !== i}
            >
              <PanelContent s={s} navigate={navigate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

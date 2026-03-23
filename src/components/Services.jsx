import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Services.module.css'

const services = [
  {
    id: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Direito do Consumidor',
    short: 'Defesa contra práticas abusivas e indenizações.',
    description:
      'Atuação em casos de relações de consumo: cobranças indevidas, negativação indevida, produtos com defeito, descumprimento de contratos e indenizações por danos materiais e morais.',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const [headerRef, headerVisible] = useScrollReveal(0.1)
  const [gridRef, gridVisible] = useScrollReveal(0.05)

  return (
    <section id="atuacao" className={styles.services}>
      <div className={styles.container}>
        {/* Header */}
        <div ref={headerRef} className={`${styles.header} ${headerVisible ? styles.reveal : styles.hidden}`}>
          <span className={styles.sectionTag}>02 — Áreas de Atuação</span>
          <h2 className={styles.title}>
            Como posso
            <span className={styles.titleAccent}> te ajudar?</span>
          </h2>
          <p className={styles.subtitle}>
            Especialização em diversas áreas do Direito para oferecer
            a melhor solução para o seu caso.
          </p>
        </div>

        {/* Services grid */}
        <div ref={gridRef} className={`${styles.grid} ${gridVisible ? styles.reveal : styles.hidden}`}>
          {/* List */}
          <div className={styles.list}>
            {services.map((s, i) => (
              <button
                key={s.id}
                className={`${styles.item} ${active === i ? styles.itemActive : ''}`}
                onClick={() => setActive(i)}
              >
                <span className={styles.itemNum}>{s.id}</span>
                <div className={styles.itemText}>
                  <div className={styles.itemTitle}>{s.title}</div>
                  <div className={styles.itemShort}>{s.short}</div>
                </div>
                <span className={styles.itemArrow}>→</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className={styles.detail}>
            <div className={styles.detailIcon}>{services[active].icon}</div>
            <div className={styles.detailNum}>{services[active].id}</div>
            <h3 className={styles.detailTitle}>{services[active].title}</h3>
            <p className={styles.detailDesc}>{services[active].description}</p>
            <a href="#contato" className={styles.detailCta}>
              Consultar sobre este assunto
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

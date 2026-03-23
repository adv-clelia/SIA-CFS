import { useState } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    role: 'Processo de Divórcio',
    quote:
      'A Dra. [Nome] foi fundamental nesse momento tão difícil da minha vida. Ela me guiou com paciência e profissionalismo em cada etapa do processo. Conseguimos um resultado excelente e me sinto protegida.',
    initials: 'MS',
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    role: 'Direito Trabalhista',
    quote:
      'Indicação certeira! Ela domina muito bem o direito trabalhista. Meu caso parecia impossível, mas ela encontrou a saída certa. Comunicação clara, prazos cumpridos e resultado acima do esperado.',
    initials: 'CM',
  },
  {
    id: 3,
    name: 'Ana Rodrigues',
    role: 'Direito do Consumidor',
    quote:
      'Fui muito bem atendida desde o primeiro contato. A Dra. explicou tudo de forma clara e simples, sem juridiquês. Meu processo foi resolvido rapidamente e recebi toda a indenização que tinha direito.',
    initials: 'AR',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  return (
    <section id="depoimentos" className={styles.section}>
      {/* Decorative */}
      <div className={styles.bgAccent} />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.sectionTag}>03 — Depoimentos</span>
          <h2 className={styles.title}>
            O que dizem
            <span className={styles.titleAccent}> nossos clientes</span>
          </h2>
        </div>

        {/* Testimonial card */}
        <div className={styles.cardWrap}>
          <div className={styles.card}>
            <div className={styles.quote}>&ldquo;</div>
            <p className={styles.quoteText}>{testimonials[active].quote}</p>

            <div className={styles.author}>
              <div className={styles.avatar}>
                {testimonials[active].initials}
              </div>
              <div>
                <p className={styles.authorName}>{testimonials[active].name}</p>
                <p className={styles.authorRole}>{testimonials[active].role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <button className={styles.navBtn} onClick={prev} aria-label="Anterior">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button className={styles.navBtn} onClick={next} aria-label="Próximo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className={styles.trustBar}>
          <div className={styles.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>OAB Registrada</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="9 11 12 14 22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <span>Sigilo garantido</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Atendimento ágil</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span>Atendimento humanizado</span>
          </div>
        </div>
      </div>
    </section>
  )
}

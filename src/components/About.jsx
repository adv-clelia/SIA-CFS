import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './About.module.css'

const credentials = [
  { icon: '🎓', label: 'Formação', value: 'Faculdade de Direito — [Universidade]' },
  { icon: '📜', label: 'OAB', value: 'Nº [00000] — [Estado]' },
  { icon: '🏛️', label: 'Especialização', value: '[Área de especialização]' },
  { icon: '📍', label: 'Atuação', value: '[Cidade], [Estado]' },
]

export default function About() {
  const [imageRef, imageVisible] = useScrollReveal(0.1)
  const [textRef, textVisible] = useScrollReveal(0.1)

  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.labelRow}>
          <span className={styles.sectionTag}>01 — Sobre mim</span>
        </div>

        <div className={styles.grid}>
          {/* Left: image block */}
          <div
            ref={imageRef}
            className={`${styles.imageBlock} ${imageVisible ? styles.revealLeft : styles.hiddenLeft}`}
          >
            <div className={styles.imageWrap}>
              <div className={styles.imagePlaceholder}>
                {/* Replace with: <img src="/images/foto-sobre.jpg" alt="Dra. [Nome]" /> */}
                <span className={styles.imgLabel}>Foto</span>
              </div>
              <div className={styles.imageFrame} />
            </div>

            {/* Credentials card */}
            <div className={styles.credCard}>
              {credentials.map((c) => (
                <div key={c.label} className={styles.credItem}>
                  <span className={styles.credIcon}>{c.icon}</span>
                  <div>
                    <p className={styles.credLabel}>{c.label}</p>
                    <p className={styles.credValue}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div
            ref={textRef}
            className={`${styles.textBlock} ${textVisible ? styles.revealRight : styles.hiddenRight}`}
          >
            <h2 className={styles.title}>
              Comprometida com a
              <span className={styles.titleAccent}> justiça</span> e com
              <span className={styles.titleAccent}> você.</span>
            </h2>

            <p className={styles.body}>
              Com mais de uma década de experiência, [Nome Completo] construiu uma carreira 
              sólida baseada em princípios de ética, transparência e dedicação plena a cada 
              cliente. Acreditamos que todo indivíduo merece representação jurídica de 
              qualidade, independente da complexidade do caso.
            </p>

            <p className={styles.body}>
              Nosso escritório oferece atendimento humanizado, onde cada situação é tratada 
              com a seriedade e o cuidado que merece. Desde a primeira consulta até a 
              resolução do seu caso, você terá suporte completo.
            </p>

            {/* Values */}
            <div className={styles.values}>
              {['Ética Profissional', 'Transparência', 'Dedicação', 'Resultados'].map((v) => (
                <div key={v} className={styles.valueTag}>
                  <span className={styles.valueDot} />
                  {v}
                </div>
              ))}
            </div>

            <a href="#contato" className={styles.cta}>
              Agende uma conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './About.module.css'

const credentials = [
  { icon: '🎓', label: 'Formação',       value: 'Faculdade de Direito — [Universidade]' },
  { icon: '📜', label: 'OAB',            value: 'Nº [00000] — [Estado]' },
  { icon: '🏛️', label: 'Especialização', value: '[Área de especialização]' },
  { icon: '📍', label: 'Atuação',        value: '[Cidade], [Estado]' },
]

const values = ['Ética Profissional', 'Transparência', 'Dedicação', 'Resultados']

export default function About() {
  const [imageRef, imageVisible] = useScrollReveal(0.1)
  const [textRef,  textVisible]  = useScrollReveal(0.1)

  return (
    <section id="sobre" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.container}>
        <div className={styles.labelRow}>
          <span className={styles.sectionTag} aria-hidden="true">01 — Sobre mim</span>
        </div>

        <div className={styles.grid}>
          {/* Coluna: imagem + credenciais */}
          <div
            ref={imageRef}
            className={`${styles.imageBlock} ${imageVisible ? styles.revealLeft : styles.hiddenLeft}`}
          >
            <div className={styles.imageWrap}>
              <div className={styles.imagePlaceholder}>
                {/* Substitua por: <img src="/images/foto-sobre.jpg" alt="Dra. Celia Francisco da Silva" /> */}
                <span className={styles.imgLabel} aria-hidden="true">Foto</span>
              </div>
              <div className={styles.imageFrame} aria-hidden="true" />
            </div>

            {/* Cartão de credenciais */}
            <dl className={styles.credCard} aria-label="Credenciais profissionais">
              {credentials.map((c) => (
                <div key={c.label} className={styles.credItem}>
                  <span className={styles.credIcon} aria-hidden="true">{c.icon}</span>
                  <div>
                    <dt className={styles.credLabel}>{c.label}</dt>
                    <dd className={styles.credValue}>{c.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Coluna: texto */}
          <div
            ref={textRef}
            className={`${styles.textBlock} ${textVisible ? styles.revealRight : styles.hiddenRight}`}
          >
            <h2 id="about-heading" className={styles.title}>
              Comprometida com a
              <em className={styles.titleAccent}> justiça</em> e com
              <em className={styles.titleAccent}> você.</em>
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

            {/* Valores */}
            <ul className={styles.values} aria-label="Nossos valores">
              {values.map((v) => (
                <li key={v} className={styles.valueTag}>
                  <span className={styles.valueDot} aria-hidden="true" />
                  {v}
                </li>
              ))}
            </ul>

            <a href="#contato" className={styles.cta}>
              Agende uma conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

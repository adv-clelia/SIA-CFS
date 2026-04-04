import styles from './Hero.module.css'
import { useNavigation } from '../context/NavigationContext'

export default function Hero() {
  const { navigate } = useNavigation()

  return (
    <section className={styles.hero} aria-label="Apresentação">
      {/* Elementos decorativos */}
      <div className={styles.bgShape}  aria-hidden="true" />
      <div className={styles.bgDot}    aria-hidden="true" />
      <div className={styles.bgGrid}   aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>

          {/* Overline */}
          <p className={`${styles.overline} fade-up`} style={{ animationDelay: '0.1s' }}>
            <span className={styles.overlineDash} aria-hidden="true" />
            Advocacia &amp; Consultoria Jurídica
          </p>

          {/* Título principal */}
          <h1 className={`${styles.title} fade-up`} style={{ animationDelay: '0.22s' }}>
            Defendendo
            <br />
            <em className={styles.titleAccent}>seus direitos</em>
            <br />
            com excelência.
          </h1>

          <p className={`${styles.subtitle} fade-up`} style={{ animationDelay: '0.38s' }}>
            Assessoria jurídica personalizada com ética, dedicação
            <span className={styles.brHidden}> </span>
            <br className={styles.br} />
            e comprometimento com cada cliente.
          </p>

          {/* CTAs */}
          <div className={`${styles.actions} fade-up`} style={{ animationDelay: '0.52s' }}>
            <a
              href="#contato"
              className={styles.btnPrimary}
              onClick={(e) => { e.preventDefault(); navigate('contact') }}
            >
              Agendar Consulta
            </a>
            <a href="#sobre" className={styles.btnSecondary} aria-label="Conhecer mais sobre a Dra. Clelia">
              Conheça mais
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <dl className={`${styles.stats} fade-up`} style={{ animationDelay: '0.66s' }}>
            <div className={styles.stat}>
              <dt className={styles.statLabel}>Anos de experiência</dt>
              <dd className={styles.statNum}>10+</dd>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <dt className={styles.statLabel}>Casos resolvidos</dt>
              <dd className={styles.statNum}>500+</dd>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <dt className={styles.statLabel}>Satisfação dos clientes</dt>
              <dd className={styles.statNum}>98%</dd>
            </div>
          </dl>
        </div>

        {/* Coluna visual */}
        <div
          className={`${styles.visual} fade-in`}
          style={{ animationDelay: '0.28s' }}
          aria-hidden="true"
        >
          <div className={styles.photoFrame}>
            <div className={styles.photoPlaceholder}>
              {/* Substitua por: <img src="/images/foto-dra.jpg" alt="Dra. Clelia Francisco da Silva" /> */}
              <div className={styles.photoInitials}>
                <span>Dra.</span>
                <span className={styles.photoInitialsName}>Clelia</span>
              </div>
            </div>
            <div className={styles.photoAccent}  aria-hidden="true" />
            <div className={styles.photoAccent2} aria-hidden="true" />
          </div>

          {/* Badge flutuante */}
          <div className={styles.badge}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <div>
              <p className={styles.badgeTitle}>OAB Registrada</p>
              <p className={styles.badgeSub}>Profissional certificada</p>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>role para baixo</span>
      </div>
    </section>
  )
}

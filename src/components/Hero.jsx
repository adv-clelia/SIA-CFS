import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Decorative background elements */}
      <div className={styles.bgShape} />
      <div className={styles.bgDot} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Overline */}
          <p className={`${styles.overline} fade-up`} style={{ animationDelay: '0.1s' }}>
            Advocacia &amp; Consultoria Jurídica
          </p>

          {/* Main heading */}
          <h1 className={`${styles.title} fade-up`} style={{ animationDelay: '0.25s' }}>
            Defendendo
            <br />
            <span className={styles.titleAccent}>seus direitos</span>
            <br />
            com excelência.
          </h1>

          {/* Subtitle */}
          <p className={`${styles.subtitle} fade-up`} style={{ animationDelay: '0.4s' }}>
            Assessoria jurídica personalizada com ética, dedicação
            <br className={styles.br} />
            e comprometimento com cada cliente.
          </p>

          {/* CTAs */}
          <div className={`${styles.actions} fade-up`} style={{ animationDelay: '0.55s' }}>
            <a href="#contato" className={styles.btnPrimary}>
              Agendar Consulta
            </a>
            <a href="#sobre" className={styles.btnSecondary}>
              Conheça mais
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className={`${styles.stats} fade-up`} style={{ animationDelay: '0.7s' }}>
            <div className={styles.stat}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>Anos de experiência</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Casos resolvidos</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>98%</span>
              <span className={styles.statLabel}>Satisfação dos clientes</span>
            </div>
          </div>
        </div>

        {/* Visual side */}
        <div className={`${styles.visual} fade-in`} style={{ animationDelay: '0.3s' }}>
          <div className={styles.photoFrame}>
            <div className={styles.photoPlaceholder}>
              {/* Replace with: <img src="/images/foto-dra.jpg" alt="Dra. [Nome]" /> */}
              <div className={styles.photoInitials}>
                <span>Dra.</span>
                <span className={styles.photoInitialsName}>[Nome]</span>
              </div>
            </div>
            <div className={styles.photoAccent} />
          </div>

          {/* Floating badge */}
          <div className={styles.badge}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <div>
              <p className={styles.badgeTitle}>OAB Registrada</p>
              <p className={styles.badgeSub}>Profissional certificada</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>role para baixo</span>
      </div>
    </section>
  )
}

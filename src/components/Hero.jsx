import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Apresentação">
      {/* Elementos decorativos — ocultos para leitores de tela */}
      <div className={styles.bgShape} aria-hidden="true" />
      <div className={styles.bgDot}   aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Overline */}
          <p className={`${styles.overline} fade-up`} style={{ animationDelay: '0.1s' }}>
            Advocacia &amp; Consultoria Jurídica
          </p>

          {/* Título principal — único h1 na página */}
          <h1 className={`${styles.title} fade-up`} style={{ animationDelay: '0.25s' }}>
            Defendendo
            <br />
            <em className={styles.titleAccent}>seus direitos</em>
            <br />
            com excelência.
          </h1>

          <p className={`${styles.subtitle} fade-up`} style={{ animationDelay: '0.4s' }}>
            Assessoria jurídica personalizada com ética, dedicação
            <span className={styles.brHidden}> </span>
            <br className={styles.br} />
            e comprometimento com cada cliente.
          </p>

          {/* CTAs */}
          <div className={`${styles.actions} fade-up`} style={{ animationDelay: '0.55s' }}>
            <a href="#contato" className={styles.btnPrimary}>
              Agendar Consulta
            </a>
            <a href="#sobre" className={styles.btnSecondary} aria-label="Conhecer mais sobre a Dra. Celia">
              Conheça mais
              <svg
                width="16" height="16"
                viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <dl className={`${styles.stats} fade-up`} style={{ animationDelay: '0.7s' }}>
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

        {/* Lado visual */}
        <div
          className={`${styles.visual} fade-in`}
          style={{ animationDelay: '0.3s' }}
          aria-hidden="true"
        >
          <div className={styles.photoFrame}>
            <div className={styles.photoPlaceholder}>
              {/* Substitua pelo: <img src="/images/foto-dra.jpg" alt="Dra. Celia Francisco da Silva" /> */}
              <div className={styles.photoInitials}>
                <span>Dra.</span>
                <span className={styles.photoInitialsName}>Clelia</span>
              </div>
            </div>
            <div className={styles.photoAccent} />
          </div>

          {/* Badge flutuante */}
          <div className={styles.badge}>
            <svg
              width="20" height="20"
              viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.5"
              aria-hidden="true"
            >
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

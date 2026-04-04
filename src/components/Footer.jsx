import styles from './Footer.module.css'
import { useNavigation } from '../context/NavigationContext'

// Mapeia o índice de cada área para o disparo do evento
const areas = [
  { label: 'Direito de Família',    index: 0 },
  { label: 'Direito Trabalhista',   index: 1 },
  { label: 'Direito Imobiliário',   index: 2 },
  { label: 'Direito do Consumidor', index: 3 },
]

function handleAreaClick(index, navigate, page) {
  sessionStorage.setItem('openServiceIndex', index)
  if (page === 'contact') {
    navigate('home', '#atuacao')
  } else {
    window.dispatchEvent(new CustomEvent('openService', { detail: { index } }))
    document.querySelector('#atuacao')?.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Footer() {
  const year             = new Date().getFullYear()
  const { page, navigate } = useNavigation()

  const handleContactLink = (e) => {
    e.preventDefault()
    navigate('contact')
  }

  const handleSectionLink = (e, hash) => {
    e.preventDefault()
    if (page === 'contact') {
      navigate('home', hash)
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>

        {/* Linha superior */}
        <div className={styles.top}>

          {/* Marca */}
          <div className={styles.brand}>
            <a
              href={`${import.meta.env.BASE_URL}`}
              className={styles.logo}
              aria-label="Dra. Celia Francisco da Silva — Topo da página"
              onClick={(e) => { e.preventDefault(); navigate('home') }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/logos/logo-footer.png`}
                alt="Celia Francisco da Silva — Advocacia e Consultoria Jurídica"
                className={styles.logoImg}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              <span className={styles.logoFallback} style={{ display: 'none' }}>
                <span className={styles.logoName}>Celia Francisco da Silva</span>
                <span className={styles.logoSub}>Advocacia e Consultoria Jurídica</span>
              </span>
            </a>

            <p className={styles.tagline}>
              Defendendo seus direitos com ética,<br />
              dedicação e excelência.
            </p>

            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/clelia_fsilva/"
                aria-label="Instagram — abre em nova aba"
                className={styles.social}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/5513982148845"
                aria-label="WhatsApp — abre em nova aba"
                className={styles.social}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navegação */}
          <nav className={styles.linkGroup} aria-label="Navegação rodapé">
            <p className={styles.linkGroupTitle}>Navegação</p>
            <a href="#sobre"   className={styles.link} onClick={(e) => handleSectionLink(e, '#sobre')}>Sobre</a>
            <a href="#atuacao" className={styles.link} onClick={(e) => handleSectionLink(e, '#atuacao')}>Áreas de Atuação</a>
            <a href="#contato" className={styles.link} onClick={handleContactLink}>Contato</a>
            <span className={`${styles.link} ${styles.linkGhost}`} aria-hidden="true">—</span>
          </nav>

          {/* Áreas — cada link abre a aba correspondente em Services */}
          <nav className={styles.linkGroup} aria-label="Áreas de atuação">
            <p className={styles.linkGroupTitle}>Áreas</p>
            {areas.map(({ label, index }) => (
              <a
                key={label}
                href="#atuacao"
                className={styles.link}
                onClick={(e) => { e.preventDefault(); handleAreaClick(index, navigate, page) }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Contato */}
          <address className={styles.linkGroup} style={{ fontStyle: 'normal' }} aria-label="Informações de contato">
            <p className={styles.linkGroupTitle}>Contato</p>
            <a
              href="https://wa.me/5513982148845"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale pelo WhatsApp"
            >
              (13) 98214-8845
            </a>
            <a href="mailto:contato@clelia.adv.br" className={styles.link}>contato@clelia.adv.br</a>
            <p className={styles.linkInfo}>Itanhaém, SP</p>
            <p className={styles.linkInfo}>Seg–Sex: 9h às 18h</p>
          </address>

        </div>

        {/* Divisor */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Rodapé inferior */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Dra. Clelia Francisco da Silva — OAB/SP Nº 313.044. Todos os direitos reservados.
          </p>
          <p className={styles.disclaimer}>
            <em>Este site tem caráter informativo e não constitui consultoria jurídica.</em>
          </p>
        </div>

      </div>
    </footer>
  )
}

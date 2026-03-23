import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Integration point: send to backend / WhatsApp / email service
    setSent(true)
  }

  const contactInfo = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: 'Telefone / WhatsApp',
      value: '(13) 9XXXX-XXXX',
      href: 'https://wa.me/5513900000000',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'E-mail',
      value: 'contato@[nome].adv.br',
      href: 'mailto:contato@nome.adv.br',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Endereço',
      value: 'Rua [Endereço], [Número] — [Bairro], [Cidade]/SP',
      href: 'https://maps.google.com',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: 'Horário de Atendimento',
      value: 'Seg–Sex: 9h às 18h',
      href: null,
    },
  ]

  return (
    <section id="contato" className={styles.section}>
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.info}>
          <span className={styles.sectionTag}>04 — Contato</span>
          <h2 className={styles.title}>
            Vamos conversar
            <span className={styles.titleAccent}>?</span>
          </h2>
          <p className={styles.subtitle}>
            Entre em contato para agendar uma consulta ou tirar dúvidas. 
            Respondemos em até 24 horas.
          </p>

          <div className={styles.contactList}>
            {contactInfo.map((c) => (
              <div key={c.label} className={styles.contactItem}>
                <div className={styles.contactIcon}>{c.icon}</div>
                <div>
                  <p className={styles.contactLabel}>{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className={styles.contactValue} target="_blank" rel="noopener noreferrer">
                      {c.value}
                    </a>
                  ) : (
                    <p className={styles.contactValue}>{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/5513900000000"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Falar pelo WhatsApp
          </a>
        </div>

        {/* Right: form */}
        <div className={styles.formWrap}>
          {sent ? (
            <div className={styles.successMsg}>
              <div className={styles.successIcon}>✓</div>
              <h3>Mensagem enviada!</h3>
              <p>Entraremos em contato em breve. Obrigada pelo interesse.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Nome completo *</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    className={styles.input}
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Telefone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    className={styles.input}
                    placeholder="(XX) XXXXX-XXXX"
                    value={form.telefone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>E-mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={styles.input}
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Assunto</label>
                <select
                  name="assunto"
                  className={styles.input}
                  value={form.assunto}
                  onChange={handleChange}
                >
                  <option value="">Selecione a área</option>
                  <option>Direito de Família</option>
                  <option>Direito Trabalhista</option>
                  <option>Direito Imobiliário</option>
                  <option>Direito do Consumidor</option>
                  <option>Outro</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Mensagem</label>
                <textarea
                  name="mensagem"
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Descreva brevemente sua situação..."
                  rows={5}
                  value={form.mensagem}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className={styles.submit}>
                Enviar mensagem
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>

              <p className={styles.privacy}>
                🔒 Suas informações são confidenciais e protegidas.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

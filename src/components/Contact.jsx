import { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const MAPS_URL =
  "https://maps.google.com/?q=Rua+Leopoldino+Araújo,+325,+Itanhaém,+SP";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const VCARD = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "FN:Dra. Clelia Francisco da Silva",
  "ORG:Advocacia e Consultoria Jurídica",
  "TEL;TYPE=WORK,CELL:+5513982148845",
  "EMAIL;TYPE=WORK:contato@clelia.adv.br",
  "ADR;TYPE=WORK:;;Rua Leopoldino Araújo\\, 325\\, Sala 2;Itanhaém;SP;;Brasil",
  "URL:https://adv-clelia.github.io/SIA-CFS/",
  "END:VCARD",
].join("\n");

const contactInfo = [
  {
    icon: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Telefone / WhatsApp",
    value: "(13) 98214-8845",
    href: "https://wa.me/5513982148845",
  },
  {
    icon: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "E-mail",
    value: "contato@clelia.adv.br",
    href: "mailto:contato@clelia.adv.br",
  },
  {
    icon: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Endereço",
    value: "Rua Leopoldino Araújo, 325 — Sala 2, Itanhaém/SP",
    href: MAPS_URL,
  },
  {
    icon: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Horário de Atendimento",
    value: "Seg–Sex: 9h às 18h",
    href: null,
  },
];

export default function Contact() {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
    if (sendError) setSendError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!form.nome.trim()) newErrors.nome = "Por favor, informe seu nome.";
    if (!form.email.trim()) newErrors.email = "Por favor, informe seu e-mail.";
    else if (!EMAIL_REGEX.test(form.email.trim()))
      newErrors.email = "Por favor, informe um e-mail válido.";
    const digitsOnly = form.telefone.replace(/\D/g, "");
    if (!form.telefone.trim())
      newErrors.telefone = "Por favor, informe seu telefone.";
    else if (digitsOnly.length < 10)
      newErrors.telefone = "Informe um telefone com DDD e ao menos 8 dígitos.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      document.getElementById(Object.keys(newErrors)[0])?.focus();
      return;
    }
    setSending(true);
    setSendError("");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSendError("Não foi possível enviar a mensagem. Tente pelo WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setForm({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
    setErrors({});
    setSendError("");
    setSent(false);
  };

  return (
    <section
      id="contato"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      {/* ── Hero do topo ── */}
      <div className={styles.hero}>
        <h2 id="contact-heading" className={styles.heroTitle}>
          Vamos <em className={styles.heroAccent}>conversar?</em>
        </h2>
        <p className={styles.heroSub}>
          Agende uma consulta ou tire suas dúvidas. Respondemos em até 24 horas
          úteis.
        </p>
      </div>

      {/* ── Corpo: info + formulário ── */}
      <div className={styles.container}>
        {/* ── Coluna esquerda ── */}
        <div className={styles.sidebar}>
          {/* Foto da Dra. */}
          <div className={styles.profileCard}>
            <div className={styles.photoWrap}>
              <img
                src={`${import.meta.env.BASE_URL}images/doutora/contato.png`}
                alt="Dra. Clelia Francisco da Silva"
                className={styles.photoImg}
              />

              <div className={styles.photoPlaceholder} aria-hidden="true">
                <div className={styles.photoInitials}>
                  <span>Dra.</span>
                  <span className={styles.photoName}>Clelia</span>
                </div>
              </div>
            </div>
            <div className={styles.profileInfo}>
              <p className={styles.profileName}>
                Dra. Clelia Francisco da Silva
              </p>
              <p className={styles.profileRole}>
                Advocacia &amp; Consultoria Jurídica
              </p>
              <p className={styles.profileOab}>OAB/SP Nº 313.044</p>
            </div>
          </div>

          {/* Cards de contato */}
          <address className={styles.contactList}>
            {contactInfo.map((c) => (
              <div key={c.label} className={styles.contactItem}>
                <div className={styles.contactIcon}>{c.icon}</div>
                <div className={styles.contactText}>
                  <p className={styles.contactLabel}>{c.label}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className={styles.contactValue}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        c.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className={styles.contactValue}>{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </address>

          {/* QR Code — salvar contato */}
          <button
            type="button"
            className={styles.qrCard}
            onClick={() => {
              const blob = new Blob([VCARD], { type: 'text/vcard;charset=utf-8' })
              const url  = URL.createObjectURL(blob)
              const a    = document.createElement('a')
              a.href     = url
              a.download = 'dra-clelia.vcf'
              a.click()
              setTimeout(() => URL.revokeObjectURL(url), 1000)
            }}
            aria-label="Baixar contato da Dra. Clelia para sua agenda"
          >
            <div className={styles.qrWrap}>
              <QRCodeSVG
                value={VCARD}
                size={160}
                bgColor="transparent"
                fgColor="#7A3E3B"
                level="M"
              />
            </div>
            <div className={styles.qrInfo}>
              <p className={styles.qrTitle}>Salvar contato</p>
              <p className={styles.qrSub}>
                Escaneie com a câmera ou{' '}
                <span className={styles.qrTap}>toque aqui</span>{' '}
                para adicionar à sua agenda.
              </p>
            </div>
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5513982148845"
            className={styles.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar pelo WhatsApp — abre em nova aba"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Falar pelo WhatsApp
          </a>
        </div>

        {/* ── Formulário ── */}
        <div className={styles.formWrap}>
          {sent ? (
            <div
              className={styles.successMsg}
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className={styles.successIconWrap} aria-hidden="true">
                ✓
              </div>
              <h3>Mensagem enviada!</h3>
              <p>Entraremos em contato em breve. Obrigada pelo interesse.</p>
              <button
                type="button"
                className={styles.successBtn}
                onClick={handleReset}
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <>
              <p className={styles.formTitle}>Envie uma mensagem</p>
              <p className={styles.formSubtitle}>
                Preencha o formulário e retornaremos em até 24h
              </p>

              <form
                ref={formRef}
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulário de contato"
              >
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="nome" className={styles.label}>
                      Nome completo <span aria-hidden="true">*</span>
                      <span className="sr-only">(obrigatório)</span>
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      autoComplete="name"
                      className={`${styles.input} ${errors.nome ? styles.inputError : ""}`}
                      placeholder="Seu nome"
                      value={form.nome}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.nome}
                      aria-describedby={errors.nome ? "nome-error" : undefined}
                    />
                    {errors.nome && (
                      <span
                        id="nome-error"
                        className={styles.errorMsg}
                        role="alert"
                      >
                        {errors.nome}
                      </span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="telefone" className={styles.label}>
                      Telefone / WhatsApp <span aria-hidden="true">*</span>
                      <span className="sr-only">(obrigatório)</span>
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      className={`${styles.input} ${errors.telefone ? styles.inputError : ""}`}
                      placeholder="(13) 98214-8845"
                      value={form.telefone}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.telefone}
                      aria-describedby={
                        errors.telefone ? "telefone-error" : undefined
                      }
                    />
                    {errors.telefone && (
                      <span
                        id="telefone-error"
                        className={styles.errorMsg}
                        role="alert"
                      >
                        {errors.telefone}
                      </span>
                    )}
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>
                    E-mail <span aria-hidden="true">*</span>
                    <span className="sr-only">(obrigatório)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <span
                      id="email-error"
                      className={styles.errorMsg}
                      role="alert"
                    >
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="assunto" className={styles.label}>
                    Área de interesse
                  </label>
                  <div className={styles.selectWrap}>
                    <select
                      id="assunto"
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
                </div>

                <div className={styles.field}>
                  <label htmlFor="mensagem" className={styles.label}>
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Descreva brevemente sua situação..."
                    rows={5}
                    value={form.mensagem}
                    onChange={handleChange}
                    aria-describedby="form-privacy"
                  />
                </div>

                {sendError && (
                  <div className={styles.sendError} role="alert">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {sendError}
                  </div>
                )}

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={sending}
                  aria-busy={sending}
                >
                  {sending ? "Enviando…" : "Enviar mensagem"}
                  {!sending && (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  )}
                </button>

                <p id="form-privacy" className={styles.privacy}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Suas informações são confidenciais e protegidas.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

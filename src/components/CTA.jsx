const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const LiIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const GhIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

export default function CTA() {
  return (
    <section className="cta-section" id="contato">
      <div className="cta-bg" aria-hidden="true" />

      <div className="cta-inner">
        <h2 className="cta-title fade-up">
          Seu negócio merece um sistema<br />
          <span className="accent">feito pra ele, não pra todo mundo.</span>
        </h2>

        <p className="cta-sub fade-up">
          Me conta o problema. A gente descobre juntos se tem um sistema
          que resolve — antes de qualquer orçamento.
        </p>

        {/* Linha 1 — WhatsApp (destaque total, largura completa) */}
        <div className="cta-grid fade-up">
          <a
            href="https://wa.me/5561984660994"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-card cta-card-primary"
            data-track="cta-whatsapp"
          >
            <span className="cta-card-icon"><WaIcon /></span>
            <span className="cta-card-info">
              <span className="cta-card-label">WhatsApp</span>
              <span className="cta-card-sub">(61) 98466-0994</span>
            </span>
          </a>

          {/* Linha 2 — Email (peso médio) */}
          <a
            href="mailto:pablloleviev@gmail.com"
            className="cta-card cta-card-secondary"
            data-track="cta-email"
          >
            <span className="cta-card-icon"><MailIcon /></span>
            <span className="cta-card-info">
              <span className="cta-card-label">E-mail</span>
              <span className="cta-card-sub">pablloleviev@gmail.com</span>
            </span>
          </a>

          {/* Linha 3 — LinkedIn e GitHub lado a lado */}
          <a
            href="https://linkedin.com/in/pablloleviev"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-card cta-card-tertiary"
            data-track="cta-linkedin"
          >
            <span className="cta-card-icon"><LiIcon /></span>
            <span className="cta-card-info">
              <span className="cta-card-label">LinkedIn</span>
              <span className="cta-card-sub">pablloleviev</span>
            </span>
          </a>

          <a
            href="https://github.com/pablloleviev"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-card cta-card-tertiary"
            data-track="cta-github"
          >
            <span className="cta-card-icon"><GhIcon /></span>
            <span className="cta-card-info">
              <span className="cta-card-label">GitHub</span>
              <span className="cta-card-sub">pablloleviev</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
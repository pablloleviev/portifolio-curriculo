export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-bg-glow" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-badge fade-up">
            <span className="hero-badge-dot" />
            Disponível para estágio e projetos
          </div>

          <h1 className="hero-title fade-up">
            Transformo caos<br />
            operacional em<br />
            <span className="accent">sistemas que</span><br />
            <span className="accent">geram resultado.</span>
          </h1>

          <p className="hero-sub fade-up">
            Desenvolvedor Full Stack com background comercial. Construo aplicações
            web com C#, .NET e React — focado em resolver problemas reais de negócio,
            não só entregar código.
          </p>

          <div className="hero-actions fade-up">
            <a href="#contato" className="btn-primary" data-track="hero-contato">
              Falar no WhatsApp →
            </a>
            <a href="#projetos" className="btn-ghost" data-track="hero-projetos">
              Ver projetos
            </a>
          </div>

          <div className="hero-stats fade-up">
            <div className="hero-stat">
              <div className="hero-stat-num">3°</div>
              <div className="hero-stat-label">Semestre — CC UniCEUB</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-num">2<span>+</span></div>
              <div className="hero-stat-label">Projetos entregues</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-num">Full</div>
              <div className="hero-stat-label">Stack Developer</div>
            </div>
          </div>
        </div>

        <div className="hero-img-wrap fade-up">
          <div className="hero-img-frame">
            <img src="/images/profile.png" alt="Pabllo Leviev" />
            <div className="hero-img-overlay" aria-hidden="true" />
          </div>
          <div className="hero-float-tag">
            <div className="hero-float-label">Pabllo Leviev</div>
            <div className="hero-float-val">Brasília — DF</div>
          </div>
        </div>
      </div>
    </section>
  )
}
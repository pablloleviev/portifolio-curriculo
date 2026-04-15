import { useRef, useState, useCallback } from 'react'

// ─── PROJETOS ────────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    name: 'Sistema de Gestão para Oficina Mecânica',
    tags: ['C#', '.NET', 'SQL Server', 'React'],
    problem: 'Desorganização nos dados de serviço e total falta de controle financeiro.',
    solution: 'Dashboard completo com gestão de clientes, OS e visualização de dados operacionais.',
    result: 'Redução de erros e controle total sobre o faturamento.',
    github: 'https://github.com/pablloleviev/oficina-dashboard',
    demo: null,
    images: [
      '/images/oficina/dashboard.png',
      '/images/oficina/clientes.png',
      '/images/oficina/ordens.png',
      '/images/oficina/financeiro.png',
      '/images/oficina/relatorios.png',
    ],
    reverse: false,
  },
  {
    id: 2,
    name: 'Landing Page — 2000 Escapamentos',
    tags: ['React', 'Tailwind'],
    problem: 'Sem presença digital e dificuldade em converter visitantes em clientes.',
    solution: 'Landing page otimizada para conversão — construída com foco em performance e SEO.',
    result: 'Aumento de leads e visibilidade da marca comprovados.',
    github: 'https://github.com/pablloleviev',
    demo: null,
    images: ['/images/leads.png'],
    reverse: true,
  },
  {
    id: 3,
    name: 'E-commerce de Moda Feminina',
    tags: ['React', 'Stripe', 'Firebase'],
    problem: 'Gestão manual de estoque e dificuldades nas vendas online.',
    solution: 'Plataforma completa com catálogo, pagamentos integrados e gestão de pedidos.',
    result: 'Aumento das vendas e expansão digital.',
    github: 'https://github.com/pablloleviev',
    demo: null,
    images: ['/images/ecommerce.png'],
    reverse: false,
  },
]

// ─── ÍCONES ──────────────────────────────────────────────────────────────────
const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
)

// ─── CARROSSEL ───────────────────────────────────────────────────────────────
/*
  BUGS CORRIGIDOS:
  1. .cs-track precisava de position: relative para as setas absolute funcionarem.
     As setas agora estão DENTRO do wrapper que tem position: relative.
  2. .cs-slide precisava de width: 100% + flex-shrink: 0 explícitos.
     Com flex: 0 0 auto sem width, o slide colapsa.
  3. onScroll usava offsetWidth que pode ser 0 no mount.
     Agora usa scrollLeft / (scrollWidth / total) — mais confiável.
  4. As setas estavam fora do elemento com position: relative — nunca
     ficavam sobre a imagem. Agora envolvemos track + setas num wrapper.
*/
function Carousel({ images, alt }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const total = images.length
  const multi = total > 1

  // Scroll para um slide específico pelo índice
  const goTo = useCallback((index) => {
    const track = trackRef.current
    if (!track) return
    // Usa a largura real do primeiro slide para calcular offset
    const slide = track.querySelector('.cs-slide')
    if (!slide) return
    const slideWidth = slide.offsetWidth
    track.scrollTo({ left: slideWidth * index, behavior: 'smooth' })
    setActive(index)
  }, [])

  // Sincroniza o dot ativo enquanto o usuário arrasta/scrolla livremente
  const onScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const slide = track.querySelector('.cs-slide')
    if (!slide) return
    const slideWidth = slide.offsetWidth
    if (slideWidth === 0) return
    const index = Math.round(track.scrollLeft / slideWidth)
    setActive(Math.max(0, Math.min(index, total - 1)))
  }, [total])

  return (
    // cs-root: container flexbox vertical (track + dots)
    <div className="cs-root">

      {/*
        cs-wrapper: position relative — âncora para as setas absolutas.
        É este elemento que contém tanto o track quanto as setas sobrepostas.
      */}
      <div className="cs-wrapper">

        {/* Track: overflow-x scroll + snap */}
        <div
          ref={trackRef}
          className="cs-track"
          onScroll={onScroll}
        >
          {images.map((src, i) => (
            /*
              cs-slide: flex-shrink 0 + width 100% garantem que cada slide
              ocupe exatamente a largura do container, sem colapsar.
            */
            <div key={i} className="cs-slide">
              <img
                src={src}
                alt={`${alt} — imagem ${i + 1}`}
                className="cs-img"
                draggable={false}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Setas: absolutas dentro de cs-wrapper, sobrepostas ao track */}
        {multi && (
          <>
            <button
              className={`cs-arrow cs-arrow-left${active === 0 ? ' cs-arrow-hidden' : ''}`}
              onClick={() => goTo(active - 1)}
              aria-label="Imagem anterior"
            >
              <ChevronLeft />
            </button>

            <button
              className={`cs-arrow cs-arrow-right${active === total - 1 ? ' cs-arrow-hidden' : ''}`}
              onClick={() => goTo(active + 1)}
              aria-label="Próxima imagem"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>

      {/* Dots: fora do wrapper, abaixo do track */}
      {multi && (
        <div className="cs-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`cs-dot${i === active ? ' cs-dot-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir para imagem ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ─── CARD ────────────────────────────────────────────────────────────────────
function ProjectCard({ project }) {
  return (
    <article className={`project-card fade-up${project.reverse ? ' reverse' : ''}`}>
      <div className="project-info">
        <div className="project-tags">
          {project.tags.map(t => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>

        <h3 className="project-name">{project.name}</h3>

        <div className="project-row">
          <div className="project-row-label">Problema</div>
          <div className="project-row-text">{project.problem}</div>
        </div>
        <div className="project-row">
          <div className="project-row-label">Solução</div>
          <div className="project-row-text">{project.solution}</div>
        </div>
        <div className="project-row">
          <div className="project-row-label">Resultado</div>
          <div className="project-row-result">{project.result}</div>
        </div>

        <div className="project-actions">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="btn-project-primary">
              Ver demo →
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={project.demo ? 'btn-project-secondary' : 'btn-project-primary'}
          >
            GitHub →
          </a>
        </div>
      </div>

      {/* project-visual: overflow hidden para clipar imagem nos cantos */}
      <div className="project-visual">
        <div className="project-visual-glow" aria-hidden="true" />
        <Carousel images={project.images} alt={project.name} />
      </div>
    </article>
  )
}

// ─── SEÇÃO ───────────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section className="projects-section" id="projetos">
      <div className="projects-section-inner">
        <div className="projects-header fade-up">
          <span className="section-label">Portfólio</span>
          <h2 className="section-title">
            Projetos com <span className="accent">impacto real</span>
          </h2>
          <p className="section-sub">
            Cada projeto aqui resolveu um problema concreto de negócio — não só entregou código.
          </p>
        </div>

        <div className="projects-list">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
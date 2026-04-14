const projects = [
  {
    id: 1,
    name: 'Sistema de Gestão para Oficina Mecânica',
    tags: ['C#', '.NET', 'SQL Server', 'React'],
    problem: 'Desorganização nos dados de serviço e total falta de controle financeiro.',
    solution: 'Dashboard completo com gestão de clientes, OS e visualização de dados operacionais.',
    result: 'Redução de erros e controle total sobre o faturamento.',
    github: 'https://github.com/pablloleviev/oficina-dashboard',
    demo: null, // adicione a URL quando tiver deploy
    img: '/images/oficina.png',
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
    demo: null, // adicione a URL quando tiver deploy
    img: '/images/leads.png',
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
    img: '/images/ecommerce.png',
    reverse: false,
  },
]

function ProjectCard({ project }) {
  return (
    <article className={`project-card fade-up ${project.reverse ? 'reverse' : ''}`}>
      <div className="project-info">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
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

        {/* Botões contextuais — hierarquia: demo > github */}
        <div className="project-actions">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project-primary"
              data-track={`project-demo-${project.id}`}
            >
              Ver demo →
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={project.demo ? 'btn-project-secondary' : 'btn-project-primary'}
            data-track={`project-github-${project.id}`}
          >
            GitHub →
          </a>
        </div>
      </div>

      <div className="project-visual">
        <div className="project-visual-glow" aria-hidden="true" />
        <img src={project.img} alt={project.name} className="project-visual-img" />
      </div>
    </article>
  )
}

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
          {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
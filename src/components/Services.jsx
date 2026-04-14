const services = [
  {
    id: 1,
    icon: '⚙',
    name: 'Organização Total da Operação',
    desc: 'Substituo processos manuais por um sistema centralizado que reduz erros e coloca você no controle real do negócio.',
  },
  {
    id: 2,
    icon: '◈',
    name: 'Controle Financeiro Real',
    desc: 'Tenha visão total de entradas, saídas e faturamento — sem surpresas no final do mês.',
  },
  {
    id: 3,
    icon: '⬡',
    name: 'Sistema Sob Medida',
    desc: 'Nada de soluções genéricas. Desenvolvo sistemas adaptados à realidade e ao fluxo do seu negócio.',
  },
  {
    id: 4,
    icon: '↺',
    name: 'Automação Inteligente',
    desc: 'Elimino tarefas repetitivas e libero seu tempo para focar no crescimento.',
  },
]

export default function Services() {
  return (
    <section className="services-section" id="servicos">
      <div className="services-inner">
        <div className="services-header fade-up">
          <span className="section-label">Serviços</span>
          <h2 className="section-title">
            Soluções que resolvem <span className="accent">problemas reais</span>
          </h2>
          <p className="section-sub">
            Sistemas criados para organizar, automatizar e aumentar o controle do seu negócio.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.id} className="service-item fade-up">
              <div className="service-icon" aria-hidden="true">{s.icon}</div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
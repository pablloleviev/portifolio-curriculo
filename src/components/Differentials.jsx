const items = [
  {
    num: '01',
    title: 'Visão de negócio, não só código',
    desc: 'Antes de desenvolver, entendo onde o dinheiro está sendo perdido. O controle do negócio é o objetivo — o código é a ferramenta.',
  },
  {
    num: '02',
    title: 'Menos complexidade, mais resultado',
    desc: 'Nada de sistemas inflados. Só o que realmente resolve o problema e gera impacto imediato para o cliente.',
  },
  {
    num: '03',
    title: 'Você não depende de equipe',
    desc: 'Cuido de tudo: design, interface e implementação. Sem precisar coordenar vários profissionais para uma única entrega.',
  },
  {
    num: '04',
    title: 'Decisão baseada em realidade',
    desc: 'Cada funcionalidade é construída ligada ao funcionamento real do negócio — não ao que parece bonito no papel.',
  },
]

export default function Differentials() {
  return (
    <section className="differentials-section">
      <div className="differentials-inner">
        <div className="differentials-header fade-up">
          <span className="section-label">Diferencial</span>
          <h2 className="section-title">
            Por que escolher <span className="accent">alguém que resolve?</span>
          </h2>
          <p className="section-sub">
            A maioria dos devs entrega código. Eu entrego clareza, controle e impacto direto no negócio.
          </p>
        </div>

        <div className="differentials-grid">
          {items.map((item) => (
            <div key={item.num} className="diff-card fade-up">
              <div className="diff-num">{item.num}</div>
              <h3 className="diff-title">{item.title}</h3>
              <p className="diff-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
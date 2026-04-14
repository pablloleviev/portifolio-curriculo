export default function About() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-inner">
        <div className="fade-up">
          <div className="about-img-frame">
            <img src="/images/profile.png" alt="Pabllo Leviev" />
          </div>
        </div>

        <div>
          <span className="section-label fade-up">Sobre mim</span>
          <h2 className="about-title fade-up">
            Não sou só desenvolvedor.<br />
            <span className="accent">Eu entendo o negócio por dentro.</span>
          </h2>
          <p className="about-body fade-up">
            Comecei a trabalhar aos <strong>14 anos</strong> — direto com vendas, atendimento e clientes.
            Cheguei a ser <strong>Gerente Comercial</strong> na 2000 Escapamentos, em Brasília, onde
            conduzi negociações, organizei processos e aprendi que a maioria dos problemas
            operacionais não é falta de esforço: é falta de sistema.
          </p>
          <p className="about-body fade-up">
            Hoje curso <strong>Ciência da Computação na UniCEUB</strong> (Taguatinga, DF) e desenvolvo
            aplicações Full Stack com C#, .NET e React. Meu diferencial é simples: entendo
            o lado de quem usa o sistema antes de escrever a primeira linha de código.
          </p>

          <div className="about-stack fade-up">
            <div className="about-stack-group">
              <div className="about-stack-label">Linguagens</div>
              <div className="about-stack-tags">
                {['C#', 'JavaScript', 'Python', 'Java', 'SQL'].map(t => (
                  <span key={t} className="about-stack-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="about-stack-group">
              <div className="about-stack-label">Front-end</div>
              <div className="about-stack-tags">
                {['React', 'HTML', 'CSS', 'Blazor'].map(t => (
                  <span key={t} className="about-stack-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="about-stack-group">
              <div className="about-stack-label">Back-end & DB</div>
              <div className="about-stack-tags">
                {['.NET', 'APIs REST', 'SQL Server', 'Git'].map(t => (
                  <span key={t} className="about-stack-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Botão ancora para a seção de contato */}
          <div className="fade-up">
            <a
              href="#contato"
              className="btn-primary"
              data-track="about-whatsapp"
            >
              Falar no WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
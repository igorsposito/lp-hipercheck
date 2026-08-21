import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <span className="badge-about">Conheça a Hiper Check</span>
          <h2>Sua parceira estratégica em inteligência e gestão de crédito</h2>
          <p>
            Como Distribuidor Autorizado Serasa Experian, oferecemos aos nossos clientes as mais avançadas soluções de consulta de crédito, gestão de inadimplência e análise de risco do mercado.
          </p>
          <p>
            Nosso compromisso é entregar agilidade, transparência e segurança para impulsionar o crescimento sustentável da sua empresa.
          </p>
          <div className="about-actions">
            <Link href="/sobre" className="btn-about">
              Saiba mais sobre nós
            </Link>
          </div>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <div className="highlight-number">+10 anos</div>
            <div className="highlight-label">De experiência no mercado de crédito</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">Oficial</div>
            <div className="highlight-label">Parceiro Serasa Experian</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">100%</div>
            <div className="highlight-label">Segurança e precisão nas consultas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
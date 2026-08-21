'use client';

import TechCanvas from './TechCanvas';

export default function SolutionsSection() {
  const whatsappNumber = '5577998381190';

  const solutions = [
    {
      title: 'Consulta Crednet',
      description: 'Análise ágil de crédito que identifica dívidas e restrições nas principais bases de negativação para avaliações seguras.',
      msg: 'Olá! Gostaria de saber mais sobre a solução Consulta Crednet.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      ),
    },
    {
      title: 'Negativação PEFIN',
      description: 'Recuperação eficiente de dívidas com envio de comunicado oficial ao devedor e inclusão na base nacional Serasa Experian.',
      msg: 'Olá! Gostaria de saber mais sobre a solução Negativação PEFIN.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      title: 'Infobusca',
      description: 'Qualificação e localização de dados cadastrais para encontrar clientes e enriquecer sua base de informações.',
      msg: 'Olá! Gostaria de saber mais sobre a solução Infobusca.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
    },
    {
      title: 'Saúde do Seu Negócio',
      description: 'Monitoramento 24h com alertas em tempo real via SMS e e-mail para proteger o CNPJ da sua empresa contra fraudes.',
      msg: 'Olá! Gostaria de saber mais sobre a solução Saúde do Seu Negócio.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      ),
    },
    {
      title: 'Agro Consulta & Score Agro',
      description: 'Análise de risco rural com parecer ambiental, dados do BNDES e probabilidade de inadimplência de produtores rurais.',
      msg: 'Olá! Gostaria de saber mais sobre a solução Agro Consulta e Score Agro.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
    },
    {
      title: 'Relatórios Básico e Avançado',
      description: 'Visão aprofundada para decisões de alto valor, concessão de crédito faturado, boletos e vendas parceladas.',
      msg: 'Olá! Gostaria de saber mais sobre os Relatórios Básico e Avançado.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
    },
  ];

  return (
    <section id="solucoes" className="solutions-section">
      <TechCanvas />

      <div className="solutions-container">
        <div className="section-header">
          <span className="badge">Nossas Soluções</span>
          <h2>Inteligência de crédito e dados Serasa Experian para o seu negócio</h2>
          <p>Da análise inicial ao monitoramento contínuo: ferramentas completas para conceder crédito com segurança e recuperar valores em atraso.</p>
        </div>

        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <div key={index} className="solution-card">
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(item.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Saber mais &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
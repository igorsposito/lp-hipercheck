'use client';

import Link from 'next/link';

export default function SobreNosPage() {
  const pilares = [
    {
      icon: '🛡️',
      title: 'Segurança & Inteligência',
      desc: 'Tecnologia de ponta e base de dados atualizada em tempo real para análises de crédito precisas.',
    },
    {
      icon: '🤝',
      title: 'Parceria Oficial',
      desc: 'Como Parceiro Autorizado Serasa Experian, entregamos soluções oficiais com total respaldo do mercado.',
    },
    {
      icon: '⚡',
      title: 'Agilidade Operacional',
      desc: 'Plataforma intuitiva e rápida para sua equipe tomar decisões e recuperar ativos sem burocracia.',
    },
  ];

  const diferenciais = [
    { number: '+15', label: 'Anos de experiência no mercado de crédito' },
    { number: '100%', label: 'Segurança e precisão nas consultas' },
    { number: '+30k', label: 'Consultas realizadas mensalmente' },
  ];

  return (
    <main className="sobre-page">
      {/* HERO SOBRE NÓS */}
      <section className="sobre-hero">
        <div className="sobre-dots-pattern" aria-hidden="true"></div>
        <div className="sobre-hero-container">
          <span className="badge-about">QUEM SOMOS</span>
          <h1>
            Conectamos a sua empresa à inteligência de crédito mais avançada do mercado.
          </h1>
          <p>
            Somos um Parceiro Autorizado Serasa Experian dedicado a transformar a gestão de risco, análise de crédito e recuperação de dívidas para negócios de todos os portes.
          </p>
        </div>
      </section>

      {/* DIFERENCIAIS EM DESTAQUE */}
      <section className="sobre-stats-bar">
        <div className="stats-bar-container">
          {diferenciais.map((item, index) => (
            <div key={index} className="stat-bar-item">
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

{/* MANIFESTO / NOSSA HISTÓRIA REESTRUTURADO */}
<section className="sobre-manifesto">
  <div className="manifesto-container">
    
    {/* COLUNA DA ESQUERDA: FOTO + TEXTOS */}
    <div className="manifesto-left">
      <div className="manifesto-img-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
          alt="Equipe Hiper Check em reunião" 
          className="manifesto-img"
        />
        <div className="manifesto-img-badge">
          <span>100% Foco em Soluções Corporativas</span>
        </div>
      </div>

      <div className="manifesto-text">
        <h2>Nossa Missão</h2>
        <p>
          Proteger o caixa das empresas brasileiras garantindo vendas a prazo mais seguras e uma gestão de inadimplência estratégica e eficiente.
        </p>

        <h2>Como Atuamos</h2>
        <p>
          Unimos tecnologia, atendimento humanizado e o maior banco de dados da América Latina para que seu negócio venda com tranquilidade e cresça de forma sustentável.
        </p>
      </div>
    </div>

    {/* COLUNA DA DIREITA: CARDS DE PILARES */}
    <div className="manifesto-cards">
      {pilares.map((pilar, index) => (
        <div key={index} className="pilar-card">
          <span className="pilar-icon">{pilar.icon}</span>
          <h3>{pilar.title}</h3>
          <p>{pilar.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ONDE ESTAMOS - SEÇÃO COM MAPA OFICIAL */}
<section className="sobre-localizacao">
  <div className="localizacao-container">
    <div className="localizacao-text">
      <span className="badge-local">NOSSO ENDEREÇO</span>
      <h2>Onde estamos localizados</h2>
      <p>
        Venha tomar um café conosco no Centro Comercial Pátio Brasil ou agende uma reunião presencial com nossos consultores.
      </p>

      <div className="endereco-info">
        <div className="info-item">
          <strong>📍 Endereço:</strong>
          <span>Centro Comercial Pátio Brasil</span>
          <span>Av. Frei Benjamin, 2427 - 2º Andar</span>
          <span>Bairro Brasil — Vitória da Conquista / BA</span>
          <span>CEP: 45051-075</span>
        </div>
        <div className="info-item">
          <strong>🕒 Horário de Atendimento:</strong>
          <span>Segunda a Sexta, das 08h às 18h</span>
        </div>
      </div>
    </div>

    <div className="mapa-wrapper">
      <iframe
        title="Localização da Hiper Check do Brasil"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8938!2d-40.8580!3d-14.8661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78201a4db28c11d%3A0x66f665d58517847f!2sHiper%20Check%20do%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
        width="100%"
        height="380"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

      {/* CALL TO ACTION FINAL */}
      <section className="sobre-cta">
        <div className="cta-container">
          <h2>Pronto para proteger o caixa da sua empresa?</h2>
          <p>Fale com um dos nossos especialistas e conheça a solução ideal para o seu perfil.</p>
          <Link href="/#contato" className="btn-cta">
            Falar com Especialista
          </Link>
        </div>
      </section>
    </main>
  );
}
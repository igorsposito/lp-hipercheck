'use client';

import { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { prefix: '+', value: 1600, label: 'Empresas atendidas', sub: 'Total de clientes atendidos' },
    { prefix: '+R$ ', value: 11239258, isCurrency: true, label: 'Recuperados', sub: 'Em valores de carteiras atendidas' },
    { prefix: '+', value: 30000, label: 'Consultas por mês', sub: 'Decisões de crédito mais seguras' },
    { prefix: '+', value: 15, suffix: ' anos', label: 'De mercado', sub: 'Experiência para apoiar seu negócio' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-header reveal">
        <span className="stats-badge">EMPRESAS PROTEGIDAS</span>
        <h2>
          Empresas que vendem a prazo usam a Hiper Check para <span className="highlight-pink">proteger o caixa.</span>
        </h2>
      </div>

      <div className="stats-container">
        {stats.map((item, index) => (
          <div key={index} className={`stat-item reveal reveal-delay-${index + 1}`}>
            <h3 className="stat-number">
              {item.prefix}
              {isVisible ? (
                <Counter target={item.value} isCurrency={item.isCurrency} />
              ) : (
                '0'
              )}
              {item.suffix}
            </h3>
            <p className="stat-label">{item.label}</p>
            <span className="stat-sub">{item.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Counter({ target, isCurrency }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  if (isCurrency) {
    return count.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  return count.toLocaleString('pt-BR');
}
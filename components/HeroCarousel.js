'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: 'INTELIGÊNCIA DE CRÉDITO',
      title: 'Proteja o caixa da sua empresa com decisões precisas',
      desc: 'Acesse o maior banco de dados da América Latina para analisar riscos, vender a prazo com segurança e reduzir a inadimplência.',
      primaryBtnText: 'Conhecer Soluções',
      primaryBtnLink: '#solucoes',
      secondaryBtnText: 'Falar com Consultor',
      secondaryBtnLink: 'https://wa.me/5577998381190',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',
    },
    {
      badge: 'RECUPERAÇÃO DE ATIVOS',
      title: 'Recupere dívidas e recupere o seu capital de giro',
      desc: 'Estratégias inteligentes e automatizadas de cobrança para renegociar débitos com eficiência e manter o relacionamento com seus clientes.',
      primaryBtnText: 'Recuperar Crédito',
      primaryBtnLink: '#solucoes',
      secondaryBtnText: 'Simular Negociação',
      secondaryBtnLink: 'https://wa.me/5577998381190',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    },
    {
      badge: 'PARCEIRO AUTORIZADO SERASA EXPERIAN',
      title: 'A tecnologia da maior referência do mercado no seu negócio',
      desc: 'Garanta suporte especializado, relatórios detalhados e as melhores soluções do ecossistema Serasa Experian para sua empresa.',
      primaryBtnText: 'Ver Certificações',
      primaryBtnLink: '/sobre-nos',
      secondaryBtnText: 'Atendimento B2B',
      secondaryBtnLink: 'https://wa.me/5577998381190',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    },
    {
      badge: 'GESTÃO E PREVENÇÃO DE RISCO',
      title: 'Monitore seus clientes e fornecedores em tempo real',
      desc: 'Receba alertas automáticos sobre alterações cadastrais, protestos e ações judiciais antes que eles afetem a sua operação.',
      primaryBtnText: 'Monitorar Agora',
      primaryBtnLink: '#solucoes',
      secondaryBtnText: 'Solicitar Demonstração',
      secondaryBtnLink: 'https://wa.me/5577998381190',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80',
    },
  ];

  // Troca automática de slide a cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide-item ${index === currentSlide ? 'active' : ''}`}
        >
          {/* IMAGEM DE FUNDO COM OVERLAY */}
          <div className="slide-bg-wrapper">
            <img src={slide.image} alt={slide.title} className="slide-bg-img" />
            <div className="slide-overlay"></div>
          </div>

          {/* CONTEÚDO CENTRALIZADO */}
          <div className="slide-content-container">
            <div className="slide-text-block">
              <span className="badge-hero">{slide.badge}</span>
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <div className="hero-buttons">
                <Link href={slide.primaryBtnLink} className="btn-primary">
                  {slide.primaryBtnText}
                </Link>
                <a
                  href={slide.secondaryBtnLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-hero"
                >
                  {slide.secondaryBtnText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* CONTROLES / SETAS */}
      <button className="slider-arrow arrow-left" onClick={prevSlide} aria-label="Slide Anterior">
        ❮
      </button>
      <button className="slider-arrow arrow-right" onClick={nextSlide} aria-label="Próximo Slide">
        ❯
      </button>

      {/* NAVEGAÇÃO POR PONTOS (DOTS) */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
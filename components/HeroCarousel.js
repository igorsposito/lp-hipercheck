'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: 'Parceiro Oficial Serasa Experian',
      title: 'Análises de crédito rápidas e seguras para o seu negócio',
      description: 'Tome decisões financeiras inteligentes com relatórios completos e soluções personalizadas para a sua empresa crescer sem riscos.',
      btnPrimaryText: 'Conhecer Soluções',
      btnPrimaryLink: '#solucoes',
      btnSecondaryText: 'Falar com Consultor',
      btnSecondaryLink: '#sobre',
      image: '/assets/img/hero-illustration-1.svg',
    },
    {
      badge: 'Gestão Descomplicada',
      title: 'Recupere crédito e evite inadimplência',
      description: 'Ferramentas avançadas de negativação e cobrança integradas em um único painel intuitivo e direto ao ponto.',
      btnPrimaryText: 'Ver Funcionalidades',
      btnPrimaryLink: '#solucoes',
      image: '/assets/img/hero-illustration-2.svg',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="inicio" className="hero-carousel">
      <div className="carousel-track-container">
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.4s ease-in-out', display: 'flex' }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide" style={{ minWidth: '100%' }}>
              <div className="hero-content">
                <div className="hero-text">
                  <span className="badge reveal">{slide.badge}</span>
                  <h1 className="reveal reveal-delay-1">{slide.title}</h1>
                  <p className="reveal reveal-delay-2">{slide.description}</p>
                  <div className="hero-buttons reveal reveal-delay-3">
                    <Link href={slide.btnPrimaryLink} className="btn-primary">
                      {slide.btnPrimaryText}
                    </Link>
                    {slide.btnSecondaryText && (
                      <Link href={slide.btnSecondaryLink} className="btn-secondary">
                        {slide.btnSecondaryText}
                      </Link>
                    )}
                  </div>
                </div>
                <div className="hero-image reveal reveal-delay-2">
                  <Image 
                    src={slide.image} 
                    alt={slide.title} 
                    width={500} 
                    height={400} 
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTROLES */}
      <button className="carousel-btn carousel-btn-left" onClick={prevSlide} aria-label="Slide anterior">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button className="carousel-btn carousel-btn-right" onClick={nextSlide} aria-label="Próximo slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      {/* INDICADORES */}
      <div className="carousel-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${currentSlide === index ? 'current-indicator' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
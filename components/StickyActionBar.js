'use client';

import { useState, useEffect } from 'react';

export default function StickyActionBar() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = '5577998381190';

  useEffect(() => {
    // 1. Controla a rolagem inicial para só mostrar a barra após 100px
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Se o topo do footer estiver aparecendo na tela, oculta a barra
      if (footerRect.top <= windowHeight) {
        setIsVisible(false);
      } else if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executa ao carregar para garantir o estado correto

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-action-bar ${isVisible ? 'visible' : ''}`}>
      <div className="sticky-bar-content">
        <span className="sticky-bar-text">Fale com nossos especialistas:</span>
        <div className="sticky-bar-buttons">
          <a href="#seja-cliente" className="btn-sticky btn-contratar">
            Contratar Agora
          </a>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de agendar uma demonstração das soluções da Hiper Check.')}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-sticky btn-demonstracao"
          >
            Agendar Demonstração
          </a>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de falar com um especialista da Hiper Check.')}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-sticky btn-whatsapp-bar"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Só roda no navegador para evitar erros de renderização no servidor
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie_consent');
      if (!consent) {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie_consent', 'accepted');
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          Utilizamos cookies para personalizar conteúdos e melhorar a sua experiência em nosso site. 
          Ao continuar navegando, você concorda com a nossa{' '}
          <Link href="/politica-de-cookies">Política de Cookies</Link> e{' '}
          <a href="https://www.serasaexperian.com.br/lgpd" target="_blank" rel="noopener noreferrer">
            LGPD
          </a>.
        </p>
        <button onClick={handleAccept} className="btn-accept-cookies">
          Aceitar e Continuar
        </button>
      </div>
    </div>
  );
}
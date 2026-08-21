'use client';

import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Anima apenas uma vez
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.15, // Dispara quando 15% do elemento aparece na tela
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal');

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
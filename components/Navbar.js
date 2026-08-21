'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header class="navbar-container">
      <nav class="navbar">
        <Link href="/" class="logo">
          <Image 
            src="/assets/img/logo.png" 
            alt="Hiper Check" 
            width={160} 
            height={40} 
            className="logo-img"
            priority
          />
        </Link>

        <ul class="nav-links">
          <li><Link href="/#inicio">Início</Link></li>
          <li><Link href="/#sobre">Sobre Nós</Link></li>
          <li><Link href="/#solucoes">Soluções</Link></li>
          <li><Link href="/#seja-cliente">Seja Nosso Cliente</Link></li>
        </ul>

        <div class="nav-actions">
          <div class={`dropdown ${isOpen ? 'active' : ''}`} ref={dropdownRef}>
            <button 
              class="btn-cliente" 
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
            >
              Área do Cliente
              <svg class="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div class="dropdown-menu">
              <a href="URL_DO_PORTAL_HIPER_CHECK" target="_blank" rel="noopener noreferrer" class="dropdown-item">
                <strong>Portal Hiper Check</strong>
                <span>Consultas e Negativações</span>
              </a>
              <a href="URL_DO_PORTAL_SERASA" target="_blank" rel="noopener noreferrer" class="dropdown-item">
                <strong>Portal Serasa Experian</strong>
                <span>Consultas</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
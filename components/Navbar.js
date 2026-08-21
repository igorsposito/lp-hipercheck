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
    <header className="navbar-container">
      <nav className="navbar">
        <Link href="/" className="logo">
          <Image 
            src="/assets/img/logo.png" 
            alt="Hiper Check" 
            width={160} 
            height={40} 
            className="logo-img"
            priority
          />
        </Link>

        <ul className="nav-links">
          <li><Link href="/#inicio">Início</Link></li>
          <li><Link href="/#sobre">Sobre Nós</Link></li>
          <li><Link href="/#solucoes">Soluções</Link></li>
          <li><Link href="/#seja-cliente">Seja Nosso Cliente</Link></li>
        </ul>

        <div className="nav-actions">
          <div className={`dropdown ${isOpen ? 'active' : ''}`} ref={dropdownRef}>
            <button 
              className="btn-cliente" 
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
            >
              Área do Cliente
              <svg className="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="dropdown-menu">
              <a href="https://hipercheck.com.br/cliente/users/login" target="_blank" rel="noopener noreferrer" className="dropdown-item">
                <strong>Portal Hiper Check</strong>
                <span>Consultas e Negativações</span>
              </a>
              <a href="https://empresas.serasaexperian.com.br/meus-produtos/login" target="_blank" rel="noopener noreferrer" className="dropdown-item">
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
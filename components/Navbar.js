
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre Nós", href: "/#sobre" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Seja Nosso Cliente", href: "/#seja-cliente" },
];

const portals = [
  {
    title: "Portal Hiper Check",
    description: "Consultas e Negativações",
    href: "https://hipercheck.com.br/cliente/users/login",
  },
  {
    title: "Portal Serasa Experian",
    description: "Consultas",
    href: "https://empresas.serasaexperian.com.br/meus-produtos/login",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    function handleOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }

      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setMobileOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setMobileOpen(false);
      }
    }

    function handleResize() {
      if (window.innerWidth > 1024) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("pointerdown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      setIsOpen(false);
    }
  }, [mobileOpen]);

  const closeMenus = () => {
    setMobileOpen(false);
    setIsOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`navbar-container ${mobileOpen ? "mobile-open" : ""}`}
    >
      <nav className="navbar" aria-label="Navegação principal">
        <Link
          href="/"
          className="logo"
          onClick={closeMenus}
          aria-label="Hiper Check - Página inicial"
        >
          <Image
            src="/assets/img/logo.png"
            alt="Hiper Check"
            width={160}
            height={40}
            className="logo-img"
            priority
          />
        </Link>

        <ul
          id="main-navigation"
          className={`nav-links ${mobileOpen ? "mobile-active" : ""}`}
        >
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeMenus}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`nav-actions ${mobileOpen ? "mobile-active" : ""}`}
        >
          <div
            ref={dropdownRef}
            className={`dropdown ${isOpen ? "active" : ""}`}
          >
            <button
              type="button"
              className="btn-cliente"
              onClick={() => setIsOpen((current) => !current)}
              aria-expanded={isOpen}
              aria-controls="client-dropdown"
            >
              Área do Cliente
              <svg
                className="chevron"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div id="client-dropdown" className="dropdown-menu">
              {portals.map((portal) => (
                <a
                  key={portal.href}
                  href={portal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                  tabIndex={isOpen ? 0 : -1}
                  onClick={closeMenus}
                >
                  <strong>{portal.title}</strong>
                  <span>{portal.description}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className={`mobile-menu-toggle ${
            mobileOpen ? "is-active" : ""
          }`}
          onClick={() => setMobileOpen((current) => !current)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}

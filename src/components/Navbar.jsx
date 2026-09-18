import React, { useState, useEffect } from 'react';
import './Navbar.css';

export const Navbar = ({ onOpenDownload }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-brand">
          <img src={`${import.meta.env.BASE_URL}unas.png`} alt="Escudo UNAS" className="navbar-logo" />
          <div className="navbar-brand-text">
            <span className="brand-title">UNAS LaTeX PPP</span>
            <span className="brand-subtitle">Facultad de Ingeniería en Informática y Sistemas</span>
          </div>
        </a>

        <nav className={`navbar-links ${mobileMenuOpen ? 'navbar-links-active' : ''}`}>
          <a href="#beneficios" onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-solid fa-sparkles"></i> Beneficios
          </a>
          <a href="#arquitectura" onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-solid fa-layer-group"></i> Estructura
          </a>
          <a href="#herramientas" onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-solid fa-screwdriver-wrench"></i> Herramientas
          </a>
          <a href="#guia" onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-solid fa-list-check"></i> Guía Rápida
          </a>
          <a href="#creditos" onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-solid fa-certificate"></i> Créditos
          </a>
        </nav>

        <div className="navbar-actions">
          <button className="btn btn-primary btn-sm" onClick={onOpenDownload}>
            <i className="fa-solid fa-download"></i>
            <span>Descargar</span>
          </button>
          <button 
            className="mobile-toggle"
            aria-label="Abrir menú de navegación"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import './Hero.css';

export const Hero = ({ onOpenDownload }) => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Universidad Nacional Agraria de la Selva • FIIS</span>
          </div>

          <h1 className="hero-title">
            La forma profesional y estandarizada de redactar tu{' '}
            <span className="hero-title-highlight">Informe de Prácticas</span>
          </h1>

          <p className="hero-description">
            Plantilla modular en LaTeX adaptada rigurosamente a las pautas y directrices de la UNAS. 
            Asegura márgenes reglamentarios, bibliografía APA y una arquitectura desacoplada bajo principios DRY sin lidiar con los desajustes de formato de Word.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary hero-btn" onClick={onOpenDownload}>
              <i className="fa-solid fa-download"></i>
              <span>Descargar Plantilla v1.0</span>
            </button>
            <a href="#guia" className="btn btn-secondary hero-btn">
              <i className="fa-solid fa-book-open"></i>
              <span>Guía de Inicio Rápido</span>
            </a>
          </div>

          <div className="hero-features-strip">
            <div className="feature-item">
              <i className="fa-solid fa-check"></i>
              <span>Motor LuaLaTeX</span>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-check"></i>
              <span>Márgenes UNAS 3-3-2-2 cm</span>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-check"></i>
              <span>Citas BibTeX APA</span>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-check"></i>
              <span>Script PowerShell en 1 clic</span>
            </div>
          </div>
        </div>

        <div className="hero-preview">
          <div className="paper-mockup">
            <div className="paper-header-strip">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="paper-filename">plantilla_ppp_unas.pdf</span>
            </div>

            <div className="paper-body">
              <div className="paper-institution">
                <p className="paper-univ">UNIVERSIDAD NACIONAL AGRARIA DE LA SELVA</p>
                <p className="paper-facultad">FACULTAD DE INGENIERÍA EN INFORMÁTICA Y SISTEMAS</p>
                <p className="paper-escuela">ESCUELA PROFESIONAL DE INGENIERÍA EN INFORMÁTICA Y SISTEMAS</p>
              </div>

              <div className="paper-logos-row">
                <img src="/unas.png" alt="UNAS" className="paper-logo" />
                <img src="/fiis_unas.jpg" alt="FIIS" className="paper-logo" />
              </div>

              <div className="paper-title-block">
                <span className="paper-type">INFORME DE PRÁCTICAS PREPROFESIONALES</span>
                <p className="paper-thesis-title">
                  "DESARROLLO DE UN SISTEMA DE INFORMACIÓN WEB PARA LA GESTIÓN OPERATIVA"
                </p>
              </div>

              <div className="paper-meta-block">
                <div className="meta-line">
                  <span className="meta-label">Presentado por:</span>
                  <span className="meta-val">Estudiante Practicante</span>
                </div>
                <div className="meta-line">
                  <span className="meta-label">Asesor:</span>
                  <span className="meta-val">Docente Asesor, Mg.</span>
                </div>
                <div className="meta-line">
                  <span className="meta-label">Lugar:</span>
                  <span className="meta-val">Institución Receptora S.A.C.</span>
                </div>
              </div>

              <div className="paper-footer">
                <span>TINGO MARÍA – PERÚ</span>
              </div>
            </div>

            <div className="paper-badge-floating">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <strong>Validado con LuaLaTeX</strong>
                <p>Salida limpia en build/ y timestamp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

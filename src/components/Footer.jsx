import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer id="creditos" className="footer-section">
      {/* Sección de Créditos y Reconocimientos */}
      <div className="container">
        <div className="credits-card">
          <div className="credits-header">
            <div className="credits-badge">
              <i className="fa-solid fa-certificate"></i>
              <span>Reconocimientos Institucionales y Comunitarios</span>
            </div>
            <h3 className="credits-title">Créditos del Proyecto</h3>
          </div>

          <div className="credits-grid">
            <div className="credit-box">
              <div className="credit-icon">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <div className="credit-text">
                <h4>Marco Institucional y Normativo</h4>
                <p>
                  Estructurado en conformidad con el reglamento de Prácticas Preprofesionales de la{' '}
                  <strong>Universidad Nacional Agraria de la Selva (UNAS)</strong> y las directrices metodológicas de la{' '}
                  <strong>Facultad de Ingeniería en Informática y Sistemas (FIIS)</strong>.
                </p>
              </div>
            </div>

            <div className="credit-box">
              <div className="credit-icon">
                <i className="fa-solid fa-code-fork"></i>
              </div>
              <div className="credit-text">
                <h4>Desarrollo y Mantenimiento</h4>
                <p>
                  Diseñado e implementado como una solución técnica de código abierto para facilitar la redacción académica
                  y la estandarización tipográfica de los estudiantes y tesistas de la universidad.
                </p>
              </div>
            </div>

            <div className="credit-box">
              <div className="credit-icon">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="credit-text">
                <h4>Ecosistema de Código Abierto</h4>
                <p>
                  Agradecimiento especial a la comunidad y desarrolladores de <strong>LuaTeX</strong>,{' '}
                  <strong>LaTeX Project</strong>, <strong>BibTeX</strong>, <strong>MiKTeX</strong> y{' '}
                  <strong>Font Awesome</strong> por proveer herramientas de software libre de clase mundial.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior del pie de página */}
        <div className="footer-bottom">
          <div className="footer-brand-wrap">
            <img src="/unas.png" alt="UNAS" className="footer-logo" />
            <div>
              <span className="footer-univ">Universidad Nacional Agraria de la Selva</span>
              <p className="footer-sub">Tingo María, Huánuco – Perú</p>
            </div>
          </div>

          <div className="footer-links">
            <a href="https://www.unas.edu.pe" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-globe"></i> Portal UNAS
            </a>
            <a href="https://fiis.unas.edu.pe" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-graduation-cap"></i> Portal FIIS
            </a>
            <a href="https://github.com/fabrizzio-sr/unas_latex_ppp" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i> Repositorio GitHub
            </a>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>
            Plantilla académica comunitaria e independiente. Las marcas, sellos y nombres institucionales pertenecen a la
            Universidad Nacional Agraria de la Selva y son utilizados con fines educativos y de identificación académica.
          </p>
        </div>
      </div>
    </footer>
  );
};

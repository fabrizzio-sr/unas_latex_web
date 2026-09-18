import React from 'react';
import { toolsData } from '../data/toolsData';
import './Toolchain.css';

export const Toolchain = () => {
  return (
    <section id="herramientas" className="toolchain-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <i className="fa-solid fa-screwdriver-wrench"></i>
            <span>Requisitos Técnicos</span>
          </div>
          <h2 className="section-title">Herramientas Necesarias para Trabajar</h2>
          <p className="section-description">
            Configura tu entorno en pocos minutos con el software estándar recomendado para redactar y compilar
            tu informe con el motor LuaLaTeX.
          </p>
        </div>

        <div className="toolchain-grid">
          {toolsData.map((tool) => (
            <div key={tool.id} className="tool-card">
              <div className="tool-header">
                <div className="tool-icon-wrapper">
                  <i className={tool.icon}></i>
                </div>
                <div className="tool-titles">
                  <span className="tool-category">{tool.category}</span>
                  <h3 className="tool-name">{tool.name}</h3>
                </div>
              </div>

              <p className="tool-desc">{tool.description}</p>

              <div className="tool-footer">
                <div className="tool-recommendation">
                  <i className="fa-solid fa-lightbulb"></i>
                  <span>{tool.recommendation}</span>
                </div>

                {tool.link ? (
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tool-btn-link"
                  >
                    <span>{tool.linkText}</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                ) : (
                  <span className="tool-badge-included">
                    <i className="fa-solid fa-check"></i> {tool.linkText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

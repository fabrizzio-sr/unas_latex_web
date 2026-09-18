import React from 'react';
import { stepsData } from '../data/stepsData';
import './QuickStart.css';

export const QuickStart = ({ onOpenDownload }) => {
  return (
    <section id="guia" className="quickstart-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <i className="fa-solid fa-list-check"></i>
            <span>Flujo de Trabajo</span>
          </div>
          <h2 className="section-title">Cómo Elaborar tu Informe en 4 Pasos</h2>
          <p className="section-description">
            Sigue este proceso estructurado para configurar, redactar y generar tu documento final en formato PDF
            sin complicaciones.
          </p>
        </div>

        <div className="steps-container">
          {stepsData.map((step, index) => (
            <div key={step.stepNumber} className="step-card">
              <div className="step-number-badge">
                <span>{step.stepNumber}</span>
              </div>

              <div className="step-content">
                <div className="step-icon-wrap">
                  <i className={step.icon}></i>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <span className="step-file">
                  <i className="fa-regular fa-file"></i> {step.file}
                </span>
                <p className="step-summary">{step.summary}</p>

                <div className="step-tip-box">
                  <i className="fa-solid fa-circle-info"></i>
                  <span>{step.tip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Compilación Rápida */}
        <div className="compile-banner">
          <div className="compile-banner-text">
            <h3>
              <i className="fa-solid fa-bolt"></i> Compilación en un Solo Clic
            </h3>
            <p>
              Olvídate de comandos largos y parámetros complejos en consola. El script de PowerShell automatiza todo el ciclo:
            </p>
            <div className="terminal-preview">
              <span className="terminal-prompt">&gt;</span>
              <code>.\compile.ps1</code>
            </div>
          </div>

          <div className="compile-banner-action">
            <button className="btn btn-primary" onClick={onOpenDownload}>
              <i className="fa-solid fa-download"></i>
              <span>Descargar Plantilla</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

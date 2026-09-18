import React, { useState } from 'react';
import { codeSnippets } from '../data/codeSnippets';
import './Architecture.css';

export const Architecture = () => {
  const [activeTab, setActiveTab] = useState('metadata');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'metadata', label: 'config/metadata.tex', icon: 'fa-solid fa-sliders' },
    { id: 'opciones', label: 'config/opciones.tex', icon: 'fa-solid fa-toggle-on' },
    { id: 'main', label: 'main.tex', icon: 'fa-solid fa-file-code' },
    { id: 'compile', label: 'compile.ps1', icon: 'fa-solid fa-terminal' }
  ];

  const currentSnippet = codeSnippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="arquitectura" className="architecture-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <i className="fa-solid fa-sitemap"></i>
            <span>Diseño Modular</span>
          </div>
          <h2 className="section-title">Estructura Desacoplada y Principios DRY</h2>
          <p className="section-description">
            Examina la anatomía de la plantilla: los formatos, la carátula y los márgenes están encapsulados. 
            El usuario solo interactúa con archivos de configuración declarativos y limpios.
          </p>
        </div>

        <div className="code-viewer-container">
          <div className="code-viewer-header">
            <div className="code-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`code-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <i className={tab.icon}></i>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <button className="copy-code-btn" onClick={handleCopy}>
              <i className={`fa-solid ${copied ? 'fa-check text-green' : 'fa-copy'}`}></i>
              <span>{copied ? 'Copiado' : 'Copiar'}</span>
            </button>
          </div>

          <div className="code-viewer-body">
            <div className="code-line-numbers">
              {currentSnippet.code.split('\n').map((_, index) => (
                <span key={index}>{index + 1}</span>
              ))}
            </div>
            <pre className="code-content">
              <code>{currentSnippet.code}</code>
            </pre>
          </div>

          <div className="code-viewer-footer">
            <div className="file-pill">
              <i className="fa-solid fa-folder-open"></i>
              <span>{currentSnippet.filename}</span>
            </div>
            <span className="file-purpose">
              {activeTab === 'metadata' && 'Única fuente de verdad para datos personales e institucionales'}
              {activeTab === 'opciones' && 'Controla la visibilidad de actas y dictámenes con true/false'}
              {activeTab === 'main' && 'Documento orquestador de menos de 40 líneas declarativas'}
              {activeTab === 'compile' && 'Automatiza compilación LuaLaTeX y aísla la salida en build/'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

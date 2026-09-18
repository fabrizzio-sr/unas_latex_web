import React, { useState } from 'react';
import './DownloadModal.css';

export const DownloadModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const cloneCommand = 'git clone https://github.com/fabrzzo/informe_ppp.git';

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="modal-icon">
              <i className="fa-solid fa-download"></i>
            </div>
            <div>
              <h3 className="modal-title">Descarga de la Plantilla</h3>
              <p className="modal-subtitle">Versión 1.0 • Motor LuaLaTeX</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar ventana">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-info-box">
            <i className="fa-solid fa-circle-info"></i>
            <div>
              <strong>Acceso a la Plantilla</strong>
              <p>
                La plantilla se distribuye a través del repositorio de código abierto. Puedes clonarla mediante Git o
                copiar directamente la carpeta 'plantilla/' en tu entorno local.
              </p>
            </div>
          </div>

          <div className="modal-command-section">
            <label className="command-label">Comando de Clonación Rápida con Git:</label>
            <div className="command-box">
              <code>{cloneCommand}</code>
              <button className="command-copy-btn" onClick={handleCopy}>
                <i className={`fa-solid ${copied ? 'fa-check text-green' : 'fa-copy'}`}></i>
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          <div className="modal-instructions">
            <h4>
              <i className="fa-solid fa-list-ol"></i> Instrucciones de Inicio:
            </h4>
            <ol>
              <li>
                <strong>Abrir la carpeta:</strong> Abre la carpeta 'plantilla/' en Visual Studio Code o tu editor preferido.
              </li>
              <li>
                <strong>Personalizar:</strong> Edita 'config/metadata.tex' con tus datos y 'config/opciones.tex' para tus secciones.
              </li>
              <li>
                <strong>Compilar:</strong> Abre una terminal de PowerShell y ejecuta <code>.\compile.ps1</code>.
              </li>
            </ol>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            <span>Cerrar</span>
          </button>
          <a 
            href="https://github.com/fabrzzo/informe_ppp" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm"
          >
            <i className="fa-brands fa-github"></i>
            <span>Ver en GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

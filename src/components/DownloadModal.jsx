import React from 'react';
import './DownloadModal.css';

export const DownloadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const repoUrl = 'https://github.com/fabrizzio-sr/unas_latex_ppp';
  const latestReleaseUrl = 'https://github.com/fabrizzio-sr/unas_latex_ppp/releases/latest';

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
              <p className="modal-subtitle">Versión Oficial • Motor LuaLaTeX</p>
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
              <strong>Distribución Oficial</strong>
              <p>
                La plantilla se distribuye empaquetada a través de los releases oficiales en GitHub.
                Descarga el archivo comprimido (.zip) listo para usar, sin necesidad de comandos de Git.
              </p>
            </div>
          </div>

          <div className="modal-release-section">
            <a
              href={latestReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="release-download-card"
            >
              <div className="release-card-content">
                <div className="release-badge">
                  <i className="fa-solid fa-tag"></i>
                  <span>Último Release</span>
                </div>
                <div className="release-title-row">
                  <span className="release-title">Descargar Plantilla (.zip)</span>
                  <span className="release-subtext">Código fuente limpio, scripts y ejemplos listos para compilar</span>
                </div>
              </div>
              <div className="release-action-btn">
                <i className="fa-solid fa-arrow-down"></i>
              </div>
            </a>
          </div>

          <div className="modal-instructions">
            <h4>
              <i className="fa-solid fa-list-ol"></i> Instrucciones de Inicio:
            </h4>
            <ol>
              <li>
                <strong>Descargar y descomprimir:</strong> Obtén el archivo ZIP del último release y extráelo en tu computadora.
              </li>
              <li>
                <strong>Abrir el proyecto:</strong> Abre la carpeta descomprimida en Visual Studio Code o tu editor preferido.
              </li>
              <li>
                <strong>Personalizar:</strong> Edita <code>config/metadata.tex</code> con tus datos y <code>config/opciones.tex</code> para tus secciones.
              </li>
              <li>
                <strong>Compilar:</strong> Abre una terminal de PowerShell en la raíz del proyecto y ejecuta <code>.\compile.ps1</code>.
              </li>
            </ol>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            <span>Cerrar</span>
          </button>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <i className="fa-brands fa-github"></i>
            <span>Ver Repositorio</span>
          </a>
          <a
            href={latestReleaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <i className="fa-solid fa-download"></i>
            <span>Ir al Release</span>
          </a>
        </div>
      </div>
    </div>
  );
};


import React from 'react';
import { benefitsData } from '../data/benefitsData';
import './Benefits.css';

export const Benefits = () => {
  return (
    <section id="beneficios" className="benefits-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Ventajas Académicas</span>
          </div>
          <h2 className="section-title">¿Por qué redactar tu informe en LaTeX?</h2>
          <p className="section-description">
            Descubre por qué las principales universidades del mundo y la comunidad científica adoptan LaTeX
            para garantizar rigor, estética y mantenibilidad técnica.
          </p>
        </div>

        <div className="benefits-grid">
          {benefitsData.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-card-header">
                <div className="benefit-icon-box">
                  <i className={benefit.icon}></i>
                </div>
                <span className="benefit-tag">{benefit.tag}</span>
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Comparativa LaTeX vs Editores Tradicionales */}
        <div className="comparison-box">
          <div className="comparison-header">
            <h3 className="comparison-title">
              <i className="fa-solid fa-scale-balanced"></i>
              Comparativa Técnica: LaTeX frente a Procesadores Convencionales
            </h3>
          </div>

          <div className="comparison-grid">
            <div className="comparison-col comparison-latex">
              <div className="col-header">
                <i className="fa-solid fa-code"></i>
                <span>Enfoque con Plantilla LaTeX UNAS</span>
              </div>
              <ul className="comparison-list">
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Separación total entre presentación y contenido (DRY).</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Índices, figuras, tablas y apéndices numerados de forma matemática.</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Referencias bibliográficas APA gestionadas mediante BibTeX.</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Márgenes y formatos protegidos contra desajustes accidentales.</span>
                </li>
              </ul>
            </div>

            <div className="comparison-col comparison-word">
              <div className="col-header">
                <i className="fa-solid fa-file-word"></i>
                <span>Enfoque con Editores Tradicionales (Word)</span>
              </div>
              <ul className="comparison-list">
                <li>
                  <i className="fa-solid fa-circle-xmark"></i>
                  <span>Formato acoplado; mover una imagen altera párrafos enteros.</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-xmark"></i>
                  <span>Riesgo constante de descuadre en listas de tablas y figuras.</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-xmark"></i>
                  <span>Gestión de bibliografía engorrosa o propensa a errores manuales.</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-xmark"></i>
                  <span>Archivos binarios difíciles de versionar o fusionar con Git.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

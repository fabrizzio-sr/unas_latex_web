// Fragmentos de código representativos para el visor interactivo
export const codeSnippets = {
  metadata: {
    filename: "config/metadata.tex",
    language: "latex",
    code: `% --- Metadatos del Practicante y Entidad Receptora ---
\\universidad{UNIVERSIDAD NACIONAL AGRARIA DE LA SELVA}
\\facultad{FACULTAD DE INGENIERÍA EN INFORMÁTICA Y SISTEMAS}
\\escuela{ESCUELA PROFESIONAL DE INGENIERÍA EN INFORMÁTICA Y SISTEMAS}

\\titulo{DESARROLLO DE UN SISTEMA WEB PARA LA GESTIÓN DE PROCESOS}
\\autor{Nombres y Apellidos del Estudiante}
\\asesor{Ing. Nombre del Asesor, Mg.}
\\empresa{EMPRESA O INSTITUCIÓN RECEPTORA S.A.C.}
\\periodo{01/01/2026 al 31/03/2026}
\\ciudad{TINGO MARÍA}
\\pais{PERÚ}
\\anio{2026}`
  },
  opciones: {
    filename: "config/opciones.tex",
    language: "latex",
    code: `% --- Control de Visibilidad de Secciones Preliminares ---
\\newbool{mostrarQR}              \\setbool{mostrarQR}{false}
\\newbool{mostrarDictamen}        \\setbool{mostrarDictamen}{true}
\\newbool{mostrarConstancia}      \\setbool{mostrarConstancia}{true}
\\newbool{mostrarActa}            \\setbool{mostrarActa}{false}  % Habilitar post-sustentación
\\newbool{mostrarDedicatoria}     \\setbool{mostrarDedicatoria}{true}
\\newbool{mostrarAgradecimientos} \\setbool{mostrarAgradecimientos}{true}
\\newbool{mostrarIndiceTablas}    \\setbool{mostrarIndiceTablas}{true}
\\newbool{mostrarIndiceFiguras}   \\setbool{mostrarIndiceFiguras}{true}`
  },
  main: {
    filename: "main.tex",
    language: "latex",
    code: `% !TEX program = lualatex
\\documentclass{unas-ppp}

\\input{config/metadata}
\\input{config/opciones}

\\begin{document}
\\makecaratula             % Portada reglamentaria UNAS

\\iniciarpreliminares
\\input{preliminares/01_dictamen}
\\input{preliminares/02_constancia}
\\input{preliminares/06_resumen}
\\makepreliminares          % Índices de contenido, tablas y figuras

\\iniciarcuerpo             % Inicia paginación arábiga en página 1
\\input{capitulos/01_aspectos_generales}
\\input{capitulos/02_marco_teorico}
\\input{capitulos/03_actividades_realizadas}
\\input{capitulos/04_conclusiones_recomendaciones}

\\clearpage
\\bibliographystyle{apalike}
\\bibliography{bib/referencias}

\\iniciaranexos
\\input{anexos/01_anexos}
\\end{document}`
  },
  compile: {
    filename: "compile.ps1",
    language: "powershell",
    code: `# Compilación en 1 clic con aislamiento en build/
.\\compile.ps1

# Limpieza total de archivos auxiliares temporales
.\\compile.ps1 -Clean

# Modo observación activa (recompila al guardar cambios)
.\\compile.ps1 -Watch`
  }
};

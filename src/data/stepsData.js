// Guía paso a paso para utilizar la plantilla
// Sin emojis - Utiliza exclusivamente clases de Font Awesome

export const stepsData = [
  {
    stepNumber: "01",
    icon: "fa-solid fa-sliders",
    title: "Configuración de Metadatos",
    file: "config/metadata.tex",
    summary:
      "Abre el archivo 'config/metadata.tex' e ingresa tus nombres, el de tu asesor, la empresa receptora, el título del proyecto y el periodo de ejecución.",
    tip: "Esta es la única fuente de verdad; todos los datos se reflejarán automáticamente en la carátula y el documento."
  },
  {
    stepNumber: "02",
    icon: "fa-solid fa-toggle-on",
    title: "Activación de Componentes",
    file: "config/opciones.tex",
    summary:
      "Ajusta los interruptores booleanos con 'true' o 'false' para activar o silenciar páginas preliminares (dictamen del asesor, constancia de prácticas o acta de sustentación).",
    tip: "Durante la elaboración mantén el acta en 'false'; actívala tras sustentar tu informe ante el jurado."
  },
  {
    stepNumber: "03",
    icon: "fa-solid fa-file-lines",
    title: "Redacción de Capítulos",
    file: "capitulos/*.tex",
    summary:
      "Escribe tu contenido en los 4 capítulos reglamentarios. Puedes apoyarte en los ejemplos provistos de tablas académicas (booktabs), figuras nativas y bloques de código.",
    tip: "Utiliza las citas \\citep{clave} y referencias \\refanexo{etiqueta} para mantener vínculos automáticos."
  },
  {
    stepNumber: "04",
    icon: "fa-solid fa-play",
    title: "Compilación Automatizada",
    file: ".\\compile.ps1",
    summary:
      "Ejecuta '.\\compile.ps1' desde tu terminal PowerShell. El script compila con LuaLaTeX y BibTeX, confina los archivos auxiliares en 'build/' y copia el PDF a la raíz.",
    tip: "Se generará un archivo 'informe_ppp_YYYYMMDD_HHMMSS.pdf' versionado y un 'main.pdf' sincronizado."
  }
];

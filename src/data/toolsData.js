// Herramientas necesarias para compilar y trabajar con la plantilla
// Sin emojis - Utiliza exclusivamente clases de Font Awesome

export const toolsData = [
  {
    id: "compiler",
    name: "MiKTeX o TeX Live",
    category: "Distribución TeX",
    icon: "fa-solid fa-microchip",
    description:
      "Distribución base indispensable para procesar documentos LaTeX. Debe incluir el motor LuaLaTeX para soporte nativo de fuentes del sistema y microtipografía.",
    recommendation: "Instalar con opción de descarga automática de paquetes.",
    link: "https://miktex.org/download",
    linkText: "Descargar MiKTeX"
  },
  {
    id: "editor-vscode",
    name: "Visual Studio Code + LaTeX Workshop",
    category: "Editor Recomendado",
    icon: "fa-solid fa-code",
    description:
      "Entorno de desarrollo moderno con resaltado de sintaxis, autocompletado de comandos, explorador de estructura y visor PDF sincronizado mediante SyncTeX.",
    recommendation: "Instalar la extensión recomendada LaTeX Workshop de James Yu.",
    link: "https://code.visualstudio.com/",
    linkText: "Obtener VS Code"
  },
  {
    id: "editor-texstudio",
    name: "TeXstudio (Alternativa)",
    category: "Editor Especializado",
    icon: "fa-solid fa-laptop-code",
    description:
      "IDE especializado y liviano para LaTeX. Cuenta con visor PDF integrado, asistente de tablas y configuración sencilla para compilar con LuaLaTeX (F5).",
    recommendation: "Configurar en Opciones -> Construir -> Compilador por defecto: LuaLaTeX.",
    link: "https://www.texstudio.org/",
    linkText: "Descargar TeXstudio"
  },
  {
    id: "font",
    name: "Times New Roman",
    category: "Tipografía Institucional",
    icon: "fa-solid fa-font",
    description:
      "Fuente tipográfica requerida por la normativa de la UNAS. Se encuentra preinstalada en Windows y es cargada de forma nativa por el motor LuaLaTeX mediante el paquete fontspec.",
    recommendation: "Verificar disponibilidad en el sistema operativo.",
    link: null,
    linkText: "Incluida en el SO"
  },
  {
    id: "shell",
    name: "PowerShell",
    category: "Automatización",
    icon: "fa-solid fa-terminal",
    description:
      "Permite ejecutar el script 'compile.ps1', el cual orquesta las pasadas de LuaLaTeX y BibTeX, aísla la salida en la subcarpeta 'build/' y genera el archivo con marca de tiempo.",
    recommendation: "Ejecutar desde el directorio raíz de la plantilla.",
    link: null,
    linkText: "Integrado en Windows"
  },
  {
    id: "git",
    name: "Git y GitHub",
    category: "Control de Versiones",
    icon: "fa-brands fa-git-alt",
    description:
      "Herramienta recomendada para versionar el informe, llevar control de revisiones con tu docente asesor y respaldar los avances en la nube.",
    recommendation: "Utilizar el archivo .gitignore incluido en la plantilla.",
    link: "https://git-scm.com/",
    linkText: "Descargar Git"
  }
];

/* ==========================================================
   CONFIGURACIÓN DEL NEGOCIO  —  SOLO EDITA ESTE ARCHIVO
   ----------------------------------------------------------
   - Cambia los textos entre comillas "..."
   - Si no usas algo, déjalo vacío: ""  (se oculta solo)
   - El número de mesa sale del link: ...?mesa=07
   ========================================================== */

window.CONFIG = {

  // ---- Datos del negocio ----
  negocio: "HC Customs",
  eslogan: "Fabricación · Soldadura · Electricidad · A/C",
  iniciales: "HC",               // se muestra si no hay logo
  logo: "",                      // link a una imagen (opcional), ej: "logo.png"
  colorAcento: "#E8B04A",        // color principal (código hex)

  // ---- WiFi ----
  wifi: {
    red: "HC_Customs_Invitados",
    clave: "bienvenido2026",
    seguridad: "WPA"             // "WPA", "WEP" o "nopass" (sin clave)
  },

  // ---- WhatsApp (número con código de país, sin + ni espacios) ----
  whatsapp: {
    numero: "50497483817",
    mensaje: "¡Hola! Estoy en la mesa {mesa} y quisiera hacer un pedido."
  },

  // ---- Menú ----
  // Opción 1: link a un PDF o página del menú (si lo pones, se usa este)
  menuLink: "",
  // Opción 2: menú escrito aquí mismo
  menuTitulo: "Nuestros servicios",
  menuSubtitulo: "Servicios y precios",   // texto pequeño debajo del botón
  menu: [
    {
      categoria: "Fabricación",
      items: [
        { nombre: "Estructuras metálicas", detalle: "Portones, techos, escaleras", precio: "Cotizar" },
        { nombre: "Muebles a medida", detalle: "Diseño y fabricación", precio: "Cotizar" }
      ]
    },
    {
      categoria: "Servicios técnicos",
      items: [
        { nombre: "Mantenimiento de A/C", detalle: "Limpieza y revisión de mini-split", precio: "Desde L 800" },
        { nombre: "Instalaciones eléctricas", detalle: "Residencial y comercial", precio: "Cotizar" },
        { nombre: "Placas NFC + QR", detalle: "Para mesas de restaurante", precio: "Cotizar" }
      ]
    }
  ],

  // ---- Redes sociales (deja "" las que no tengas) ----
  redes: {
    instagram: "",
    facebook: "",
    tiktok: "",
    web: ""
  },

  // ---- Extras (opcionales) ----
  telefono: "+504 9748-3817",
  correo: "hc.customshn@gmail.com",
  direccion: "San Pedro Sula, Honduras",
  mapa: "",                      // link de Google Maps
  horario: "Lun a Sáb · 8:00 a.m. – 6:00 p.m.",

  // Pie de página
  creditos: "Hecho por HC Customs"
};

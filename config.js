/* ==========================================================
   CONFIGURACIÓN DEL RESTAURANTE  —  SOLO EDITA ESTE ARCHIVO
   ----------------------------------------------------------
   - Cambia los textos entre comillas "..."
   - Los precios van SIN comillas, solo el número: precio: 180
   - Si no usas algo, déjalo vacío: ""  (se oculta solo)
   - etiqueta (opcional): "Popular", "Picante", "Nuevo", "Recomendado"
   - El número de mesa sale del link: ...?mesa=07
   ========================================================== */

window.CONFIG = {

  // ---- Datos del restaurante ----
  negocio: "Cevichería La Marea",
  eslogan: "Mariscos frescos · Sabor del Caribe",
  iniciales: "LM",               // se muestra si no hay logo
  logo: "",                      // link a una imagen (opcional), ej: "logo.png"
  colorAcento: "#0E8A8A",        // color principal (código hex)
  moneda: "L",

  // ---- WiFi ----
  wifi: {
    red: "LaMarea_Clientes",
    clave: "ceviche2026",
    seguridad: "WPA"             // "WPA", "WEP" o "nopass" (sin clave)
  },

  // ---- WhatsApp: a este número llegan los pedidos ----
  whatsapp: {
    numero: "50487973798"        // con código de país, sin + ni espacios
  },

  // ---- Menú ----
  menuLink: "",                  // si pones un link a PDF, se usa ese en vez del menú de abajo
  menuTitulo: "Menú",
  menuSubtitulo: "Arma tu pedido y envíalo por WhatsApp",
  menu: [
    {
      categoria: "Ceviches",
      items: [
        { nombre: "Ceviche de pescado", detalle: "Pescado blanco, limón, cebolla morada, cilantro y chile", precio: 180, etiqueta: "Popular" },
        { nombre: "Ceviche de camarón", detalle: "Camarón fresco en limón con pico de gallo", precio: 240, etiqueta: "Popular" },
        { nombre: "Ceviche mixto", detalle: "Pescado, camarón y pulpo", precio: 290 },
        { nombre: "Ceviche de caracol", detalle: "Caracol del Caribe, limón y cebolla", precio: 310 },
        { nombre: "Ceviche de concha negra", detalle: "Concha negra, tomate, cebolla y chile", precio: 280 },
        { nombre: "Aguachile verde", detalle: "Camarón en salsa de chile verde, pepino y limón", precio: 260, etiqueta: "Picante" }
      ]
    },
    {
      categoria: "Platos fuertes",
      items: [
        { nombre: "Sopa de caracol", detalle: "Con leche de coco, yuca, plátano y arroz", precio: 320, etiqueta: "Recomendado" },
        { nombre: "Pescado frito entero", detalle: "Con tajadas, ensalada y chismol", precio: 350 },
        { nombre: "Camarones al ajillo", detalle: "Con arroz con coco y ensalada", precio: 330 },
        { nombre: "Tapado de mariscos", detalle: "Sopa garífuna de mariscos con coco y plátano", precio: 380 }
      ]
    },
    {
      categoria: "Entradas",
      items: [
        { nombre: "Cóctel de camarón", detalle: "Salsa de tomate, aguacate y galleta", precio: 220 },
        { nombre: "Leche de tigre", detalle: "El jugo del ceviche, con trocitos de pescado", precio: 95, etiqueta: "Picante" },
        { nombre: "Tostones con chismol", detalle: "Plátano verde frito con pico de gallo", precio: 90 }
      ]
    },
    {
      categoria: "Extras",
      items: [
        { nombre: "Tajadas de plátano", detalle: "", precio: 40 },
        { nombre: "Tostones", detalle: "", precio: 50 },
        { nombre: "Arroz con coco", detalle: "", precio: 45 },
        { nombre: "Aguacate", detalle: "", precio: 35 },
        { nombre: "Galletas soda", detalle: "", precio: 15 },
        { nombre: "Salsa picante de la casa", detalle: "", precio: 10 }
      ]
    },
    {
      categoria: "Refrescos naturales",
      items: [
        { nombre: "Limonada con soda", detalle: "Limón natural con agua mineral", precio: 55, etiqueta: "Popular" },
        { nombre: "Limonada de coco", detalle: "Cremosa y bien fría", precio: 65 },
        { nombre: "Maracuyá con soda", detalle: "", precio: 55 },
        { nombre: "Horchata", detalle: "", precio: 45 },
        { nombre: "Jamaica", detalle: "", precio: 45 },
        { nombre: "Tamarindo", detalle: "", precio: 45 },
        { nombre: "Gaseosa en lata", detalle: "", precio: 35 },
        { nombre: "Agua purificada", detalle: "", precio: 25 }
      ]
    },
    {
      categoria: "Bebidas con alcohol",
      nota: "Solo para mayores de 18 años",
      items: [
        { nombre: "Cerveza nacional", detalle: "", precio: 55 },
        { nombre: "Cerveza importada", detalle: "", precio: 75 },
        { nombre: "Michelada", detalle: "Cerveza con limón, sal y salsas", precio: 85 },
        { nombre: "Michelada con camarones", detalle: "Escarchada con camarón y chamoy", precio: 140, etiqueta: "Nuevo" },
        { nombre: "Mojito", detalle: "", precio: 120 },
        { nombre: "Margarita", detalle: "", precio: 130 },
        { nombre: "Piña colada", detalle: "", precio: 130 }
      ]
    },
    {
      categoria: "Postres",
      items: [
        { nombre: "Tres leches", detalle: "", precio: 75 },
        { nombre: "Flan de coco", detalle: "", precio: 65 }
      ]
    }
  ],

  // ---- Redes sociales (deja "" las que no tengas) ----
  redes: {
    instagram: "https://www.instagram.com/hc.customshn/",
    facebook: "",
    tiktok: "",
    web: ""
  },

  // ---- Extras (opcionales) ----
  telefono: "+504 8797-3798",
  correo: "",
  direccion: "San Pedro Sula, Cortés",
  mapa: "",                      // link de Google Maps
  horario: "Mar a Dom · 10:00 a.m. – 8:00 p.m.",

  // Pie de página
  creditos: "Menú digital por HC Customs"
};

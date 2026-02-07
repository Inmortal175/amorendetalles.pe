export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  requiresImage: boolean;
  image: string;
  images: string[]; // Galería de imágenes
  features: string[]; // Características del producto
  detailedDescription: string;
}

export const WHATSAPP_NUMBER = '51973175996'; // Número corregido
export const YAPE_NUMBER = '51903477300'; // Número de Yape
export const YAPE_HOLDER = 'Luz Can*'; // Titular de Yape
export const YAPE_IMAGE = '/images/yape-amor-en-detalles.webp'; // Titular de Yape
export const BUSINESS_NAME = 'Amor en Detalles';
export const FACEBOOK_URL = 'https://www.facebook.com/amorendetalles.pe';

export const products: Product[] = [
  {
    id: '1',
    name: 'Abrazo de Amor',
    price: 65,
    description: 'Un detalle romántico que combina ternura, dulces y un mensaje especial para sorprender a esa persona única.',
    requiresImage: false,
    image: '/images/abrazo-de-amor.webp',
    images: [
      '/images/abrazo-de-amor.webp',
      // '/images/abrazo-de-amor-2.webp',
      // '/images/abrazo-de-amor-3.webp',
      // '/images/abrazo-de-amor-4.webp',
    ],
    features: [
      'Caja decorada artesanalmente con temática romántica',
      'Peluche central incluido',
      'Selección de dulces y chocolates',
      'Tarjeta con mensaje personalizado',
      'Detalles hechos a mano (corazones, decoraciones)',
      'Presentación lista para regalar',
    ],
    detailedDescription: 'Abrazo de Amor es más que una caja de regalo: es una experiencia pensada para emocionar. Cada detalle está cuidadosamente elaborado a mano, combinando ternura, dulces y una presentación romántica que transmite cariño desde el primer vistazo. Incluye un peluche central, una selección de chocolates y dulces, y una tarjeta personalizada donde puedes expresar tus sentimientos. Ideal para San Valentín, aniversarios o simplemente para recordarle a esa persona especial cuánto la quieres.',
  },
  {
    id: '2',
    name: 'Caja Especial',
    price: 50,
    description: 'Caja sorpresa interactiva y personalizable con mensajes, fotos y dulces, diseñada para emocionar desde el primer momento.',
    requiresImage: true,
    image: '/images/caja-especial.webp',
    images: [
      '/images/caja-especial.webp',
      '/images/caja-especial-2.webp',
      '/images/caja-especial-3.webp',
    ],
    features: [
      'Caja sorpresa con apertura interactiva',
      'Mensajes 100% personalizables',
      'Espacios para fotografías',
      'Compartimento con dulces y snacks',
      'Detalles hechos a mano',
      'Diseño único y creativo',
      'Presentación impactante al abrir'
    ],
    detailedDescription: 'Caja Especial es un regalo completamente personalizable diseñado para sorprender y emocionar. Al abrirla, se despliegan mensajes, fotografías y detalles elaborados a mano según lo que el cliente desee expresar. Incluye un compartimento central con dulces y pequeños regalos, convirtiéndola en una experiencia visual y emocional inolvidable. Ideal para San Valentín, aniversarios, cumpleaños o cualquier ocasión especial.'
  },

  {
    id: '3',
    name: 'Caja Explosiva Personalizada',
    price: 65,
    description: 'Caja sorpresa explosiva con fotos y mensajes personalizados para esa personita especial.',
    requiresImage: true,
    image: '/images/caja-explosiva.webp',
    images: [
      '/images/caja-explosiva.webp',
      '/images/caja-explosiva-2.webp',
      '/images/caja-explosiva-3.webp',
    ],
    features: [
      'Caja explosiva artesanal',
      'Fotos impresas personalizadas',
      'Mensajes personalizados en cada sección',
      'Decoración romántica hecha a mano',
      'Espacio central para sorpresa (peluche, dulces u otro detalle)',
      'Caja exterior con lazo incluida',
    ],
    detailedDescription:
      'La Caja Explosiva Personalizada es un regalo lleno de emoción y sorpresa. Al abrirla, se despliegan fotos, mensajes y recuerdos cuidadosamente organizados, creando una experiencia única y memorable. Puedes personalizar las imágenes y textos para expresar tus sentimientos de una forma original. Ideal para aniversarios, San Valentín, cumpleaños o cualquier ocasión especial donde quieras sorprender de verdad.',
  },
  {
    id: '4',
    name: 'Caja Secreta del Corazón',
    price: 75,
    description: 'Caja sorpresa tipo explosiva con mensajes, fotos y detalles personalizados para sorprender con amor.',
    requiresImage: true,
    image: '/images/caja-secreta-del-corazon.webp',
    images: [
      '/images/caja-secreta-del-corazon.webp',
      '/images/caja-secreta-del-corazon-2.webp',
      '/images/caja-secreta-del-corazon-3.webp',
    ],
    features: [
      'Caja explosiva artesanal',
      'Mensajes personalizados en los laterales',
      'Espacios para fotos impresas',
      'Compartimento central en forma de corazón',
      'Incluye dulces y peluche (según disponibilidad)',
      'Sobres y tarjetas decorativas',
      'Caja exterior con cinta incluida',
    ],
    detailedDescription:
      'La Caja Secreta del Corazón es un detalle lleno de emoción y significado. Al abrirla, se despliegan mensajes personalizados, fotos y pequeños sobres decorativos que expresan todo tu cariño. En el centro destaca un compartimento en forma de corazón que puede incluir dulces, un peluche u otro detalle especial. Es un regalo ideal para San Valentín, aniversarios o cualquier ocasión en la que quieras sorprender de una forma original y memorable.',
  },
  {
    id: '5',
    name: 'La Caja del Secreto',
    price: 45,
    description: 'Caja romántica con mensajes ocultos, tarjetas desplegables y dulces para una sorpresa íntima y especial.',
    requiresImage: true,
    image: '/images/la-caja-del-secreto.webp',
    images: [
      '/images/la-caja-del-secreto.webp',
      '/images/la-caja-del-secreto-2.webp',
      '/images/la-caja-del-secreto-3.webp',
    ],
    features: [
      'Caja artesanal con diseño elegante',
      'Tarjetas desplegables con mensajes románticos',
      'Espacios para mensajes personalizados',
      'Detalles decorativos con corazones',
      'Incluye dulces y chocolates',
      'Cinta decorativa de cierre',
      'Presentación tipo sobre secreto',
    ],
    detailedDescription:
      'La Caja del Secreto está pensada para quienes quieren expresar sentimientos de una forma íntima y original. En su interior esconde tarjetas desplegables con mensajes románticos, detalles cuidadosamente diseñados y un compartimento con dulces que complementan la sorpresa. Su formato tipo sobre y su cierre con cinta la convierten en un regalo elegante, emotivo y perfecto para declarar amor, agradecer o sorprender en una ocasión especial.',
  },
  {
    id: '6',
    name: 'Detalle con Cariño',
    price: 75,
    description: 'Una caja explosiva personalizable que se abre revelando fotos, mensajes y detalles cuidadosamente pensados para expresar amor de una forma única.',
    requiresImage: true,
    image: '/images/detalle-con-carino.webp',
    images: [
      '/images/detalle-con-carino.webp',
      '/images/detalle-con-carino-2.webp',
    ],
    features: [
      'Caja explosiva con apertura sorpresa',
      'Diseño artesanal y temática romántica',
      'Espacios para fotos y mensajes personalizados',
      'Corazón central con mensaje manuscrito',
      'Decoraciones hechas a mano',
      'Presentación lista para regalar',
    ],
    detailedDescription: 'Detalle con Cariño es una caja explosiva diseñada para sorprender y emocionar desde el primer momento. Al abrirla, se despliegan fotografías, mensajes y decoraciones cuidadosamente elaboradas a mano, creando una experiencia íntima y memorable. El corazón central con mensaje manuscrito se convierte en el punto focal del detalle, transmitiendo sentimientos auténticos. Ideal para aniversarios, fechas especiales o simplemente para decir “te quiero” de una manera diferente y personal.',
  },
  {
    id: '7',
    name: 'Tarjeta de Amor',
    price: 30,
    description: 'Una tarjeta desplegable artesanal que guarda mensajes románticos y detalles hechos con cariño para sorprender a alguien especial.',
    requiresImage: false,
    image: '/images/tarjeta-de-amor.webp',
    images: [
      '/images/tarjeta-de-amor.webp',
      '/images/tarjeta-de-amor-2.webp',
    ],
    features: [
      'Tarjeta desplegable tipo acordeón',
      'Diseño artesanal en tonos rojo y negro',
      'Mensajes románticos ilustrados',
      'Corazones y detalles decorativos hechos a mano',
      'Cierre con cinta y sello decorativo',
      'Presentación elegante y lista para regalar'
    ],
    detailedDescription: 'Tarjeta de Amor es un detalle único hecho a mano, diseñado para expresar sentimientos de una forma creativa y emotiva. Al desplegarla, se descubren mensajes románticos acompañados de ilustraciones y corazones que transmiten cercanía y ternura. Su cuidada presentación, con cierre de cinta y acabados artesanales, la convierte en el regalo ideal para aniversarios, San Valentín o cualquier ocasión especial donde las palabras importan.'
  },
  {
    id: '8',
    name: 'Galería del corazón',
    price: 35,
    description: 'Una caja tipo explosión que despliega una galería de recuerdos y fotos, diseñada para expresar amor de una forma visual y profundamente personal.',
    requiresImage: true,
    image: '/images/galeria-del-corazon.webp',
    images: [
      '/images/galeria-del-corazon.webp',
      '/images/galeria-del-corazon-2.webp'
    ],
    features: [
      'Caja tipo explosión con diseño artesanal',
      'Galería desplegable con múltiples fotografías',
      'Espacio para mensajes y dedicatorias personalizadas',
      'Cinta decorativa incluida para cierre',
      'Diseño romántico ideal para recuerdos especiales',
      'Presentación elegante y emotiva'
    ],
    detailedDescription: 'Galería del corazón es un detalle pensado para conservar momentos que merecen quedarse para siempre. Al abrir la caja, se despliega una galería visual llena de fotografías, recuerdos y mensajes que cuentan una historia de amor única. Cada pieza está elaborada con cuidado, permitiendo personalizar las imágenes y dedicatorias para crear un regalo verdaderamente significativo. Ideal para aniversarios, cumpleaños, San Valentín o cualquier ocasión donde las emociones sean las protagonistas.',
  },
  {
    id: '9',
    name: 'Mensaje de Amor',
    price: 15,
    description: 'Un delicado mensaje plegable lleno de ternura, ilustraciones adorables y detalles hechos a mano para expresar amor de una forma íntima y especial.',
    requiresImage: false,
    image: '/images/mensaje-de-amor.webp',
    images: [
      '/images/mensaje-de-amor.webp',
      '/images/mensaje-de-amor-2.webp'
    ],
    features: [
      'Tarjeta plegable tipo acordeón',
      'Ilustraciones románticas y adorables',
      'Sobre decorativo con detalles de corazones',
      'Mariposa decorativa artesanal',
      'Hecho completamente a mano',
      'Ideal para complementar un regalo o detalle especial'
    ],
    detailedDescription: 'Mensaje de Amor es un detalle pequeño en tamaño, pero enorme en significado. Consiste en una tarjeta plegable tipo acordeón que revela ilustraciones románticas y mensajes llenos de cariño, acompañados de un sobre decorativo con corazones y una mariposa artesanal que le da un toque único. Perfecto para sorprender, acompañar un regalo o simplemente expresar sentimientos sinceros de una manera dulce y creativa.'
  },
  {
    id: '10',
    name: 'Tarjeta de Amor Grande',
    price: 35,
    description: 'Una tarjeta artesanal de gran formato que despliega mensajes y escenas de amor en relieve para sorprender y emocionar.',
    requiresImage: false,
    image: '/images/tarjeta-de-amor-grande.webp',
    images: [
      '/images/tarjeta-de-amor-grande.webp',
      '/images/tarjeta-de-amor-grande-2.webp'
    ],
    features: [
      'Tarjeta artesanal de gran tamaño',
      'Diseño desplegable con efecto 3D',
      'Mensajes románticos integrados',
      'Decoración con corazones y detalles hechos a mano',
      'Cierre decorativo con corazón brillante',
      'Ideal para aniversarios, San Valentín o fechas especiales'
    ],
    detailedDescription: 'Tarjeta de Amor Grande es un detalle hecho a mano que va más allá de una simple tarjeta. Al abrirla, se despliegan múltiples niveles con mensajes románticos y elementos en relieve que crean una experiencia visual y emocional única. Cada sección transmite cariño, ternura y dedicación, convirtiéndola en un recuerdo especial que puede conservarse para siempre. Perfecta para expresar amor de una manera creativa, original y profundamente significativa.'
  }
];
export function getGreetingByTime(): string {
  const hour = new Date().getHours();
  
  if (hour < 6) return "Hola buenas noches";
  if (hour < 12) return "Hola buenos días";
  if (hour < 18) return "Hola buenas tardes";
  return "Hola buenas noches";
}

export function generateWhatsAppMessage(product: Product): string {
  const greeting = getGreetingByTime();
  const baseMessage = `${greeting}%0AQuiero hacer un pedido en _*${encodeURIComponent(BUSINESS_NAME)}*_%0A%0A*Producto:* ${encodeURIComponent(product.name)}%0A*Precio base:* S/${product.price}%0A*Personalizable:* Si`;

  if (product.requiresImage) {
    return `${baseMessage}%0A*Requiere imágen de los enamorados:* Si%0A%0A> Entiendo que la reserva es del 50%25 mínimo y se realiza por Yape.%0A_Indiquenme por favor como enviar la imagen y realizar la reserva._`;
  }

  return `${baseMessage}%0A%0A> Entiendo que la reserva es del 50%25 mínimo y se realiza por Yape.%0A_Quedo atento para realizar la reserva._`;
}

export function getWhatsAppLink(product: Product): string {
  const message = generateWhatsAppMessage(product);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}


export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  images: string[];
  features: string[];
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
    name: 'Para mamá con Amor',
    price: 65,
    description: 'Set de lonche completo: taza decorada, canasta y monedero artesanal — un regalo práctico y hermoso que mamá usará todos los días.',
    image: '/images/para-mama-con-amor.webp',
    images: [
      '/images/para-mama-con-amor.webp',
    ],
    features: [
      'Taza de cerámica decorada a mano',
      'Canasta decorativa de presentación',
      'Monedero artesanal de calidad incluido',
      'Decoración especial para el Día de las Madres',
      'Presentación lista para regalar',
      'Ideal como "Set de Lonche para Mamá"',
    ],
    detailedDescription: 'Un regalo que no solo se ve hermoso sino que también se usa. Este set incluye una taza decorada con cariño, perfecta para el desayuno o lonche de mamá, acompañada de un elegante monedero artesanal. Todo presentado en una canasta decorativa con detalles especiales para el Día de las Madres. Es el regalo ideal para cualquier mamá que aprecia lo bello y lo práctico a la vez. Hecho con amor y dedicación artesanal, pensado para que mamá lo recuerde cada mañana cuando prepare su lonche.',
  },
  {
    id: '2',
    name: 'Bolso de Temporada + Joyero',
    price: 80,
    description: 'Combo premium: bolso de temporada elegante más joyero artesanal hecho a mano — el regalo más completo y sofisticado para mamá.',
    image: '/images/carter-joyero-para-mama.webp',
    images: [
      '/images/carter-joyero-para-mama.webp',
      '/images/carter-joyero-para-mama-2.webp',
    ],
    features: [
      'Bolso de temporada de calidad',
      'Joyero artesanal elaborado a mano',
      'Trabajo manual con acabado fino — el joyero es la pieza estrella',
      'Diseño coordinado bolso + joyero',
      'Presentación especial para el Día de las Madres',
      'Combo de alto valor percibido',
    ],
    detailedDescription: 'Un combo que combina lo práctico con lo artístico. El bolso de temporada es perfecto para el uso diario de mamá, mientras que el joyero artesanal — elaborado a mano con el cuidado propio del trabajo artesanal — guarda con amor cada accesorio especial. Juntos forman un regalo de alto valor percibido que supera ampliamente las expectativas al verlo. Por S/80 mamá recibe dos productos de gran calidad que usará con orgullo. El joyero artesanal es la pieza que más enamora: en Ayacucho se valora profundamente el trabajo manual y eso se nota en cada detalle.',
  },
  {
    id: '3',
    name: 'Caja Corazón "Te Amo Mamá"',
    price: 60,
    description: 'Caja con forma de corazón llena de dulces y chocolates — el regalo perfecto para el hijo estudiante o el compañero de oficina que quiere sorprender a mamá.',
    image: '/images/corazon-de-mama.webp',
    images: [
      '/images/corazon-de-mama.webp',
      '/images/corazon-de-mama-2.webp',
    ],
    features: [
      'Caja decorativa en forma de corazón',
      'Rellena de dulces y chocolates seleccionados',
      'Mensaje "Te Amo Mamá" incorporado en el diseño',
      'Decoración artesanal en tonos rosados y violetas',
      'Dulces visibles y bien presentados al abrir',
      'Presentación lista para regalar',
    ],
    detailedDescription:
      'La Caja Corazón "Te Amo Mamá" es el regalo perfecto para quienes quieren sorprender a mamá con estilo sin romper el presupuesto. A un precio accesible y justo, esta caja en forma de corazón viene rellena de dulces y chocolates cuidadosamente seleccionados y presentados para que se vean llenos y abundantes desde el primer vistazo. La decoración artesanal en tonos rosados transmite cariño real. Ideal como regalo de oficina, de hijo estudiante o de cualquier persona que quiera decirle "te amo mamá" de una forma sencilla, bonita y emotiva.',
  },
  {
    id: '4',
    name: 'Caja Secreta del Corazón',
    price: 55,
    description: 'Caja corazón rosada que guarda una sorpresa irresistible: reloj elegante y dulces seleccionados — un combo de alto impacto visual a un precio muy atractivo.',
    image: '/images/detalle-de-amor-para-mama.webp',
    images: [
      '/images/detalle-de-amor-para-mama.webp',
    ],
    features: [
      'Caja corazón en tonos rosados o dorados',
      'Reloj elegante incluido — la sorpresa estrella',
      'Dulces y chocolates seleccionados',
      'Colores coordinados: reloj + caja combinan a la perfección',
      'Alto impacto visual al abrir',
      'Se ve mucho más caro de lo que cuesta',
    ],
    detailedDescription:
      'La Caja Secreta del Corazón es el regalo que más impresiona al primer vistazo. Al abrirla, mamá encuentra un reloj elegante en un tono que combina perfectamente con la caja — rosado o dorado — acompañado de dulces y chocolates seleccionados. La combinación genera una apariencia de lujo que supera ampliamente el precio. Ver un reloj y dulces dentro de una caja corazón rosada es simplemente irresistible y transmite un mensaje claro: mamá merece lo mejor. El regalo que más enorgullece a quien lo da y que mamá recordará.',
  },
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
  return `${greeting}%0AQuiero hacer un pedido en _*${encodeURIComponent(BUSINESS_NAME)}*_%0A%0A*Producto:* ${encodeURIComponent(product.name)}%0A*Precio base:* S/${product.price}%0A%0A> Entiendo que la reserva es del 50%25 mínimo y se realiza por Yape.%0A_Quedo atento para realizar la reserva._`;
}

export function getWhatsAppLink(product: Product): string {
  const message = generateWhatsAppMessage(product);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

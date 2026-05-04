import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products, getWhatsAppLink, BUSINESS_NAME, YAPE_NUMBER, YAPE_HOLDER, YAPE_IMAGE } from '@/data/products';
import ImageGallery from '@/components/ImageGallery';
import ProductDetailClient from '@/components/ProductDetailClient';
import StickyHeader from '@/components/StickyHeader';
import { 
  ArrowLeftIcon,
  CheckCircleIcon,
  SparklesIcon,
  GiftIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  UserIcon,
  QrCodeIcon,
  CalendarDaysIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// ISR: Regenera páginas de producto cada 24h
export const revalidate = 86400; // 24 horas

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  
  if (!product) {
    return {
      title: 'Producto no encontrado',
    };
  }

  return {
    title: `${product.name} - ${BUSINESS_NAME}`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const whatsappLink = getWhatsAppLink(product);

  return (
    <>
      <StickyHeader />
      <div className="min-h-screen bg-warm-50 pt-16 md:pt-20">
        {/* Back button */}
        <div className="bg-white border-b border-rose-100">
          <div className="container mx-auto px-4 py-4">
            <Link
              href="/#productos"
              className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Volver a productos
            </Link>
          </div>
        </div>

        {/* Product detail */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Image Gallery */}
              <div className="animate-scale-in">
                <ImageGallery images={product.images} productName={product.name} />
              </div>

              {/* Product Info */}
              <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                {/* Title and price */}
                <div>
                  <div className="mb-3">
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-rose-900">
                      {product.name}
                    </h1>
                  </div>
                  <p className="text-gray-600 text-lg">{product.description}</p>
                </div>

                {/* Price */}
                <div className="bg-gradient-to-br from-rose-50 to-warm-50 rounded-2xl p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm text-gray-600">Precio base</span>
                    <span className="text-4xl font-bold text-rose-600">S/ {product.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    El precio final depende de la personalización elegida
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <SparklesIcon className="w-5 h-5 text-rose-500" />
                    <span className="text-sm font-medium">100% Artesanal</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <GiftIcon className="w-5 h-5 text-rose-500" />
                    <span className="text-sm font-medium">Personalizable</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <HeartIcon className="w-5 h-5 text-rose-500" />
                    <span className="text-sm font-medium">Hecho con amor</span>
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-display font-bold text-rose-900 mb-3">
                    Descripción Detallada
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {product.detailedDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-display font-bold text-rose-900 mb-4">
                    Características
                  </h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Reservation and Payment Info */}
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6 md:p-8">
                  <div className="space-y-6">
                    {/* Política de Reserva */}
                    <div className="flex items-start gap-3">
                      <ShieldCheckIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-bold text-purple-900 mb-2 text-lg">
                          Política de Reserva
                        </h3>
                        <p className="text-purple-800 text-sm mb-2">
                          Para confirmar tu pedido necesitamos una <strong>reserva mínima del 50%</strong> del valor total. 
                          El pago se realiza únicamente por <strong>Yape</strong>.
                        </p>
                        <p className="text-purple-700 text-xs">
                          También puedes pagar el 100% al momento de reservar si lo deseas.
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-purple-300"></div>

                    {/* Grid: Imagen del Producto + QR de Yape */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Imagen del Producto */}
                      <div>
                        <h4 className="font-bold text-purple-900 mb-3 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                          Producto:
                        </h4>
                        <div className="bg-white rounded-xl overflow-hidden border-2 border-purple-200 shadow-md">
                          <div className="relative aspect-square bg-gradient-to-br from-rose-100 to-warm-100 flex items-center justify-center p-4 md:p-6">
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="text-center max-w-full">
                                <GiftIcon className="w-16 h-16 mx-auto text-rose-500 mb-2" />
                                <p className="text-sm font-semibold text-gray-700 break-words px-2">{product.name}</p>
                                <p className="text-2xl font-bold text-rose-600 mt-2">S/ {product.price}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* QR de Yape */}
                      <div>
                        <h4 className="font-bold text-purple-900 mb-3 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                          Escanea para pagar:
                        </h4>
                        <div className="bg-white rounded-xl overflow-hidden border-2 border-purple-200 shadow-md">
                          <div className="relative aspect-square bg-gradient-to-br from-purple-200 to-pink-100 flex items-center justify-center p-2 md:p-4">
                            {/* <div className="w-full h-full flex items-center justify-center">
                              <div className="text-center max-w-full">
                                <QrCodeIcon className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 text-purple-600" />
                                <p className="text-sm font-bold text-purple-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                  QR de Yape
                                </p>
                                <code className="text-xs bg-purple-200 px-2 py-1 rounded mt-2 inline-block break-all">
                                  yape-qr.png
                                </code>
                              </div>
                            </div> */}
                            <Image
                              src={YAPE_IMAGE}
                              alt="QR de Yape - Amor en Detalles"
                              fill
                              className="object-contain p-4 rounded-xl md:p-4 rounded-xl"
                              sizes="(max-width: 768px) 100vw, 400px"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Datos de Yape */}
                    <div className="space-y-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      <div className="bg-white rounded-lg p-4 border border-purple-200">
                        <div className="flex items-center gap-2 mb-1">
                          <DevicePhoneMobileIcon className="w-5 h-5 text-purple-600" />
                          <span className="text-xs font-semibold text-gray-600">Número de Yape:</span>
                        </div>
                        <p className="text-lg font-bold text-purple-900 ml-7">
                          +{YAPE_NUMBER.slice(0, 2)} {YAPE_NUMBER.slice(2, 5)} {YAPE_NUMBER.slice(5, 8)} {YAPE_NUMBER.slice(8)}
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-purple-200">
                        <div className="flex items-center gap-2 mb-1">
                          <UserIcon className="w-5 h-5 text-purple-600" />
                          <span className="text-xs font-semibold text-gray-600">Titular:</span>
                        </div>
                        <p className="text-lg font-bold text-purple-900 ml-7">
                          {YAPE_HOLDER}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Client Component with Location Picker */}
                <ProductDetailClient product={product} whatsappLink={whatsappLink} />
              </div>
            </div>

            {/* Important info */}
            <div className="mt-12 bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-display font-bold text-rose-900 mb-6 text-center">
                Información Importante
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <CalendarDaysIcon className="w-12 h-12 mx-auto mb-3 text-rose-500" />
                  <h3 className="font-bold text-lg text-rose-900 mb-2">
                    Fecha límite
                  </h3>
                  <p className="text-gray-700">
                    Último día para pedidos: <strong>8 de mayo</strong>
                  </p>
                </div>
                <div className="text-center p-4">
                  <ClockIcon className="w-12 h-12 mx-auto mb-3 text-amber-500" />
                  <h3 className="font-bold text-lg text-rose-900 mb-2">
                    Bajo demanda
                  </h3>
                  <p className="text-gray-700">
                    Cada detalle se elabora después de tu pedido
                  </p>
                </div>
                <div className="text-center p-4">
                  <GiftIcon className="w-12 h-12 mx-auto mb-3 text-rose-500" />
                  <h3 className="font-bold text-lg text-rose-900 mb-2">
                    Entrega garantizada
                  </h3>
                  <p className="text-gray-700">
                    A tiempo para el Día de las Madres (10 de mayo)
                  </p>
                </div>
              </div>
            </div>

            {/* Related products or back to store */}
            <div className="mt-12 text-center">
              <Link
                href="/#productos"
                className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold text-lg transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                Ver más productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

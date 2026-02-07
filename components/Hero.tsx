import { WHATSAPP_NUMBER, BUSINESS_NAME } from '@/data/products';
import { 
  SparklesIcon, 
  HeartIcon, 
  GiftIcon,
  ChatBubbleBottomCenterTextIcon 
} from '@heroicons/react/24/outline';
import ProductCarousel from './ProductCarousel';

export default function Hero() {
  const mainWhatsAppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%0AQuiero conocer mas sobre los detalles de ${encodeURIComponent(BUSINESS_NAME)} para San Valentin`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-warm-100 to-rose-50">
      {/* Decorative elements - SOLO EN DESKTOP */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-300 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-rose-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-warm-300 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left content */}
            <div className="text-center md:text-left space-y-4 md:space-y-6 animate-slide-up order-2 md:order-1">
              {/* Business name badge */}
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-rose-600 to-rose-500 text-white rounded-full text-sm md:text-base font-bold shadow-lg">
                  <HeartIcon className="w-4 h-4 md:w-5 md:h-5" />
                  {BUSINESS_NAME}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-rose-900 leading-tight">
                Detalles{' '}
                <span className="text-rose-600 relative">
                  personalizados
                  <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 2 150 2 198 10" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                {' '}hechos a mano
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                Regala algo <strong className="text-rose-700">único</strong> este 14 de febrero
              </p>

              <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto md:mx-0">
                Cada detalle es una obra de arte creada especialmente para ti, con amor y dedicación artesanal.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <ChatBubbleBottomCenterTextIcon className="w-5 h-5 md:w-7 md:h-7" />
                  Pedir por WhatsApp
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 pt-4 md:pt-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5 md:w-6 md:h-6 text-rose-500" />
                  <span>100% artesanal</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartIcon className="w-5 h-5 md:w-6 md:h-6 text-rose-500" />
                  <span>Personalizable</span>
                </div>
                <div className="flex items-center gap-2">
                  <GiftIcon className="w-5 h-5 md:w-6 md:h-6 text-rose-500" />
                  <span>Único y especial</span>
                </div>
              </div>
            </div>

            {/* Right side - CARRUSEL DE PRODUCTOS */}
            <div className="relative animate-scale-in order-1 md:order-2" style={{ animationDelay: '0.2s' }}>
              <ProductCarousel />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#fef9f3"/>
        </svg>
      </div>
    </section>
  );
}

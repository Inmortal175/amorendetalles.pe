import { WHATSAPP_NUMBER, BUSINESS_NAME } from '@/data/products';
import { HeartIcon, SparklesIcon, GiftIcon, ClockIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

export default function FinalCTA() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%0AQuiero hacer un pedido en ${encodeURIComponent(BUSINESS_NAME)} para San Valentin%0A%0AEntiendo que la reserva es del 50%25 minimo y se realiza por Yape.%0APodrian ayudarme a elegir el detalle perfecto?`;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-rose-600 via-rose-500 to-rose-600 relative overflow-hidden">
      {/* Decorative elements - SOLO EN DESKTOP */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4 md:mb-6 animate-float">
            <HeartIcon className="w-16 h-16 md:w-24 md:h-24 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight animate-slide-up">
            Haz tu pedido hoy y{' '}
            <span className="inline-block relative">
              sorprende
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C50 2 150 2 198 10" stroke="white" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
            {' '}este 14 de febrero
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-rose-100 mb-8 md:mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            El amor se celebra con detalles únicos. No dejes para mañana el regalo que hará sonreír a esa persona especial.
          </p>

          {/* CTA Button */}
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 md:gap-3 bg-white text-rose-600 px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
            >
              <ChatBubbleBottomCenterTextIcon className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
              <span className="group-hover:tracking-wide transition-all">Hacer mi pedido ahora</span>
            </a>
          </div>

          {/* Urgency note */}
          <div className="mt-8 md:mt-10 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <ClockIcon className="w-4 h-4 md:w-5 md:h-5" />
            <p className="text-xs md:text-sm font-semibold">
              Recuerda: Fecha límite 12 de febrero - Reserva 50% por Yape
            </p>
          </div>

          {/* Social proof */}
          <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white/90 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 md:w-6 md:h-6" />
              <span>Detalles únicos</span>
            </div>
            <div className="flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 md:w-6 md:h-6" />
              <span>100% artesanal</span>
            </div>
            <div className="flex items-center gap-2">
              <GiftIcon className="w-5 h-5 md:w-6 md:h-6" />
              <span>Entrega garantizada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 73.3C480 67 600 73 720 76.7C840 80 960 80 1080 73.3C1200 67 1320 53 1380 46.7L1440 40V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="#fef9f3"/>
        </svg>
      </div>
    </section>
  );
}

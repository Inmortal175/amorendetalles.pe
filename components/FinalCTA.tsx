import { WHATSAPP_NUMBER, BUSINESS_NAME } from '@/data/products';
import { SparklesIcon, GiftIcon, ClockIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

export default function FinalCTA() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%0AQuiero hacer un pedido en ${encodeURIComponent(BUSINESS_NAME)} para el Dia de las Madres%0A%0AEntiendo que la reserva es del 50%25 minimo y se realiza por Yape.%0APodrian ayudarme a elegir el detalle perfecto para mama?`;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-rose-600 via-rose-500 to-rose-600 relative overflow-hidden">
      {/* SVG decoraciones florales laterales */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {/* Flor izquierda */}
        <svg className="absolute -left-6 top-1/4 w-44 h-56 opacity-10 animate-float" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 120 L50 72" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          <path d="M50 95 Q33 85 28 71 Q43 83 50 79" fill="rgba(255,255,255,0.5)"/>
          <path d="M50 100 Q67 90 72 76 Q57 88 50 84" fill="rgba(255,255,255,0.5)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.85)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.65)" transform="rotate(60 50 52)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.85)" transform="rotate(120 50 52)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.65)" transform="rotate(180 50 52)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.85)" transform="rotate(240 50 52)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.65)" transform="rotate(300 50 52)"/>
          <circle cx="50" cy="52" r="12" fill="rgba(255,215,0,0.75)"/>
          <circle cx="50" cy="52" r="7" fill="rgba(245,158,11,0.8)"/>
        </svg>

        {/* Flor derecha */}
        <svg className="absolute -right-6 top-1/3 w-44 h-56 opacity-10 animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 120 L50 72" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          <path d="M50 95 Q33 85 28 71 Q43 83 50 79" fill="rgba(255,255,255,0.5)"/>
          <path d="M50 100 Q67 90 72 76 Q57 88 50 84" fill="rgba(255,255,255,0.5)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.85)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.65)" transform="rotate(60 50 52)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.85)" transform="rotate(120 50 52)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.65)" transform="rotate(180 50 52)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.85)" transform="rotate(240 50 52)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.65)" transform="rotate(300 50 52)"/>
          <circle cx="50" cy="52" r="12" fill="rgba(255,215,0,0.75)"/>
          <circle cx="50" cy="52" r="7" fill="rgba(245,158,11,0.8)"/>
        </svg>

        {/* Mariposa superior */}
        <svg className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-20 opacity-15 animate-float" style={{ animationDelay: '1s' }} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="48" rx="4" ry="22" fill="rgba(255,255,255,0.9)"/>
          <path d="M57 30 Q48 14 44 8" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M63 30 Q72 14 76 8" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="44" cy="8" r="3.5" fill="rgba(255,255,255,0.9)"/>
          <circle cx="76" cy="8" r="3.5" fill="rgba(255,255,255,0.9)"/>
          <path d="M57 36 Q28 14 13 30 Q8 50 57 48Z" fill="rgba(255,255,255,0.5)"/>
          <path d="M57 48 Q18 44 13 64 Q23 79 57 60Z" fill="rgba(255,255,255,0.4)"/>
          <path d="M63 36 Q92 14 107 30 Q112 50 63 48Z" fill="rgba(255,255,255,0.5)"/>
          <path d="M63 48 Q102 44 107 64 Q97 79 63 60Z" fill="rgba(255,255,255,0.4)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Flor central animada */}
          <div className="flex justify-center mb-4 md:mb-6 animate-float">
            <svg className="w-16 h-16 md:w-24 md:h-24" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 120 L50 72" stroke="rgba(255,255,255,0.65)" strokeWidth="4" strokeLinecap="round"/>
              <path d="M50 92 Q33 82 28 68 Q43 80 50 76" fill="rgba(255,255,255,0.45)"/>
              <path d="M50 97 Q67 87 72 73 Q57 85 50 81" fill="rgba(255,255,255,0.45)"/>
              <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.9)"/>
              <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.7)" transform="rotate(60 50 52)"/>
              <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.9)" transform="rotate(120 50 52)"/>
              <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.7)" transform="rotate(180 50 52)"/>
              <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.9)" transform="rotate(240 50 52)"/>
              <ellipse cx="50" cy="52" rx="14" ry="24" fill="rgba(255,255,255,0.7)" transform="rotate(300 50 52)"/>
              <circle cx="50" cy="52" r="12" fill="rgba(255,215,0,0.95)"/>
              <circle cx="50" cy="52" r="7" fill="rgba(245,158,11,0.95)"/>
            </svg>
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
            {' '}a mamá este Día de las Madres
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-rose-100 mb-8 md:mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            El amor a mamá se celebra con detalles únicos. No dejes para mañana el regalo que hará sonreír a la persona más especial de tu vida.
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
              Recuerda: Fecha límite 8 de mayo - Reserva 50% por Yape
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

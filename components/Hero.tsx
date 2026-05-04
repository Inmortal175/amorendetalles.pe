'use client';

import Image from 'next/image';
import { WHATSAPP_NUMBER, BUSINESS_NAME } from '@/data/products';
import {
  SparklesIcon,
  HeartIcon,
  GiftIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline';
import ProductCarousel from './ProductCarousel';

export default function Hero() {
  const mainWhatsAppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%0AQuiero conocer mas sobre los detalles de ${encodeURIComponent(BUSINESS_NAME)} para el Dia de las Madres`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-100 via-warm-100 to-rose-50">

      {/* ── BANNER PORTADA ── coloca la imagen en: public/images/banner-dia-madres.webp */}
      <div className="relative w-full pt-16 md:pt-20">
        <Image
          src="/images/banner-dia-madres.webp"
          alt="Feliz Día de la Madre - Amor en Detalles"
          width={1920}
          height={600}
          className="w-full h-[180px] sm:h-[260px] md:h-auto md:max-h-[480px] object-cover"
          priority
          unoptimized
        />
      </div>

      {/* SVG decoraciones florales - SOLO EN DESKTOP */}
      <div className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden">
        {/* Flor grande - arriba izquierda */}
        <svg className="absolute top-6 left-8 w-36 h-44 opacity-20 animate-float" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 120 L50 72" stroke="#86efac" strokeWidth="4" strokeLinecap="round"/>
          <path d="M50 92 Q33 82 28 68 Q43 80 50 76" fill="#4ade80"/>
          <path d="M50 97 Q67 87 72 73 Q57 85 50 81" fill="#4ade80"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="#ddd6fe"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="#c4b5fd" transform="rotate(60 50 52)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="#ddd6fe" transform="rotate(120 50 52)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="#c4b5fd" transform="rotate(180 50 52)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="#ddd6fe" transform="rotate(240 50 52)"/>
          <ellipse cx="50" cy="52" rx="14" ry="24" fill="#c4b5fd" transform="rotate(300 50 52)"/>
          <circle cx="50" cy="52" r="12" fill="#fbbf24"/>
          <circle cx="50" cy="52" r="7" fill="#f59e0b"/>
        </svg>

        {/* Mariposa - arriba derecha */}
        <svg className="absolute top-14 right-12 w-28 h-24 opacity-20 animate-float" style={{ animationDelay: '1.5s' }} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="48" rx="4" ry="22" fill="#4c1d95"/>
          <path d="M57 30 Q48 14 44 8" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/>
          <path d="M63 30 Q72 14 76 8" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="44" cy="8" r="3.5" fill="#8b5cf6"/>
          <circle cx="76" cy="8" r="3.5" fill="#8b5cf6"/>
          <path d="M57 36 Q28 14 13 30 Q8 50 57 48Z" fill="#ddd6fe"/>
          <path d="M57 48 Q18 44 13 64 Q23 79 57 60Z" fill="#ede9fe"/>
          <path d="M63 36 Q92 14 107 30 Q112 50 63 48Z" fill="#c4b5fd"/>
          <path d="M63 48 Q102 44 107 64 Q97 79 63 60Z" fill="#a78bfa"/>
          <circle cx="35" cy="34" r="6" fill="#8b5cf6" opacity="0.4"/>
          <circle cx="85" cy="34" r="6" fill="#7c3aed" opacity="0.4"/>
        </svg>

        {/* Flor pequeña - zona inferior */}
        <svg className="absolute bottom-28 left-16 w-20 h-28 opacity-15 animate-float" style={{ animationDelay: '3s' }} viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 110 L40 68" stroke="#86efac" strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M40 85 Q27 77 23 65 Q36 75 40 70" fill="#4ade80"/>
          <ellipse cx="40" cy="48" rx="12" ry="20" fill="#ede9fe"/>
          <ellipse cx="40" cy="48" rx="12" ry="20" fill="#ddd6fe" transform="rotate(60 40 48)"/>
          <ellipse cx="40" cy="48" rx="12" ry="20" fill="#ede9fe" transform="rotate(120 40 48)"/>
          <ellipse cx="40" cy="48" rx="12" ry="20" fill="#ddd6fe" transform="rotate(180 40 48)"/>
          <ellipse cx="40" cy="48" rx="12" ry="20" fill="#ede9fe" transform="rotate(240 40 48)"/>
          <ellipse cx="40" cy="48" rx="12" ry="20" fill="#ddd6fe" transform="rotate(300 40 48)"/>
          <circle cx="40" cy="48" r="10" fill="#fde68a"/>
          <circle cx="40" cy="48" r="6" fill="#fbbf24"/>
        </svg>
      </div>

      {/* Pétalos cayendo - todos los dispositivos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute left-1/4 -top-2 w-8 h-10 opacity-30 petal-fall" style={{ animationDelay: '0s' }} viewBox="0 0 40 60" fill="none">
          <ellipse cx="20" cy="30" rx="13" ry="28" fill="#ddd6fe" transform="rotate(15 20 30)"/>
        </svg>
        <svg className="absolute left-1/2 -top-4 w-6 h-8 opacity-25 petal-fall-slow" style={{ animationDelay: '3.5s' }} viewBox="0 0 40 60" fill="none">
          <ellipse cx="20" cy="30" rx="13" ry="28" fill="#f0abfc" transform="rotate(-10 20 30)"/>
        </svg>
        <svg className="absolute right-1/4 -top-2 w-7 h-9 opacity-30 petal-fall" style={{ animationDelay: '6s' }} viewBox="0 0 40 60" fill="none">
          <ellipse cx="20" cy="30" rx="13" ry="28" fill="#ede9fe" transform="rotate(25 20 30)"/>
        </svg>
        <svg className="absolute right-1/3 -top-4 w-5 h-7 opacity-20 petal-fall-slow" style={{ animationDelay: '9s' }} viewBox="0 0 40 60" fill="none">
          <ellipse cx="20" cy="30" rx="13" ry="28" fill="#c4b5fd" transform="rotate(-20 20 30)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left content */}
            <div className="text-center md:text-left space-y-4 md:space-y-6 animate-slide-up order-2 md:order-1">
              {/* Business name badge con logo */}
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-rose-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/favicon.svg"
                    alt=""
                    className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0"
                  />
                  <span className="text-rose-700 text-sm md:text-base font-bold">{BUSINESS_NAME}</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-rose-900 leading-tight">
                Detalles{' '}
                <span className="text-rose-600 relative">
                  personalizados
                  <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 2 150 2 198 10" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                {' '}hechos a mano
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                Sorprende a <strong className="text-rose-700">mamá</strong> este Día de las Madres
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

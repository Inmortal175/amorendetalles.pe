'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { BUSINESS_NAME, WHATSAPP_NUMBER } from '@/data/products';

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Activar blur después de 50px de scroll
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%0AQuiero hacer un pedido en ${encodeURIComponent(BUSINESS_NAME)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/45 backdrop-blur-md shadow-lg'
          : 'bg-transparent/60 shadow-lg'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className={`rounded-full overflow-hidden transition-all duration-300 flex-shrink-0 ${
              isScrolled
                ? 'bg-white p-1 shadow-md'
                : 'bg-white/90 backdrop-blur-sm p-1'
            }`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/favicon.svg"
                alt={BUSINESS_NAME}
                className="w-8 h-8 md:w-9 md:h-9 group-hover:scale-110 transition-transform"
              />
            </div>
            <div>
              <h1 className={`font-display font-bold text-lg md:text-xl transition-colors ${
                isScrolled
                  ? 'text-gray-900'
                  : 'text-white drop-shadow-lg'
              }`}>
                {BUSINESS_NAME}
              </h1>
              <p className={`text-xs hidden md:block transition-colors ${
                isScrolled
                  ? 'text-gray-600'
                  : 'text-white/90 drop-shadow'
              }`}>
                Detalles artesanales
              </p>
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#productos"
              className={`font-semibold transition-colors hover:text-rose-600 ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow'
              }`}
            >
              Productos
            </Link>
            <Link
              href="/#como-funciona"
              className={`font-semibold transition-colors hover:text-rose-600 ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow'
              }`}
            >
              Cómo funciona
            </Link>
          </nav>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm md:text-base"
          >
            <ShoppingBagIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Hacer pedido</span>
            <span className="sm:hidden">Pedir</span>
          </a>
        </div>
      </div>

      {/* Línea inferior sutil cuando está scrolled */}
      {isScrolled && (
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      )}
    </header>
  );
}

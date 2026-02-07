'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { products } from '@/data/products';

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Seleccionar los primeros 5 productos para el carrusel
  const carouselProducts = products.slice(0, 5);

  // Auto-play cada 4 segundos
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselProducts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselProducts.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % carouselProducts.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentProduct = carouselProducts[currentIndex];

  return (
    <div className="relative w-full h-full">
      {/* Main carousel container */}
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl h-full bg-gradient-to-br from-rose-200 to-pink-300">
        {/* Product Image */}
        <div className="relative aspect-square">
          <Image
            src={currentProduct.image}
            alt={currentProduct.name}
            fill
            className="object-cover transition-opacity duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Product info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10">
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-2 line-clamp-2">
                {currentProduct.name}
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-3 line-clamp-2">
                {currentProduct.description}
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-rose-300">
                S/ {currentProduct.price}
              </p>
            </div>
            
            {/* CTA Button */}
            <Link
              href={`/producto/${currentProduct.id}`}
              className="inline-flex items-center gap-2 bg-white text-rose-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Ver detalles
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all z-20 group"
          aria-label="Producto anterior"
        >
          <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-rose-600" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all z-20 group"
          aria-label="Producto siguiente"
        >
          <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-rose-600" />
        </button>

        {/* Indicators (dots) */}
        <div className="absolute bottom-20 md:bottom-24 lg:bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {carouselProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-white w-8 md:w-10 h-2 md:h-3'
                  : 'bg-white/50 hover:bg-white/75 w-2 h-2 md:w-3 md:h-3'
              }`}
              aria-label={`Ir al producto ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter badge */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm z-20">
          {currentIndex + 1} / {carouselProducts.length}
        </div>
      </div>

      {/* Decorative price badge */}
      <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-rose-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg transform rotate-12 animate-float z-30">
        <p className="font-bold text-xs md:text-sm">Desde S/30</p>
      </div>
    </div>
  );
}

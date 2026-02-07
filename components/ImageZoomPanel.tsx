'use client';

import { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';

interface ImageZoomPanelProps {
  src: string;
  alt: string;
  zoomLevel?: number;
}

/**
 * ImageZoomPanel - Sistema de zoom lateral estilo e-commerce
 * - Panel derecho estático que muestra área ampliada
 * - Solo desktop (hidden en mobile)
 * - Aparece/desaparece con hover
 */
export default function ImageZoomPanel({
  src,
  alt,
  zoomLevel = 2.5,
}: ImageZoomPanelProps) {
  const [showZoom, setShowZoom] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  const handleMouseEnter = () => {
    setShowZoom(true);
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  return (
    <div className="relative w-full h-full flex gap-0">
      {/* Imagen principal con tracking de mouse */}
      <div
        ref={imageRef}
        className="relative w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          draggable={false}
        />

        {/* Indicador de zoom (solo desktop) */}
        <div className="absolute top-3 right-3  text-white text-xs px-3 py-1.5 rounded-full shadow-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none hidden md:block z-10">
          Mueve el mouse para ampliar →
        </div>
      </div>

      {/* Panel de zoom lateral - Solo desktop - HERMANO ABSOLUTO */}
      {showZoom && (
        <div 
          className="hidden md:block fixed z-50 pointer-events-none"
          style={{
            left: imageRef.current ? imageRef.current.getBoundingClientRect().right + 16 : '50%',
            top: imageRef.current ? imageRef.current.getBoundingClientRect().top : '0',
            width: imageRef.current ? imageRef.current.getBoundingClientRect().width : 'auto',
            height: imageRef.current ? imageRef.current.getBoundingClientRect().height : 'auto',
          }}
        >
          <div className="w-full h-full bg-white rounded-2xl shadow-lg border-4  overflow-hidden">
            {/* Imagen ampliada */}
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: `${zoomLevel * 100}%`,
                backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                backgroundRepeat: 'no-repeat',
              }}
            />
            
            {/* Indicador de área */}
            {/* <div className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              ZOOM {zoomLevel}x
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

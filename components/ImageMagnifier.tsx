'use client';

import { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';

interface ImageMagnifierProps {
  src: string;
  alt: string;
  magnifierSize?: number;
  zoomLevel?: number;
}

/**
 * ImageMagnifier - Componente de zoom con lente circular
 * - Desktop: Lente que sigue el mouse con zoom
 * - Mobile: Tap para abrir en lightbox (sin lente)
 * - Performance optimizado, sin librerías externas
 */
export default function ImageMagnifier({
  src,
  alt,
  magnifierSize = 150,
  zoomLevel = 2.5,
}: ImageMagnifierProps) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Solo mostrar si está dentro de la imagen
    if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
      setShowMagnifier(true);
      
      // Posición del cursor relativa a la imagen
      setCursorPosition({ x, y });
      
      // Calcular qué parte de la imagen mostrar (porcentaje)
      const imgX = (x / rect.width) * 100;
      const imgY = (y / rect.height) * 100;
      setMagnifierPosition({ x: imgX, y: imgY });
    } else {
      setShowMagnifier(false);
    }
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  return (
    <div
      ref={imageRef}
      className="relative w-full h-full group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        cursor: showMagnifier ? 'none' : 'zoom-in',
      }}
    >
      {/* Imagen principal */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
        draggable={false}
      />

      {/* Lente magnificador - Solo en desktop con pointer fino (mouse) */}
      {showMagnifier && (
        <div
          className="absolute pointer-events-none z-50 hidden md:block"
          style={{
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            left: `${cursorPosition.x - magnifierSize / 2}px`,
            top: `${cursorPosition.y - magnifierSize / 2}px`,
            borderRadius: '50%',
            border: '3px solid rgba(255, 255, 255, 0.9)',
            backgroundImage: `url(${src})`,
            backgroundSize: `${zoomLevel * 100}% ${zoomLevel * 100}%`,
            backgroundPosition: `${magnifierPosition.x}% ${magnifierPosition.y}%`,
            backgroundRepeat: 'no-repeat',
            boxShadow: `
              0 0 0 1px rgba(0,0,0,0.1),
              0 8px 24px rgba(0,0,0,0.4),
              inset 0 0 20px rgba(255,255,255,0.2)
            `,
            // Sin transición para seguir instantáneamente el mouse
          }}
        >
          {/* Reflejo de luz en el lente (efecto realista) */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
            }}
          />
        </div>
      )}

      {/* Hint solo desktop */}
      <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
        🔍 Mueve el mouse
      </div>
    </div>
  );
}

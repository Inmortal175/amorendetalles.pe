'use client';

import { useState } from 'react';
import Image from 'next/image';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassMinusIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline';
import ImageZoomPanel from './ImageZoomPanel';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
    setZoomLevel(1);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image con Zoom Panel Lateral - ESTRUCTURA CORREGIDA */}
      <div className="relative flex gap-4">
        {/* Contenedor de imagen izquierdo */}
        <div className="flex-1 relative aspect-square bg-gradient-to-br from-rose-100 to-warm-100 rounded-2xl overflow-hidden group">
          <div 
            className="w-full h-full cursor-zoom-in relative"
            onClick={() => setShowLightbox(true)}
          >
            {/* ImageZoomPanel con zoom lateral */}
            <ImageZoomPanel
              src={images[selectedImage]}
              alt={`${productName} - Imagen ${selectedImage + 1}`}
              zoomLevel={2}
            />
          </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-800" />
            </button>
          </>
        )}

        {/* Zoom indicator */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Click para ampliar
        </div>

        {/* Image counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {selectedImage + 1} / {images.length}
        </div>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                selectedImage === index
                  ? 'ring-4 ring-rose-500 scale-95'
                  : 'hover:ring-2 hover:ring-rose-300'
              }`}
            >
              <Image
                src={image}
                alt={`${productName} - Miniatura ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 15vw"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={() => {
              setShowLightbox(false);
              setZoomLevel(1);
            }}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
          >
            <XMarkIcon className="w-6 h-6 text-white" />
          </button>

          {/* Zoom controls */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 1}
              className="bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full transition-colors"
            >
              <MagnifyingGlassMinusIcon className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 3}
              className="bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full transition-colors"
            >
              <MagnifyingGlassPlusIcon className="w-6 h-6 text-white" />
            </button>
            <div className="bg-white/10 px-4 py-3 rounded-full">
              <span className="text-white font-semibold">{Math.round(zoomLevel * 100)}%</span>
            </div>
          </div>

          {/* Navigation in lightbox */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors z-10"
              >
                <ChevronLeftIcon className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors z-10"
              >
                <ChevronRightIcon className="w-8 h-8 text-white" />
              </button>
            </>
          )}

          {/* Image counter in lightbox */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 text-white px-4 py-2 rounded-full z-10">
            {selectedImage + 1} / {images.length}
          </div>

          {/* Zoomable image */}
          <div 
            className="relative max-w-5xl max-h-[85vh]"
            style={{
              transform: `scale(${zoomLevel})`,
              transition: 'transform 0.3s ease',
            }}
          >
            <Image
              src={images[selectedImage]}
              alt={`${productName} - Imagen ${selectedImage + 1}`}
              width={1200}
              height={1200}
              className="rounded-2xl object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}

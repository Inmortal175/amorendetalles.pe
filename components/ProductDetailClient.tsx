'use client';

import { useState } from 'react';
import { ChatBubbleBottomCenterTextIcon, MapPinIcon } from '@heroicons/react/24/outline';
import LocationPicker from './LocationPicker';
import { WHATSAPP_NUMBER, BUSINESS_NAME, getGreetingByTime } from '@/data/products';

interface Location {
  lat: number;
  lng: number;
  googleMapsLink: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  requiresImage: boolean;
}

interface ProductDetailClientProps {
  product: Product;
  whatsappLink: string;
}

export default function ProductDetailClient({ product, whatsappLink }: ProductDetailClientProps) {
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handleLocationConfirm = (location: Location) => {
    setSelectedLocation(location);
    setShowLocationPicker(false);
  };

  const generateWhatsAppMessage = () => {
    const greeting = getGreetingByTime();
    let message = `${greeting},%0AQuiero hacer un pedido en _*${encodeURIComponent(BUSINESS_NAME)}*_%0A%0A`;
    message += `*Producto:* ${encodeURIComponent(product.name)}%0A`;
    message += `*Precio base:* S/${product.price}%0A`;
    message += `*Personalizable:* Si%0A`;

    // Agrega detalles faltantes del producto
    if (product.requiresImage) {
      message += `*Requiere imagen de los enamorados:* Si%0A`;
    }

    message += `%0A> Entiendo que la reserva es del 50%25 mínimo y se realiza por Yape.%0A`;
    
    if (selectedLocation) {
      message += `%0A_*Ubicación de entrega:*_%0A${selectedLocation.googleMapsLink}%0A`;
      message += `_Listo para coordinar entrega y reserva._`;
    } else {
      message += `_Quedo atento para realizar la reserva._`;
    }
    
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };


  return (
    <>
      {/* Botón para compartir ubicación */}
      <div className="mb-6">
        <button
          onClick={() => setShowLocationPicker(true)}
          className="w-full flex items-center justify-center gap-3 bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 text-blue-900 px-6 py-4 rounded-xl font-semibold transition-all"
        >
          <MapPinIcon className="w-6 h-6" />
          <div className="text-left">
            <div className="font-bold">Compartir ubicación de entrega</div>
            <div className="text-sm font-normal text-blue-700">
              {selectedLocation ? '✓ Ubicación seleccionada' : 'Recomendado - Facilita tu entrega'}
            </div>
          </div>
        </button>
      </div>

      {/* WhatsApp CTA */}
      <div className="sticky bottom-4 bg-white rounded-2xl p-6 shadow-xl border-2 border-rose-200">
        <a
          href={generateWhatsAppMessage()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />
          <span>Pedir por WhatsApp</span>
        </a>
        {selectedLocation && (
          <p className="text-xs text-center text-green-600 mt-3">
            ✓ Con ubicación de entrega incluida
          </p>
        )}
        <p className="text-xs text-center text-gray-500 mt-2">
          El mensaje incluye la política de reserva automáticamente
        </p>
      </div>

      {/* Location Picker Modal */}
      {showLocationPicker && (
        <LocationPicker
          onLocationConfirm={handleLocationConfirm}
          onClose={() => setShowLocationPicker(false)}
        />
      )}
    </>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { MapPinIcon, XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface Location {
  lat: number;
  lng: number;
  googleMapsLink: string;
}

interface Props {
  onLocationConfirm: (location: Location) => void;
  onClose: () => void;
}

export default function LocationPicker({ onLocationConfirm, onClose }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const markerInstance = useRef<google.maps.Marker | null>(null);

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initMap = () => {
    if (!mapRef.current || mapInstance.current) return;

    const center = { lat: -13.16031, lng: -74.225815 }; // Ayacucho

    const map = new google.maps.Map(mapRef.current, {
      center,
      zoom: 13,
      streetViewControl: false,
      mapTypeControl: false,
    });

    const marker = new google.maps.Marker({
      map,
      position: center,
      draggable: true,
    });

    map.addListener('click', (e:any) => {
      if (!e.latLng) return;
      marker.setPosition(e.latLng);
      updateLocation(e.latLng.lat(), e.latLng.lng());
    });

    marker.addListener('dragend', (e:any) => {
      if (!e.latLng) return;
      updateLocation(e.latLng.lat(), e.latLng.lng());
    });

    mapInstance.current = map;
    markerInstance.current = marker;
    setMapReady(true);
  };

  const updateLocation = (lat: number, lng: number) => {
    setSelectedLocation({
      lat,
      lng,
      googleMapsLink: `https://www.google.com/maps?q=${lat},${lng}`,
    });
  };

  const useMyLocation = () => {
    if (!navigator.geolocation) {
      setError('Tu navegador no soporta geolocalización');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const loc = { lat: latitude, lng: longitude };

        mapInstance.current?.setCenter(loc);
        mapInstance.current?.setZoom(16);
        markerInstance.current?.setPosition(loc);
        updateLocation(latitude, longitude);
      },
      () => setError('No se pudo obtener tu ubicación')
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
        strategy="afterInteractive"
        onLoad={initMap}
        onError={() => setError('Error cargando Google Maps')}
      />

      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl overflow-hidden">
        <header className="flex justify-between items-center p-4 border-b">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-rose-600" />
            Punto de entrega
          </h3>
          <button onClick={onClose}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </header>

        <div className="p-4 space-y-4">
          <button
            onClick={useMyLocation}
            className="w-full bg-rose-600 text-white py-3 rounded-xl font-semibold"
          >
            Usar mi ubicación actual
          </button>

          <div className="h-96 rounded-xl border overflow-hidden">
            {!mapReady && !error && (
              <div className="h-full flex items-center justify-center">
                Cargando mapa…
              </div>
            )}
            {error && (
              <div className="h-full flex items-center justify-center text-red-600 text-sm">
                {error}
              </div>
            )}
            <div ref={mapRef} className="w-full h-full" />
          </div>

          {selectedLocation && (
            <div className="bg-green-50 border border-green-200 p-3 rounded-xl text-sm">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircleIcon className="w-5 h-5 text-green-600" />
                Ubicación lista
              </div>
              <a
                href={selectedLocation.googleMapsLink}
                target="_blank"
                className="text-blue-600 underline text-xs"
              >
                Ver en Google Maps
              </a>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 border rounded-xl py-2"
            >
              Omitir
            </button>
            <button
              disabled={!selectedLocation}
              onClick={() => selectedLocation && onLocationConfirm(selectedLocation)}
              className="flex-1 bg-green-600 text-white rounded-xl py-2 disabled:bg-gray-300"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

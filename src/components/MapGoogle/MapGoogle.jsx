// components/Map.js
'use client'

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

const MapGoogle = () => {
  // Cargar los scripts de Google Maps con tu API key
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Guarda tu API key en un archivo .env
  });

  // Ubicación específica (Armenia, Quindío, Colombia)
  const center = useMemo(() => ({ lat: 4.5426, lng: -75.6682 }), []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerStyle={{ width: '100%', height: '400px' }} // Ajustar tamaño
    >
      {/* Marker en la ubicación deseada */}
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MapGoogle;

// components/Map.js
'use client'

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

const MapGoogle = () => {
 
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, 
  });


  const center = useMemo(() => ({ lat: 4.5426, lng: -75.6682 }), []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerStyle={{ width: '70%', height: '400px' }} 
    >
  
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MapGoogle;

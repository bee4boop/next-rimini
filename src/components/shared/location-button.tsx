'use client';

import { Button } from '@/components/ui/button';
import { useLocationStore } from '@/providers/location-store-provider';
import { MapPinIcon } from 'lucide-react';

export default function LocationButton() {
  const { location, setLocation, setLocationFromGeo, clearLocation } =
    useLocationStore((state) => state);

  return (
    <>
      <Button onClick={setLocationFromGeo}>
        <MapPinIcon />
        <span>{location?.address || 'Выберите адрес'}</span>
      </Button>
    </>
  );
}
function useShallow(
  arg0: (state: any) => {
    location: any;
    setLocation: any;
    setLocationFromGeo: any;
    clearLocation: any;
  }
): (
  state: {
    location: {
      lat: number;
      lng: number;
      address: string;
      autoDetected: boolean;
    } | null;
  } & {
    setLocation: (
      loc: {
        lat: number;
        lng: number;
        address: string;
        autoDetected: boolean;
      } | null
    ) => void;
    clearLocation: () => void;
    setLocationFromGeo: () => void;
  }
) => unknown {
  throw new Error('Function not implemented.');
}

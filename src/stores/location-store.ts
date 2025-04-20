import { create, createStore } from 'zustand';
import { persist } from 'zustand/middleware';

type Location = {
  lat: number;
  lng: number;
  address: string;
  autoDetected: boolean;
} | null;

type LocationState = {
  location: Location;
};

type LocationAction = {
  setLocation: (loc: Location) => void;
  clearLocation: () => void;
  setLocationFromGeo: () => void;
};

export type LocationStore = LocationState & LocationAction;

export const initLocationStore = (): LocationState => {
  let location: Location = null;
  if (!navigator.geolocation) {
    return { location };
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      location = {
        lat: latitude,
        lng: longitude,
        address: 'Определён автоматически',
        autoDetected: true,
      };
    },
    () => {
      console.error('Не удалось получить геолокацию');
    }
  );
  return { location };
};

export const defaultInitState: LocationState = {
  location: null,
};

export const createLocationStore = (
  initState: LocationState = defaultInitState
) => {
  return createStore<LocationStore>()(
    persist(
      (set) => ({
        location: null,
        setLocation: (location) => set({ location }),
        clearLocation: () => set({ location: null }),
        setLocationFromGeo: () => {
          if (!navigator.geolocation) {
            return;
          }
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              set({
                location: {
                  lat: latitude,
                  lng: longitude,
                  address: 'Определён автоматически',
                  autoDetected: true,
                },
              });
            },
            () => {
              console.error('Не удалось получить геолокацию');
            }
          );
        },
      }),
      { name: 'location-storage' }
    )
  );
};

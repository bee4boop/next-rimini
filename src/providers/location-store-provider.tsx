'use client';

import {
  createLocationStore,
  initLocationStore,
  type LocationStore,
} from '@/stores/location-store';
import { createContext, useContext, useRef, type ReactNode } from 'react';
import { useStore } from 'zustand';

export type LocationStoreApi = ReturnType<typeof createLocationStore>;

export const LocationStoreContext = createContext<LocationStoreApi | undefined>(
  undefined
);

export interface LocationStoreProviderProps {
  children: ReactNode;
}

export const LocationStoreProvider = ({
  children,
}: LocationStoreProviderProps) => {
  const storeRef = useRef<LocationStoreApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createLocationStore(initLocationStore());
  }

  return (
    <LocationStoreContext.Provider value={storeRef.current}>
      {children}
    </LocationStoreContext.Provider>
  );
};

export const useLocationStore = <T,>(selector: (store: LocationStore) => T) => {
  const locationStoreContext = useContext(LocationStoreContext);

  if (!locationStoreContext) {
    throw new Error(
      'useLocationStore must be used within LocationStoreContext'
    );
  }

  return useStore(locationStoreContext, selector);
};

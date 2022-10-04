import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { getGeoLocation, setGeoLocation } from "lib/shoppingGeoLocation";
import type { ShoppingGeoLocation } from "lib/shoppingGeoLocation";
import useGeoTooltip from "hooks/useGeoTooltip";

type ShoppingGeoLocationSetter = (location: ShoppingGeoLocation) => void;

type ShoppingGeoContextValue = [
  ShoppingGeoLocation | null,
  ShoppingGeoLocationSetter,
];

const ShoppingGeoContext = createContext<ShoppingGeoContextValue>([
  null,
  () => {
    // Do nothing
  },
]);

interface ShoppingGeoProviderProps {
  initialGeoLocation?: ShoppingGeoLocation;
  children: React.ReactNode;
}

export function ShoppingGeoProvider({
  initialGeoLocation,
  children,
}: ShoppingGeoProviderProps): JSX.Element {
  const [
    geoLocation,
    setGeoLocationState,
  ] = useState<ShoppingGeoLocation | null>(
    initialGeoLocation || getGeoLocation(),
  );

  useEffect(() => {
    setGeoLocationState((g) => g || getGeoLocation());
  }, []);

  const { open: openGeoTooltip } = useGeoTooltip();

  const setShoppingGeoLocation = useCallback(
    (location: ShoppingGeoLocation) => {
      setGeoLocation(location);
      setGeoLocationState(location);
      openGeoTooltip();
    },
    [openGeoTooltip],
  );

  const value: ShoppingGeoContextValue = useMemo(
    () => [geoLocation, setShoppingGeoLocation],
    [geoLocation, setShoppingGeoLocation],
  );

  return (
    <ShoppingGeoContext.Provider value={value}>
      {children}
    </ShoppingGeoContext.Provider>
  );
}

export default function useShoppingGeoLocation(): ShoppingGeoContextValue {
  return useContext(ShoppingGeoContext);
}

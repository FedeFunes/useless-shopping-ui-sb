import { useMemo } from "react";
import {
  getDefaultGeoLocation,
  ShoppingGeoLocation,
} from "lib/shoppingGeoLocation";

type ShoppingDefaultGeoContextValue = [ShoppingGeoLocation];

export default function useShoppingDefaultGeoLocation(): ShoppingDefaultGeoContextValue {
  const defaultGeo = useMemo(() => getDefaultGeoLocation(), []);

  return [defaultGeo];
}

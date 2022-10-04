import { useEffect, useCallback } from "react";
import { getCookie } from "lib/cookie";
import useGeoForm from "hooks/useGeoForm";
import useShoppingGeoLocation from "hooks/useShoppingGeoLocation";

const COOKIE_CHECKOUT_POSTAL_CODE_NAME = "checkoutPostalCode";

export default function CheckoutGeo() {
  const [currentGeoLocation, setGeoLocation] = useShoppingGeoLocation();
  const onSubmit = useCallback(
    (checkoutGeoLocation) => {
      if (!currentGeoLocation) {
        setGeoLocation(checkoutGeoLocation);
      }
    },
    [setGeoLocation],
  );

  const [, onPostalNumberSubmit] = useGeoForm({ onSubmit });

  useEffect(() => {
    const checkoutPostalNumber = getCookie(
      COOKIE_CHECKOUT_POSTAL_CODE_NAME,
      global.document?.cookie,
    );

    if (checkoutPostalNumber) {
      onPostalNumberSubmit(checkoutPostalNumber);
    }
  }, []);

  return null;
}

import { useCallback, useRef, useState } from "react";
import { gql, useApolloClient } from "@apollo/client";

import { ShoppingGeoLocation } from "lib/shoppingGeoLocation";

const POSTAL_CODES_QUERY = gql`
  query postalCodes($postalNumber: PostalNumber) {
    postalCodes(number: $postalNumber) {
      id
      number
      location {
        id
        name
        __typename
      }
      region
      __typename
    }
  }
`;

type Result = {
  postalCodes: ShoppingGeoLocation[];
};

type Variables = {
  postalNumber: string;
};

interface Props<T> {
  onSubmit: (
    shoppingGeoLocation: ShoppingGeoLocation,
    bag: { reset: () => unknown },
  ) => T;
}

type GeoFormState = "idle" | "options" | "success";

export type GeoFormErrorCode = "invalidPostalCode" | "serverError";

interface GeoFormBag {
  reset: () => void;

  loading: boolean;

  error: boolean;
  errorCodes?: GeoFormErrorCode[];
}

export default function useGeoForm<T>({
  onSubmit,
}: Props<T>): [
  GeoFormState,
  (postalNumber: string) => Promise<void>,
  ShoppingGeoLocation[],
  (locationOption: ShoppingGeoLocation) => T,
  GeoFormBag,
] {
  const client = useApolloClient();

  const [state, setState] = useState<GeoFormState>("idle");
  const [errorCodes, setErrorCodes] = useState<GeoFormErrorCode[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [locationOptions, setLocationOptions] = useState<ShoppingGeoLocation[]>(
    [],
  );

  const reset = useCallback(() => {
    setState("idle");
    setErrorCodes([]);
    setLoading(false);
    setLocationOptions([]);
  }, []);

  const onError = useCallback((errorCode, ...errorCodes) => {
    setState("idle");
    setErrorCodes([errorCode, ...errorCodes]);
    setLoading(false);
    setLocationOptions([]);

    throw errorCode;
  }, []);

  const onOptions = useCallback((options) => {
    setState("options");
    setErrorCodes([]);
    setLoading(false);
    setLocationOptions(options);
  }, []);

  const timeoutRef = useRef(0);
  const onSuccess = useCallback(
    (shoppingGeoLocation) => {
      setState("success");
      setErrorCodes([]);
      setLoading(false);
      setLocationOptions([]);

      clearTimeout(timeoutRef.current);

      return onSubmit(shoppingGeoLocation, { reset });
    },
    [onSubmit],
  );

  const onPostalNumberSubmit = useCallback(
    (postalNumber: string) => {
      setLoading(true);
      return client
        .query<Result, Variables>({
          query: POSTAL_CODES_QUERY,
          variables: {
            postalNumber,
          },
        })
        .then(({ data }) => data.postalCodes)
        .then((options) => {
          if (!options || options.length === 0) {
            onError("invalidPostalCode");
          } else if (options.length > 1) {
            onOptions(options);
          } else if (options.length === 1) {
            onSuccess(options[0]);
          }
        })
        .catch((e) => {
          onError(e === "invalidPostalCode" ? e : "serverError");
        });
    },
    [client, onError, onOptions, onSuccess],
  );

  return [
    state,
    onPostalNumberSubmit,
    locationOptions,
    onSuccess,
    { loading, error: errorCodes.length > 0, errorCodes, reset },
  ];
}
